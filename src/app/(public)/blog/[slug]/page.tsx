import { notFound } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import ReactMarkdown from "react-markdown"
import { formatDate } from "@/lib/utils"

const prisma = new PrismaClient()

export const revalidate = 60

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        select: { slug: true },
    })

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await prisma.post.findUnique({
        where: { slug },
        include: { author: true },
    })

    if (!post || !post.published) {
        notFound()
    }

    return (
        <article className="container max-w-3xl py-10">
            <div className="mb-8 space-y-4 text-center">
                <div className="text-sm text-muted-foreground">
                    {formatDate(post.createdAt)}
                </div>
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    {post.title}
                </h1>
                {post.excerpt && (
                    <p className="text-xl text-muted-foreground">{post.excerpt}</p>
                )}
            </div>

            <div className="prose prose-slate dark:prose-invert mx-auto max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    )
}
