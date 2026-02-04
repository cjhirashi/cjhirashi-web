"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import prisma from "@/lib/prisma"
import { auth } from "@/lib/auth"

import { slugify } from "@/lib/utils"

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
    const tags = tagsString.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "").join(",")
    const published = formData.get("published") === "on"
    const publishedAtString = formData.get("publishedAt") as string
    let publishedAt = publishedAtString ? new Date(publishedAtString) : null
    const coverImage = formData.get("coverImage") as string
    const category = formData.get("category") as string
    const featured = formData.get("featured") === "true"

    if (published && !publishedAt) {
        publishedAt = new Date()
    } else if (!published) {
        publishedAt = null
    }

    await prisma.post.create({
        data: {
            title,
            slug: slugify(title),
            content,
            excerpt,
            tags,
            published,
            publishedAt,
            coverImage,
            category,
            featured,
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
    const tags = tagsString.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "").join(",")
    const published = formData.get("published") === "on"
    const publishedAtString = formData.get("publishedAt") as string
    let publishedAt = publishedAtString ? new Date(publishedAtString) : null
    const coverImage = formData.get("coverImage") as string
    const category = formData.get("category") as string
    const featured = formData.get("featured") === "true"

    if (published && !publishedAt) {
        publishedAt = new Date()
    } else if (!published) {
        publishedAt = null
    }

    await prisma.post.update({
        where: { id },
        data: {
            title,
            slug: slugify(title),
            content,
            excerpt,
            tags,
            published,
            publishedAt,
            coverImage,
            category,
            featured,
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
