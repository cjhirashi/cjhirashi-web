import { notFound } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { updatePost } from "../../actions"
import { PostForm } from "@/components/admin/post-form"

const prisma = new PrismaClient()

interface EditPostPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditPostPage({ params }: EditPostPageProps) {
    const { id } = await params
    const post = await prisma.post.findUnique({
        where: { id },
    })

    if (!post) {
        notFound()
    }

    const updateAction = updatePost.bind(null, post.id)

    return (
        <div className="space-y-8 max-w-2xl">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Edit Post</h2>
            </div>
            <div className="rounded-xl border bg-card p-6">
                <PostForm post={post} action={updateAction} />
            </div>
        </div>
    )
}
