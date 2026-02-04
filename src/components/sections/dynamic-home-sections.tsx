import Link from "next/link"
import { ArrowRight, ArrowUpRight, Code, Database, Box, Cloud, BarChart, ShoppingCart, Activity, FileText } from "lucide-react"
import prisma from "@/lib/prisma"
import { DynamicIcon } from "@/components/ui/dynamic-icon"
import { Button } from "@/components/ui/button"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SectionProps {
    content: any
}

// -----------------------------------------------------------------------------
// TECH STACK SECTION
// -----------------------------------------------------------------------------
export function TechStackSection({ content }: SectionProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let items: any[] = []

    try {
        if (Array.isArray(content.items)) {
            items = content.items
        } else if (typeof content.items === 'string') {
            // Handle empty strings or invalid JSON gracefully
            if (content.items.trim() === '') {
                items = []
            } else {
                items = JSON.parse(content.items)
            }
        }
    } catch (e) {
        console.error("Failed to parse TechStack items:", e)
        items = []
    }

    if (!Array.isArray(items)) items = []

    return (
        <section className="py-10 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="container px-6 text-center">
                {content.title && (
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                        {content.title}
                    </p>
                )}
                {content.subheadline && (
                    <p className="text-xs text-muted-foreground mb-6 max-w-lg mx-auto">{content.subheadline}</p>
                )}

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {items.map((item: any, i: number) => (
                        <span key={i} className="text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2">
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {item.icon ? <DynamicIcon name={item.icon as any} className="h-6 w-6" /> : <Code className="h-6 w-6" />}
                            {item.title}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

// -----------------------------------------------------------------------------
// PROJECT FEED SECTION (Server Component)
// -----------------------------------------------------------------------------
export async function ProjectFeedSection({ content }: SectionProps) {
    const count = parseInt(content.count || '3', 10)

    const projects = await prisma.project.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        take: count
    })

    if (projects.length === 0) return null

    return (
        <section id="proyectos" className="py-24 bg-white dark:bg-background">
            <div className="container px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{content.title || "Proyectos Destacados"}</h2>
                        <p className="text-slate-500 dark:text-slate-400">{content.subtitle || "Una selección de mis trabajos recientes."}</p>
                    </div>
                    <Link href="/projects" className="text-primary font-medium hover:underline flex items-center gap-1">
                        Ver todos
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none bg-white dark:bg-slate-900 hover:shadow-2xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-2">
                            {/* Placeholder visual if no image - using gradients based on ID hash or simplified */}
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                                {project.imageUrl ? (
                                    // Optimization: In a real app we'd use NextImage, but for now standard img tag or div bg to save complexity if URL is external
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${project.imageUrl})` }} />
                                ) : (
                                    <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90 group-hover:scale-105 transition-transform duration-500`} />
                                )}

                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    {project.iconKey ? (
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        <DynamicIcon name={project.iconKey as any} className="h-16 w-16 opacity-50" />
                                    ) : (
                                        <BarChart className="h-16 w-16 opacity-50" />
                                    )}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {/* Render first 2 tags as badges */}
                                    {project.tags.split(',').slice(0, 2).map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                                <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-slate-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary">
                                    Ver caso de estudio
                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// -----------------------------------------------------------------------------
// BLOG FEED SECTION (Server Component)
// -----------------------------------------------------------------------------
export async function BlogFeedSection({ content }: SectionProps) {
    const count = parseInt(content.count || '3', 10)

    // Fetch posts
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
        include: { author: true },
        take: count
    })

    if (posts.length === 0) return null

    return (
        <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="container px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{content.title || "Blogs Destacados"}</h2>
                        <p className="text-slate-500 dark:text-slate-400">{content.subtitle || "Pensamientos recientes."}</p>
                    </div>
                    <Link href="/blog" className="text-primary font-medium hover:underline flex items-center gap-1">
                        Leer el blog completo
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => {
                        // First post could be featured (span 2 cols) if desired, but for simplicity let's stick to grid
                        // Or if index === 0, make it featured
                        const isFeatured = index === 0 && posts.length >= 3 // Only feature first if we have enough posts

                        if (isFeatured) {
                            return (
                                <div key={post.id} className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-900 dark:bg-slate-800 text-white md:col-span-2 flex flex-col justify-between p-8 relative">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
                                                {post.category || "General"}
                                            </span>
                                            <span className="text-slate-400 text-sm">
                                                {new Date(post.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-indigo-300 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-300 mb-8 max-w-2xl text-lg line-clamp-3">
                                            {post.excerpt || post.content.substring(0, 150) + "..."}
                                        </p>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-white font-medium hover:text-indigo-300 group-hover:translate-x-2 transition-transform">
                                        Leer artículo
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            )
                        }

                        return (
                            <div key={post.id} className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900 hover:shadow-2xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                                            {post.category || "Post"}
                                        </span>
                                        <span className="text-slate-400 text-sm">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                                        {post.excerpt || post.content.substring(0, 100) + "..."}
                                    </p>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-slate-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary group-hover:translate-x-2 transition-transform">
                                    Leer artículo
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
