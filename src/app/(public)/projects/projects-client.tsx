"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Github, Globe, Rocket, SearchX, Code } from "lucide-react"
import { Project } from "@prisma/client"
import { DynamicIcon } from "@/components/ui/dynamic-icon"

interface ProjectsClientProps {
    projects: (Omit<Project, 'tags'> & { tags: string })[]
}

export function ProjectsClient({ projects: rawProjects }: ProjectsClientProps) {
    // Parse tags
    const projects = useMemo(() => {
        return rawProjects.map(p => ({
            ...p,
            tags: p.tags ? p.tags.split(',').map(t => t.trim()).filter(Boolean) : []
        }))
    }, [rawProjects])

    const [filter, setFilter] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory = filter === "all" || project.category === filter
            // Safety check for null fields just in case
            const title = project.title || ""
            const tech = project.tech || ""

            const matchesSearch =
                title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tech.toLowerCase().includes(searchTerm.toLowerCase())

            return matchesCategory && matchesSearch
        })
    }, [filter, searchTerm, projects])

    return (
        <div className="min-h-screen flex flex-col pt-20">
            {/* Header Section */}
            <header className="pt-16 pb-12 px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hero-pattern">
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Experimentos</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                    >
                        Una colección curada de aplicaciones web, modelos de machine learning y visualizaciones de datos. Todo open source.
                    </motion.p>
                </div>
            </header>

            {/* Controls Section (Filter & Search) */}
            <section className="sticky top-20 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Category Chips */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {Array.from(new Set(projects.map(p => p.category).filter(Boolean))).reduce((acc, category) => {
                            if (!acc.find(c => c.id === category)) {
                                acc.push({ id: category as string, label: category as string });
                            }
                            return acc;
                        }, [{ id: "all", label: "Todos" }]).map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat.id
                                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Buscar tecnología..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-400"
                        />
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <main className="flex-grow py-12 px-6 bg-slate-50/50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => {
                            return (
                                <motion.article
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-950/50 transition-all duration-300 flex flex-col"
                                >
                                    <Link href={`/projects/${project.slug}`} className="block h-48 overflow-hidden relative cursor-pointer">
                                        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        {project.imageUrl ? (
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                                {project.iconKey ? (
                                                    <DynamicIcon name={project.iconKey} className="h-12 w-12 text-slate-400" />
                                                ) : (
                                                    <Code className="h-12 w-12 text-slate-400" />
                                                )}
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 z-20">
                                            <div className="flex gap-2">
                                                {project.category && (
                                                    <span className="px-3 py-1 bg-primary/90 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm border border-primary/20 text-white">
                                                        {project.category}
                                                    </span>
                                                )}
                                                <span className="px-3 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                                                    {project.label || "Project"}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex gap-2 mb-3 items-center">
                                            {project.iconKey ? (
                                                <DynamicIcon name={project.iconKey} className="text-slate-400 h-5 w-5" />
                                            ) : (
                                                <Code className="text-slate-400 h-5 w-5" />
                                            )}
                                            <span className="text-xs font-mono text-slate-500 font-medium">{project.iconLabel || "Tech"}</span>
                                        </div>
                                        <Link href={`/projects/${project.slug}`} className="group-hover:text-primary transition-colors">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                                {project.title}
                                            </h3>
                                        </Link>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags && project.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags && project.tags.length > 3 && (
                                                <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-medium">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-3 mt-auto border-t border-slate-100 dark:border-slate-800 pt-4">
                                            {project.githubLink && (
                                                <Link
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    className="flex-1 text-center py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    <Github className="h-4 w-4" /> Code
                                                </Link>
                                            )}
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    className="flex-1 text-center py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    {project.category === 'datascience' ? <Globe className="h-4 w-4" /> : <Rocket className="h-4 w-4" />}
                                                    Demo
                                                </Link>
                                            )}
                                            {!project.link && !project.githubLink && (
                                                <Link
                                                    href={`/projects/${project.slug}`}
                                                    className="flex-1 text-center py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                                >
                                                    Ver Detalles
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            )
                        })}
                    </AnimatePresence>
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="col-span-full py-24 flex flex-col items-center justify-center text-center space-y-4"
                        >
                            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-2">
                                <SearchX className="h-10 w-10 text-slate-400 dark:text-slate-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                {projects.length === 0 ? "No hay proyectos publicados" : "No se encontraron resultados"}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                                {projects.length === 0
                                    ? "Pronto publicaré nuevos experimentos y proyectos. ¡Vuelve más tarde!"
                                    : `No hay proyectos que coincidan con "${searchTerm}" en esta categoría.`}
                            </p>
                            {projects.length > 0 && (
                                <button
                                    onClick={() => {
                                        setFilter("all")
                                        setSearchTerm("")
                                    }}
                                    className="mt-4 px-6 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                                >
                                    Limpiar filtros
                                </button>
                            )}
                        </motion.div>
                    )}
                </div>
            </main>
        </div>
    )
}
