import prisma from "@/lib/prisma"
import { BlogClient } from "./blog-client"

export const revalidate = 60 // Revalidate every minute

export default async function BlogPage() {
    const posts = await prisma.post.findMany({
        where: {
            published: true,
            publishedAt: {
                lte: new Date()
            }
        },
        orderBy: { publishedAt: "desc" },
        include: {
            author: true
        }
    })

    return <BlogClient posts={posts} />
}
