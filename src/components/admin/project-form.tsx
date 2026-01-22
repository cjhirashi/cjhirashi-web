"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { type Project } from "@prisma/client"

import { TooltipSimple } from "@/components/ui/tooltip-simple"

interface ProjectFormProps {
    project?: Project
    action: (formData: FormData) => Promise<void>
}

export function ProjectForm({ project, action }: ProjectFormProps) {
    return (
        <form action={action} className="space-y-8">
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input
                        id="title"
                        name="title"
                        defaultValue={project?.title}
                        required
                        placeholder="Título del proyecto"
                    />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="description">Descripción Corta</Label>
                        <TooltipSimple text="Se muestra en la tarjeta del proyecto en la lista principal." />
                    </div>
                    <Textarea
                        id="description"
                        name="description"
                        defaultValue={project?.description}
                        required
                        placeholder="Breve descripción..."
                    />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="content">Contenido (Markdown)</Label>
                        <TooltipSimple text="Descripción detallada para la página interna. Soporta formato Markdown." />
                    </div>
                    <Textarea
                        id="content"
                        name="content"
                        defaultValue={project?.content}
                        required
                        className="min-h-[300px] font-mono"
                        placeholder="# Mi Proyecto..."
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                        <Label htmlFor="link">Enlace Demo (Live)</Label>
                        <Input
                            id="link"
                            name="link"
                            defaultValue={project?.link || ""}
                            placeholder="https://mi-app.com"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="githubLink">Repositorio GitHub</Label>
                        <Input
                            id="githubLink"
                            name="githubLink"
                            defaultValue={project?.githubLink || ""}
                            placeholder="https://github.com/usuario/repo"
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="imageUrl">URL de Imagen</Label>
                        <TooltipSimple text="URL absoluta de la imagen de portada. Si se deja vacío, se mostrará el icono." />
                    </div>
                    <Input
                        id="imageUrl"
                        name="imageUrl"
                        defaultValue={project?.imageUrl || ""}
                        placeholder="/images/proyecto.jpg o https://..."
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="category">Categoría</Label>
                            <TooltipSimple text="Clasifica el proyecto (ej: datascience, webdev, mobile). Se usa para el filtro principal." />
                        </div>
                        <Input
                            id="category"
                            name="category"
                            defaultValue={project?.category || "datascience"}
                            placeholder="datascience, webdev, mobile"
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="label">Insignia (Badge)</Label>
                            <TooltipSimple text="Pequeño texto destacado en la esquina de la tarjeta (ej: AI Model, SaaS)." />
                        </div>
                        <Input
                            id="label"
                            name="label"
                            defaultValue={project?.label || "Project"}
                            placeholder="AI Model, SaaS, App"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="tech">Palabras Clave (Tech)</Label>
                            <TooltipSimple text="Tecnologías ocultas para el buscador (separadas por espacios). Ej: python tensorflow react." />
                        </div>
                        <Input
                            id="tech"
                            name="tech"
                            defaultValue={project?.tech || ""}
                            placeholder="python tensorflow ai (separadas por espacio)"
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="tags">Etiquetas Visibles</Label>
                            <TooltipSimple text="Etiquetas que se muestran en el detalle (separadas por coma). Ej: React, TypeScript." />
                        </div>
                        <Input
                            id="tags"
                            name="tags"
                            defaultValue={project?.tags?.join(", ")}
                            placeholder="React, TypeScript, Tailwind"
                        />
                        <p className="text-xs text-muted-foreground">
                            Etiquetas separadas por coma
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="iconLabel">Etiqueta del Icono</Label>
                            <TooltipSimple text="Texto pequeño junto al icono en la tarjeta (ej: Tech, Framework)." />
                        </div>
                        <Input
                            id="iconLabel"
                            name="iconLabel"
                            defaultValue={project?.iconLabel || ""}
                            placeholder="ej: TensorFlow"
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="iconKey">Nombre Icono (Lucide)</Label>
                            <TooltipSimple text="Nombre exacto del icono de Lucide React (ej: Terminal, Code, Cpu, Database)." />
                        </div>
                        <Input
                            id="iconKey"
                            name="iconKey"
                            defaultValue={project?.iconKey || ""}
                            placeholder="Terminal, Code, Smartphone..."
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="published"
                        name="published"
                        defaultChecked={project?.published}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="published">Publicar inmediatamente</Label>
                </div>
            </div>

            <div className="flex gap-4">
                <Button type="submit">
                    {project ? "Actualizar Proyecto" : "Crear Proyecto"}
                </Button>
                <Button variant="outline" type="button" onClick={() => window.history.back()}>
                    Cancelar
                </Button>
            </div>
        </form>
    )
}
