import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        session({ session, token }) {
            if (session.user && token) {
                session.user.role = token.role as string
            }
            return session
        },
    },
    providers: [], // Providers added in lib/auth.ts
} satisfies NextAuthConfig
