import { createPost } from "../actions"
import { PostForm } from "@/components/admin/post-form"

export default function NewPostPage() {
    return (
        <div className="space-y-8 max-w-2xl">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Create Post</h2>
            </div>
            <div className="rounded-xl border bg-card p-6">
                <PostForm action={createPost} />
            </div>
        </div>
    )
}
