import Link from "next/link"
import Image from "next/image"
import prisma from "@/lib/prisma"
import { formatDate } from "@/lib/utils"

interface RelatedPostsProps {
    currentPostId: string
    tags: string[]
}

export async function RelatedPosts({ currentPostId, tags }: RelatedPostsProps) {
    // Find posts with matching tags, excluding current post
    const relatedPosts = await prisma.post.findMany({
        where: {
            id: { not: currentPostId },
            published: true,
            publishedAt: { lte: new Date() },
            tags: { hasSome: tags }
        },
        take: 3,
        orderBy: { publishedAt: 'desc' }
    })

    // If not enough related posts, fill with recent posts
    if (relatedPosts.length < 3) {
        const recentPosts = await prisma.post.findMany({
            where: {
                id: { notIn: [currentPostId, ...relatedPosts.map(p => p.id)] },
                published: true,
                publishedAt: { lte: new Date() }
            },
            take: 3 - relatedPosts.length,
            orderBy: { publishedAt: 'desc' }
        })
        relatedPosts.push(...recentPosts)
    }

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
