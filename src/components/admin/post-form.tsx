"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { type Post } from "@prisma/client"

interface PostFormProps {
    post?: Post
    action: (formData: FormData) => Promise<void>
}

export function PostForm({ post, action }: PostFormProps) {
    return (
        <form action={action} className="space-y-8">
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        defaultValue={post?.title}
                        required
                        placeholder="Post title"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                        id="excerpt"
                        name="excerpt"
                        defaultValue={post?.excerpt || ""}
                        placeholder="Brief description"
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        id="content"
                        name="content"
                        defaultValue={post?.content}
                        required
                        className="min-h-[300px] font-mono"
                        placeholder="Markdown content..."
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                        id="tags"
                        name="tags"
                        defaultValue={post?.tags}
                        placeholder="react, nextjs, tutorial"
                    />
                    <p className="text-xs text-muted-foreground">
                        Comma separated tags
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="published"
                        name="published"
                        defaultChecked={post?.published}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="published">Publish immediately</Label>
                </div>
            </div>

            <div className="flex gap-4">
                <Button type="submit">
                    {post ? "Update Post" : "Create Post"}
                </Button>
                <Button variant="outline" type="button" onClick={() => window.history.back()}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}
