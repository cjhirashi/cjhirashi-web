import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import prisma from "@/lib/prisma"
import { formatDate, slugify } from "@/lib/utils"
// Components
import { ProgressBar } from "@/components/blog/progress-bar"
import { ShareButtons } from "@/components/blog/share-buttons"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { RelatedPosts } from "@/components/blog/related-posts"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import ReactMarkdown from "react-markdown"

export const revalidate = 60

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = await prisma.post.findMany({
        where: {
            published: true,
            publishedAt: { lte: new Date() }
        },
        select: { slug: true },
    })

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await prisma.post.findUnique({
        where: { slug },
        include: { author: true },
    })

    if (!post || !post.published || (post.publishedAt && post.publishedAt > new Date())) {
        notFound()
    }

    // Helper for reading time (rough estimate)
    const words = post.content.split(/\s+/).length
    const readingTime = Math.ceil(words / 200)

    // Extract headings for TOC
    const headings = post.content
        .split("\n")
        .filter(line => line.match(/^#{2,3}\s/))
        .map(line => {
            const level = line.startsWith("### ") ? 3 : 2
            const text = line.replace(/^#+\s*/, "").trim()
            return {
                id: slugify(text), // Use same slugify function
                text,
                level
            }
        })

    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen flex flex-col transition-colors duration-300">
            <ProgressBar />

            {/* Article Hero */}
            <header className="pt-32 pb-10 px-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb & Tags */}
                    <div className="flex items-center gap-4 text-sm mb-8">
                        <Link href="/blog" className="text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1">
                            Volver al Blog
                        </Link>
                        <span className="text-slate-300">|</span>
                        {post.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 font-bold text-xs uppercase tracking-wider mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.15] tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-200 dark:border-slate-700 pt-6 mt-8">
                        <div className="flex items-center gap-3">
                            {post.author.image ? (
                                <Image
                                    src={post.author.image}
                                    alt={post.author.name || "Author"}
                                    width={40}
                                    height={40}
                                    className="rounded-full bg-slate-100 border border-slate-200"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                                    {post.author.name?.[0] || "A"}
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">{post.author.name || "Juan Scientist"}</p>
                                <p className="text-xs text-slate-500">
                                    {formatDate(post.publishedAt || post.createdAt)} · {readingTime} min lectura
                                </p>
                            </div>
                        </div>
                        <ShareButtons title={post.title} slug={post.slug} />
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Left (TOC) - Hidden on Mobile */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32">
                            <TableOfContents headings={headings} />
                        </div>
                    </aside>

                    {/* Article Content */}
                    <article className="lg:col-span-7 prose prose-lg prose-slate dark:prose-invert max-w-none">

                        {/* Featured Image */}
                        {post.coverImage && (
                            <div className="rounded-3xl overflow-hidden mb-12 shadow-lg dark:shadow-none relative aspect-video">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <ReactMarkdown
                            components={{
                                h2: ({ node, ...props }) => <h2 id={slugify(String(props.children))} {...props} />,
                                h3: ({ node, ...props }) => <h3 id={slugify(String(props.children))} {...props} />,
                                code({ node, inline, className, children, ...props }: any) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    // simple block logic
                                    if (!inline && match) {
                                        return (
                                            <div className="rounded-2xl overflow-hidden bg-[#0f172a] border border-slate-700 shadow-2xl my-8 text-sm font-mono leading-relaxed">
                                                <div className="flex items-center justify-between px-4 py-2 bg-[#1e293b] border-b border-slate-700">
                                                    <span className="text-slate-400 text-xs">{match[1]}</span>
                                                </div>
                                                <div className="p-6 overflow-x-auto text-slate-300">
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                </div>
                                            </div>
                                        )
                                    }
                                    return <code className={className} {...props}>{children}</code>
                                }
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>

                        {/* Tags Footer */}
                        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <span className="text-sm font-bold text-slate-500 mr-2 self-center">Etiquetas:</span>
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </article>

                    {/* Sidebar Right (Empty spacer / or Ads / or more related) */}
                    <div className="hidden lg:block lg:col-span-2"></div>
                </div>
            </main>

            <RelatedPosts currentPostId={post.id} tags={post.tags} />
            <NewsletterSection />
        </div>
    )
}
