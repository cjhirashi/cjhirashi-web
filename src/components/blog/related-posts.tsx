import Link from "next/link"
import Image from "next/image"
import prisma from "@/lib/prisma"
import { formatDate } from "@/lib/utils"

interface RelatedPostsProps {
    currentPostId: string
    tags: string[]
}

export async function RelatedPosts({ currentPostId, tags }: RelatedPostsProps) {
    // SQLite doesn't support hasSome on lists (and our tags are now strings)
    // For local dev simplicity, we'll just fetch recent posts by category if possible, or just recent

    // We can try to match by category first to be somewhat relevant
    const relatedPosts = await prisma.post.findMany({
        where: {
            id: { not: currentPostId },
            published: true,
            publishedAt: { lte: new Date() },
            // fallback to just recent posts if category logic is complex without fetching first
        },
        take: 3,
        orderBy: { publishedAt: 'desc' }
    })

    // Note: In a real implementation with SQLite, we might fetch more and filter in JS
    // const matches = allPosts.filter(p => p.tags.split(',').some(t => tags.includes(t)))

    // If not enough related posts, fill with recent posts (removed as the query above is already "recent")
    // Keep simpler logic for now to ensure stability

    if (relatedPosts.length === 0) return null

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">También podría interesarte</h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-white dark:bg-card rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                            <div className="h-40 overflow-hidden relative">
                                {post.coverImage ? (
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                        <span className="text-slate-400">No Image</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
