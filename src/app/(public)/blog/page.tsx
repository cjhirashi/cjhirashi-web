import Link from "next/link"
import { PrismaClient } from "@prisma/client"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const prisma = new PrismaClient()

export const revalidate = 60 // Revalidate every minute

export default async function BlogPage() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
    })

    return (
        <div className="container py-10">
            <div className="mb-8 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Blog</h1>
                <p className="text-xl text-muted-foreground">
                    Thoughts, tutorials, and insights about web development.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                        <Card className="h-full transition-colors hover:bg-muted/50">
                            <CardHeader>
                                <div className="mb-2 text-sm text-muted-foreground">
                                    {formatDate(post.createdAt)}
                                </div>
                                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-3 text-muted-foreground">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <div className="col-span-full text-center text-muted-foreground">
                        No posts found. Check back later!
                    </div>
                )}
            </div>
        </div>
    )
}
