import Link from "next/link"
import { PrismaClient } from "@prisma/client"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const prisma = new PrismaClient()

export const revalidate = 60

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
    })

    return (
        <div className="container py-10">
            <div className="mb-8 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    Portfolio
                </h1>
                <p className="text-xl text-muted-foreground">
                    A collection of my recent work and side projects.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.id} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">{project.description}</p>
                            {project.tags && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.split(",").map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                                        >
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}
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
                            {project.githubLink && (
                                <Button asChild variant="outline" size="sm" className="w-full">
                                    <Link href={project.githubLink} target="_blank">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
                {projects.length === 0 && (
                    <div className="col-span-full text-center text-muted-foreground">
                        No projects found yet.
                    </div>
                )}
            </div>
        </div>
    )
}
