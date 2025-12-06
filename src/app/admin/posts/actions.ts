"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { auth } from "@/lib/auth"

import { slugify } from "@/lib/utils"

const prisma = new PrismaClient()

export async function createPost(formData: FormData) {
    const session = await auth()
    if (!session?.user?.email) {
        throw new Error("Unauthorized")
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if (!user) {
        throw new Error("User not found")
    }

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const tagsString = formData.get("tags") as string
    const published = formData.get("published") === "on"

    // SQLite does not support String[], so we store tags as a comma-separated string
    // But the schema expects String for tags now (based on my previous fix)
    // Wait, if I changed tags to String in schema, I should store it as string.
    // Let's assume tags is just a string in the DB for now.

    await prisma.post.create({
        data: {
            title,
            slug: slugify(title),
            content,
            excerpt,
            tags: tagsString, // Storing as simple string for SQLite
            published,
            authorId: user.id,
        },
    })

    revalidatePath("/admin/posts")
    redirect("/admin/posts")
}

export async function updatePost(id: string, formData: FormData) {
    const session = await auth()
    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const excerpt = formData.get("excerpt") as string
    const tagsString = formData.get("tags") as string
    const published = formData.get("published") === "on"

    await prisma.post.update({
        where: { id },
        data: {
            title,
            slug: slugify(title),
            content,
            excerpt,
            tags: tagsString,
            published,
        },
    })

    revalidatePath("/admin/posts")
    redirect("/admin/posts")
}

export async function deletePost(id: string) {
    const session = await auth()
    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    await prisma.post.delete({
        where: { id },
    })

    revalidatePath("/admin/posts")
}
