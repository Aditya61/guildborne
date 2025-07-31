import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from "uuid";
import { prisma } from './prisma';
import { success, fail, generateToken, verifyToken } from './authUtils';
import { NewUser } from '@/types/guildborne';
import { sendVerificationEmail } from './mail';
import { cookies } from 'next/headers';

export async function handleRegister( { email, name, gender, password, role }: NewUser ) {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return fail("User Already Exists!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
                gender: gender,
                role: role
            }
        });

        const verifyToken: string = uuidv4();
        const expiresAt: Date = new Date(Date.now() + 3 * 60 * 60 * 1000);

        await prisma.verifyEmail.create({
            data: {
                userId: user.id,
                verifyToken: verifyToken,
                expiresAt: expiresAt
            }
        })

        sendVerificationEmail(email, verifyToken);

        return success("Verification Email Sent.");
    } catch(err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
        } else {
            console.log('Unexpected error', err);
        }
        return fail("User Registration Failed!");
    }
}

export async function handleLogin({ email, password, rememberMe }: {
    email: string;
    password: string;
    rememberMe: boolean;
}) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return fail("Invalid email or password!");
    }

    if (!user.emailVerified) {
        return handleEmailResend({userId: user.id, email: user.email})
    }

    const token = generateToken({id: user.id, name: user.name, email: user.email, role: user.role, emailVerified: user.emailVerified}, rememberMe);

    const cookieStore = await cookies();

    cookieStore.set('jwt', token, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: rememberMe ? 60 * 60 * 24 * 30 : 60 * 60
    });

    return success("User Logged In.");
}

async function handleEmailResend({ userId, email }: {
    userId: string;
    email: string;
}) {
    const verifyToken: string = uuidv4();
    const expiresAt: Date = new Date(Date.now() + 3 * 60 * 60 * 1000);

    await prisma.verifyEmail.create({
        data: {
            userId: userId,
            verifyToken: verifyToken,
            expiresAt: expiresAt
        }
    })

    sendVerificationEmail(email, verifyToken);

    return success("Verification Email Sent.");
}