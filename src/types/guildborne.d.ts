export type Role =  "GUILDMASTER" | "ADVENTURER" | "SEEKER"

export type Gender = "MALE" | "FEMALE" | "OTHER"

export type NewUser = {
    email: string;
    name: string;
    gender: Gender;
    password: string;
    role: Role;
}

export type UserLogin = {
    email: string;
    password: string;
    rememberMe: boolean;
}

export type JWTpayload =  {
    id: string,
    name: string,
    email: string,
    role: Role,
    emailVerified: boolean
}