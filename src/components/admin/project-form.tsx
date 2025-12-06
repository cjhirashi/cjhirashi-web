"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { type Project } from "@prisma/client"

interface ProjectFormProps {
    project?: Project
    action: (formData: FormData) => Promise<void>
}

export function ProjectForm({ project, action }: ProjectFormProps) {
    return (
        <form action={action} className="space-y-8">
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        defaultValue={project?.title}
                        required
                        placeholder="Project title"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        name="description"
                        defaultValue={project?.description}
                        required
                        placeholder="Short description for cards"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        id="content"
                        name="content"
                        defaultValue={project?.content}
                        required
                        className="min-h-[300px] font-mono"
                        placeholder="Markdown content..."
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                        <Label htmlFor="link">Live Link</Label>
                        <Input
                            id="link"
                            name="link"
                            defaultValue={project?.link || ""}
                            placeholder="https://example.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="githubLink">GitHub Link</Label>
                        <Input
                            id="githubLink"
                            name="githubLink"
                            defaultValue={project?.githubLink || ""}
                            placeholder="https://github.com/..."
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={project?.imageUrl || ""}
                        placeholder="/images/project.jpg"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                        id="tags"
                        name="tags"
                        defaultValue={project?.tags}
                        placeholder="react, typescript, tailwind"
                    />
                    <p className="text-xs text-muted-foreground">
                        Comma separated tags
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="published"
                        name="published"
                        defaultChecked={project?.published}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="published">Publish immediately</Label>
                </div>
            </div>

            <div className="flex gap-4">
                <Button type="submit">
                    {project ? "Update Project" : "Create Project"}
                </Button>
                <Button variant="outline" type="button" onClick={() => window.history.back()}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}
