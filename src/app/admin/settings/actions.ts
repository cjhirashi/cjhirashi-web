'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function getSettings() {
    // Public settings do not require auth
    // const session = await auth()
    // if (!session?.user) redirect('/auth/login')

    const settings = await prisma.siteSettings.findFirst()

    // Return existing or default structure if null
    return settings || {
        siteName: 'Nexus Web',
        description: 'A modern modular website.',
        logoUrl: '',
        faviconUrl: '',
        socials: {},
        theme: {
            radius: 0.5,
            light: {
                background: '#ffffff',
                foreground: '#020817',
                card: '#ffffff',
                cardForeground: '#020817',
                popover: '#ffffff',
                popoverForeground: '#020817',
                primary: '#2563EB',
                primaryForeground: '#f8fafc',
                secondary: '#7C3AED',
                secondaryForeground: '#f8fafc',
                muted: '#f1f5f9',
                mutedForeground: '#64748b',
                accent: '#f1f5f9',
                accentForeground: '#0f172a',
                destructive: '#ef4444',
                destructiveForeground: '#f8fafc',
                border: '#e2e8f0',
                input: '#e2e8f0',
                ring: '#2563EB',
            },
            dark: {
                background: '#020817',
                foreground: '#f8fafc',
                card: '#020817',
                cardForeground: '#f8fafc',
                popover: '#020817',
                popoverForeground: '#f8fafc',
                primary: '#3b82f6',
                primaryForeground: '#020817',
                secondary: '#8b5cf6',
                secondaryForeground: '#020817',
                muted: '#1e293b',
                mutedForeground: '#94a3b8',
                accent: '#1e293b',
                accentForeground: '#f8fafc',
                destructive: '#7f1d1d',
                destructiveForeground: '#f8fafc',
                border: '#1e293b',
                input: '#1e293b',
                ring: '#1d4ed8',
            }
        }
    }
}

export async function updateSettings(formData: FormData) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    const siteName = formData.get('siteName') as string
    const description = formData.get('description') as string
    const logoUrl = formData.get('logoUrl') as string
    const faviconUrl = formData.get('faviconUrl') as string

    // JSON parsing for complex fields
    // JSON parsing for complex fields
    const socials = JSON.parse(formData.get('socials') as string || '{}')
    // Theme is now managed via global.css, so we ignore it here to prevent overwriting

    // Upsert mechanism: find first, if exists update, else create
    const existing = await prisma.siteSettings.findFirst()

    if (existing) {
        await prisma.siteSettings.update({
            where: { id: existing.id },
            data: {
                siteName,
                description,
                logoUrl,
                faviconUrl,
                socials,
            }
        })
    } else {
        await prisma.siteSettings.create({
            data: {
                siteName,
                description,
                logoUrl,
                faviconUrl,
                socials,
            }
        })
    }

    revalidatePath('/', 'layout')
    revalidatePath('/admin/settings')
}
