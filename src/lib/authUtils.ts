import jwt from 'jsonwebtoken';
import { JWTpayload } from '@/types/guildborne';

const JWT_SECRET: string = process.env.JWT_SECRET || 'dev_secret';

export function generateToken(payload: JWTpayload, rememberMe: boolean = false) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: rememberMe ? '30d' : '1h'
    });
}

export function verifyToken(token: string): JWTpayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as JWTpayload;
    } catch(err) {
        return null;
    }
}

export const success = (message: string) => (
    { success: message }
)

export const fail = (message: string) => (
    { success: message }
)