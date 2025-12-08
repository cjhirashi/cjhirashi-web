'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { slugify } from '@/lib/utils'

const prisma = new PrismaClient()

// eventSchema removed
// const eventSchema = ...

export async function createEvent(formData: FormData) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const content = formData.get('content') as string
    const location = formData.get('location') as string
    const dateStr = formData.get('date') as string
    const imageUrl = formData.get('imageUrl') as string
    const published = formData.get('published') === 'on'

    // Basic validation could go here, relying on simple casting for now

    // Generate unique slug
    let slug = slugify(title)
    let count = 1
    while (await prisma.event.findUnique({ where: { slug } })) {
        slug = `${slugify(title)}-${count}`
        count++
    }

    await prisma.event.create({
        data: {
            title,
            slug,
            description,
            content,
            location,
            date: new Date(dateStr),
            imageUrl,
            published,
        },
    })

    revalidatePath('/admin/events')
    redirect('/admin/events')
}

export async function updateEvent(id: string, formData: FormData) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const content = formData.get('content') as string
    const location = formData.get('location') as string
    const dateStr = formData.get('date') as string
    const imageUrl = formData.get('imageUrl') as string
    const published = formData.get('published') === 'on'

    // Note: Not updating slug to preserve URLs

    await prisma.event.update({
        where: { id },
        data: {
            title,
            description,
            content,
            location,
            date: new Date(dateStr),
            imageUrl,
            published,
        },
    })

    revalidatePath('/admin/events')
    redirect('/admin/events')
}

export async function deleteEvent(id: string) {
    const session = await auth()
    if (!session?.user) redirect('/auth/login')

    await prisma.event.delete({
        where: { id },
    })

    revalidatePath('/admin/events')
}
