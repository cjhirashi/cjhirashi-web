import { createProject } from "../actions"
import { ProjectForm } from "@/components/admin/project-form"

export default function NewProjectPage() {
    return (
        <div className="space-y-8 max-w-2xl">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Create Project</h2>
            </div>
            <div className="rounded-xl border bg-card p-6">
                <ProjectForm action={createProject} />
            </div>
        </div>
    )
}
