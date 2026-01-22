import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import { NextResponse } from 'next/server'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isOnAdmin = req.nextUrl.pathname.startsWith('/admin')
    const isOnLogin = req.nextUrl.pathname.startsWith('/auth/login')

    if (isOnAdmin) {
        if (isLoggedIn) return NextResponse.next()
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
    }

    if (isOnLogin) {
        if (isLoggedIn) return NextResponse.redirect(new URL('/admin', req.nextUrl))
        return NextResponse.next()
    }

    return NextResponse.next()
})

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
