'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
export async function getSection(id: string) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    return await prisma.homeSection.findUnique({
        where: { id },
    })
}

export async function getSections(category: 'HOME' | 'ABOUT' = 'HOME') {
    const whereCondition = category === 'ABOUT'
        ? { type: { startsWith: 'ABOUT_' } }
        : { NOT: { type: { startsWith: 'ABOUT_' } } }

    return await prisma.homeSection.findMany({
        where: whereCondition,
        orderBy: { order: 'asc' },
    })
}


export async function createSection(formData: FormData) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    const type = formData.get('type') as string
    const isActive = formData.get('isActive') === 'on'

    // Extract content fields based on conventions (prefixed with "content_")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: Record<string, any> = {}
    for (const [key, value] of Array.from(formData.entries())) {
        if (key.startsWith('content_')) {
            const fieldName = key.replace('content_', '')
            let fieldValue = value

            // Attempt to parse JSON strings
            if (typeof value === 'string' && (value.startsWith('[') || value.startsWith('{'))) {
                try {
                    fieldValue = JSON.parse(value)
                } catch {
                    // keep as string
                }
            }

            content[fieldName] = fieldValue
        }
    }

    // Handle order (append to end)
    const lastSection = await prisma.homeSection.findFirst({
        orderBy: { order: 'desc' },
    })
    const order = (lastSection?.order ?? 0) + 1

    await prisma.homeSection.create({
        data: {
            type,
            isActive,
            order,
            content,
        },
    })

    revalidatePath('/admin/home')
    revalidatePath('/admin/about')
    revalidatePath('/')

    if (type.startsWith('ABOUT_')) {
        redirect('/admin/about')
    } else {
        redirect('/admin/home')
    }
}

export async function updateSection(id: string, formData: FormData) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    const type = formData.get('type') as string
    const isActive = formData.get('isActive') === 'on'

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: Record<string, any> = {}
    for (const [key, value] of Array.from(formData.entries())) {
        if (key.startsWith('content_')) {
            const fieldName = key.replace('content_', '')
            let fieldValue = value

            // Attempt to parse JSON strings (like for 'items')
            if (typeof value === 'string' && (value.startsWith('[') || value.startsWith('{'))) {
                try {
                    fieldValue = JSON.parse(value)
                } catch {
                    // If parse fails, keep as string
                }
            }

            content[fieldName] = fieldValue
        }
    }

    await prisma.homeSection.update({
        where: { id },
        data: {
            type,
            isActive,
            content,
        },
    })

    revalidatePath('/admin/home')
    revalidatePath('/admin/about')
    revalidatePath('/')

    if (type.startsWith('ABOUT_')) {
        redirect('/admin/about')
    } else {
        redirect('/admin/home')
    }
}

export async function deleteSection(id: string) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    await prisma.homeSection.delete({
        where: { id },
    })

    revalidatePath('/admin/home')
    revalidatePath('/admin/about')
    revalidatePath('/')
}

export async function reorderSections(orderedIds: string[]) {
    const session = await auth()
    if (!session?.user) return

    // Transactional update for safety
    await prisma.$transaction(
        orderedIds.map((id, index) =>
            prisma.homeSection.update({
                where: { id },
                data: { order: index }
            })
        )
    )

    revalidatePath('/admin/home')
    revalidatePath('/admin/about')
    revalidatePath('/')
}
