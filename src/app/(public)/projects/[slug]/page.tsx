import { notFound } from "next/navigation"
import Link from "next/link"
import prisma from "@/lib/prisma"
import { ArrowLeft, Github, Globe, Calendar, Tag } from "lucide-react"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import Markdown from "react-markdown"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export const dynamic = "force-dynamic"

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const rawProject = await prisma.project.findUnique({
        where: {
            slug,
        },
    })

    const project = rawProject ? {
        ...rawProject,
        tags: rawProject.tags ? rawProject.tags.split(',').map(t => t.trim()).filter(Boolean) : []
    } : null

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-slate-900 border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10" />
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                        <span className="text-slate-700 text-6xl font-bold opacity-20">No Image</span>
                    </div>
                )}
                <div className="absolute inset-0 z-20 container mx-auto px-6 h-full flex flex-col justify-end pb-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 w-fit"
                    >
                        <ArrowLeft className="h-4 w-4" /> Volver a Proyectos
                    </Link>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {project.category && (
                            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/20 text-sm font-medium backdrop-blur-sm">
                                {project.category.toUpperCase()}
                            </span>
                        )}
                        {project.label && (
                            <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 text-sm font-medium backdrop-blur-sm">
                                {project.label}
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                        {project.title}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold mb-4">Sobre el Proyecto</h2>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            {project.description}
                        </p>

                        <div className="mt-8">
                            <Markdown
                                components={{
                                    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 pb-2 border-b border-border text-foreground scroll-m-20">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground scroll-m-20">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground scroll-m-20">{children}</h3>,
                                    p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">{children}</p>,
                                    ul: ({ children }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground">{children}</ul>,
                                    ol: ({ children }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-muted-foreground">{children}</ol>,
                                    li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                                    blockquote: ({ children }) => (
                                        <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground bg-muted/50 py-3 rounded-r-lg">
                                            {children}
                                        </blockquote>
                                    ),
                                    code: ({ node, inline, className, children, ...props }: any) => {
                                        const match = /language-(\w+)/.exec(className || '')
                                        return !inline ? (
                                            <div className="rounded-md bg-slate-950 p-4 my-6 overflow-x-auto">
                                                <code className={`text-sm text-white font-mono ${className}`} {...props}>
                                                    {children}
                                                </code>
                                            </div>
                                        ) : (
                                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground" {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                    img: ({ src, alt }) => (
                                        <div className="my-8 rounded-xl overflow-hidden border bg-muted">
                                            <img src={src} alt={alt} className="w-full h-auto object-cover" />
                                            {alt && <p className="text-sm text-center text-muted-foreground mt-2 py-2 italic">{alt}</p>}
                                        </div>
                                    ),
                                    a: ({ href, children }) => (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
                                            {children}
                                        </a>
                                    ),
                                    hr: () => <hr className="my-8 border-border" />
                                }}
                            >
                                {project.content}
                            </Markdown>
                        </div>
                    </div>
                </div>

                {/* Sidebar Info */}
                <aside className="space-y-6">
                    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm sticky top-24">
                        <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Información</h3>

                        <div className="space-y-4">
                            {project.iconLabel && (
                                <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Tipo</h4>
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm w-fit">
                                        {project.iconKey ? (
                                            <DynamicIcon name={project.iconKey} className="h-3 w-3 opacity-50" />
                                        ) : (
                                            <Tag className="h-3 w-3 opacity-50" />
                                        )}
                                        {project.iconLabel}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Tecnologías</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags && project.tags.map((tag) => (
                                        <div key={tag} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm">
                                            <Tag className="h-3 w-3 opacity-50" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                                {project.githubLink && (
                                    <Link
                                        href={project.githubLink}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        <Github className="h-4 w-4" /> Ver Código
                                    </Link>
                                )}
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors"
                                    >
                                        <Globe className="h-4 w-4" /> Ver Demo Live
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
