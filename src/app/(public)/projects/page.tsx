import prisma from "@/lib/prisma"
import { ProjectsClient } from "./projects-client"

export const dynamic = "force-dynamic"
export const revalidate = 60

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany({
        where: {
            published: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    })

    return <ProjectsClient projects={projects} />
}
