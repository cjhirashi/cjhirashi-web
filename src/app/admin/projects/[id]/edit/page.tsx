import { notFound } from "next/navigation"
import prisma from "@/lib/prisma"
import { updateProject } from "../../actions"
import { ProjectForm } from "@/components/admin/project-form"

interface EditProjectPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
    const { id } = await params
    const project = await prisma.project.findUnique({
        where: { id },
    })

    if (!project) {
        notFound()
    }

    const updateAction = updateProject.bind(null, project.id)

    return (
        <div className="space-y-8 max-w-2xl">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Edit Project</h2>
            </div>
            <div className="rounded-xl border bg-card p-6">
                <ProjectForm project={project} action={updateAction} />
            </div>
        </div>
    )
}
