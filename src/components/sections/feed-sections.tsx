import Link from "next/link"
import prisma from "@/lib/prisma"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export async function BlogFeedSection({ content }: SectionProps) {
    const limit = parseInt(content.count) || 3
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: limit,
        include: { author: true }
    })

    if (posts.length === 0) return null

    return (
        <section className="py-12 md:py-16 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{content.title || "Latest Posts"}</h2>
                    {content.subtitle && <p className="text-muted-foreground">{content.subtitle}</p>}
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <Card className="h-full transition-colors hover:bg-muted/50 flex flex-col">
                                <CardHeader>
                                    <div className="mb-2 text-sm text-muted-foreground">
                                        {formatDate(post.createdAt)}
                                    </div>
                                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="line-clamp-3 text-muted-foreground">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export async function ProjectFeedSection({ content }: SectionProps) {
    const limit = parseInt(content.count) || 3
    const projects = await prisma.project.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        take: limit,
    })

    if (projects.length === 0) return null

    return (
        <section className="py-12 md:py-16 lg:py-24 border-t bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{content.title || "Featured Projects"}</h2>
                    {content.subtitle && <p className="text-muted-foreground">{content.subtitle}</p>}
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.id} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                {project.link && (
                                    <Button asChild variant="outline" size="sm" className="w-full">
                                        <Link href={project.link} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}


