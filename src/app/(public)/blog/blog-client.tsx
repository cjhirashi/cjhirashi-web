"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ArrowRight, Clock, Calendar, Mail, CheckCircle2 } from "lucide-react"
import { Post, User } from "@prisma/client"
import { formatDate } from "@/lib/utils"

interface BlogClientProps {
    posts: (Post & { author: User })[]
}

export function BlogClient({ posts }: BlogClientProps) {
    const [filter, setFilter] = useState("Recientes")
    const [searchTerm, setSearchTerm] = useState("")
    const [email, setEmail] = useState("")

    // Separate featured post (latest) vs others
    // For "Recientes" (All), we usually show featured + grid.
    // But usually filters apply to the grid. 
    // Let's assume the first post is ALWAYS featured in the header, 
    // and the grid shows the rest or filtered result.
    // OR: If filter is active, maybe featured section hides? 
    // The user's HTML structure has header(featured) separate from main(filters+grid).
    // So Featured is likely always visible at top, and filters affect the grid below.

    // Separate featured post (latest or explicitly featured) vs others
    const featuredPost = useMemo(() => {
        return posts.find(p => p.featured) || posts[0]
    }, [posts])

    const remainingPosts = useMemo(() => {
        return posts.filter(p => p.id !== featuredPost?.id)
    }, [posts, featuredPost])

    const filteredPosts = useMemo(() => {
        return remainingPosts.filter((post) => {
            // Map generic categories to tags if needed, or just match tags
            // User's categories: "Recientes", "Tutoriales Dev", "Data Science", "Carrera & Soft Skills"
            // We'll check if any tag matches the filter (case insensitive)
            // "Recientes" = show all

            const matchesCategory =
                filter === "Recientes" ||
                post.tags.some(tag => tag.toLowerCase() === filter.toLowerCase()) ||
                (filter === "Tutoriales Dev" && (post.tags.includes("Dev") || post.tags.includes("Tutorial"))) || // Example mapping
                (filter === "Carrera & Soft Skills" && (post.tags.includes("Carrera") || post.tags.includes("Soft Skills")))

            const matchesSearch =
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(searchTerm.toLowerCase())

            return matchesCategory && matchesSearch
        })
    }, [filter, searchTerm, remainingPosts])

    const categories = [
        "Recientes",
        "Tutoriales Dev",
        "Data Science",
        "Carrera & Soft Skills"
    ]

    return (
        <div className="min-h-screen flex flex-col bg-surface dark:bg-slate-950 transition-colors duration-300 font-sans">

            {/* Header & Featured Post */}
            <header className="pt-32 pb-12 px-6 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center md:text-left mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight"
                        >
                            Bitácora de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Ingeniería</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
                        >
                            Tutoriales técnicos, reflexiones sobre la industria y mis notas personales sobre el aprendizaje continuo.
                        </motion.p>
                    </div>

                    {/* Featured Article Card (Hero) */}
                    {featuredPost && (
                        <motion.article
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="group relative rounded-3xl overflow-hidden shadow-lg dark:shadow-none hover:shadow-2xl transition-all duration-300 grid md:grid-cols-2 bg-slate-900 text-white"
                        >
                            {/* Image Side */}
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                                {featuredPost.coverImage ? (
                                    <img
                                        src={featuredPost.coverImage}
                                        alt={featuredPost.title}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                                        <span className="text-slate-600 font-bold text-2xl">No Image</span>
                                    </div>
                                )}
                            </div>
                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center relative z-20">
                                <div className="flex items-center gap-3 mb-4 text-indigo-300 font-medium text-sm">
                                    {(featuredPost.category || featuredPost.tags[0]) && (
                                        <span className="bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30">
                                            {featuredPost.category || featuredPost.tags[0]}
                                        </span>
                                    )}
                                    <span>•</span>
                                    <span>{formatDate(featuredPost.publishedAt || featuredPost.createdAt)}</span>
                                    {/* <span>•</span>
                                    <span>8 min lectura</span> */}
                                    {/* Reading time calculation could be added here */}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-indigo-300 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed line-clamp-3">
                                    {featuredPost.excerpt || featuredPost.content.substring(0, 150)}...
                                </p>
                                <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center font-bold text-white group-hover:translate-x-2 transition-transform">
                                    Leer artículo completo <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </motion.article>
                    )}
                </div>
            </header>

            {/* Main Content: Search & Grid */}
            <main className="flex-grow py-12 px-6 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto">

                    {/* Filters Toolbar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur py-4 rounded-xl px-2">
                        {/* Category Chips */}
                        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === cat
                                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-primary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Buscar artículos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredPosts.map((post) => (
                                <motion.article
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-950/50 transition-all duration-300 group flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        {post.coverImage ? (
                                            <img
                                                src={post.coverImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                                No Image
                                            </div>
                                        )}
                                        {(post.category || post.tags[0]) && (
                                            <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm text-slate-900 dark:text-white">
                                                {post.category || post.tags[0]}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                            <Clock className="h-3 w-3" />
                                            <span>5 min leer</span> {/* Placeholder for reading time */}
                                            <span>•</span>
                                            <time dateTime={(post.publishedAt || post.createdAt).toISOString()}>{formatDate(post.publishedAt || post.createdAt)}</time>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <Link href={`/blog/${post.slug}`} className="text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                                            Leer más <ArrowRight className="h-3 w-3" />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            {/* Newsletter Section */}
            <section className="py-20 bg-indigo-900 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgbW9kZT0ib3ZlcmxheSI+PHBhdGggZD0iTTAgMGg2MHY2MEgwWiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMFoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-800 border border-indigo-700 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-4">
                        Newsletter Semanal
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Únete a +1,200 ingenieros</h2>
                    <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
                        Recibe un correo cada martes con mis mejores artículos, recursos de Data Science y tips de arquitectura de software. Cero spam.
                    </p>

                    <form
                        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                        onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por suscribirte!'); setEmail(""); }}
                    >
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:bg-white/20 focus:border-white transition-all backdrop-blur-sm"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
                            Suscribirme
                        </button>
                    </form>
                    <p className="text-indigo-400 text-xs mt-4">Puedes desuscribirte en cualquier momento.</p>
                </div>
            </section>
        </div>
    )
}
