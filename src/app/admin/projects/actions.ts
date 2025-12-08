"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { auth } from "@/lib/auth"

import { slugify } from "@/lib/utils"

const prisma = new PrismaClient()

export async function createProject(formData: FormData) {
    const session = await auth()
    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const content = formData.get("content") as string
    const imageUrl = formData.get("imageUrl") as string
    const link = formData.get("link") as string
    const githubLink = formData.get("githubLink") as string
    const tagsString = formData.get("tags") as string
    const tags = tagsString.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
    const published = formData.get("published") === "on"

    await prisma.project.create({
        data: {
            title,
            slug: slugify(title),
            description,
            content,
            imageUrl: imageUrl || null,
            link: link || null,
            githubLink: githubLink || null,
            tags,
            published,
        },
    })

    revalidatePath("/admin/projects")
    redirect("/admin/projects")
}

export async function updateProject(id: string, formData: FormData) {
    const session = await auth()
    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const content = formData.get("content") as string
    const imageUrl = formData.get("imageUrl") as string
    const link = formData.get("link") as string
    const githubLink = formData.get("githubLink") as string
    const tagsString = formData.get("tags") as string
    const tags = tagsString.split(",").map((tag) => tag.trim()).filter((tag) => tag !== "")
    const published = formData.get("published") === "on"

    await prisma.project.update({
        where: { id },
        data: {
            title,
            slug: slugify(title),
            description,
            content,
            imageUrl: imageUrl || null,
            link: link || null,
            githubLink: githubLink || null,
            tags,
            published,
        },
    })

    revalidatePath("/admin/projects")
    redirect("/admin/projects")
}

export async function deleteProject(id: string) {
    const session = await auth()
    if (!session?.user) {
        throw new Error("Unauthorized")
    }

    await prisma.project.delete({
        where: { id },
    })

    revalidatePath("/admin/projects")
}
