"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { type Post } from "@prisma/client"

interface PostFormProps {
    post?: Post
    action: (formData: FormData) => Promise<void>
}

export function PostForm({ post, action }: PostFormProps) {
    const [isPublished, setIsPublished] = useState(post?.published || false)
    const [coverImage, setCoverImage] = useState(post?.coverImage || "")
    const [category, setCategory] = useState(post?.category || "")
    const [featured, setFeatured] = useState(post?.featured || false)

    return (
        <form action={action} className="space-y-8">
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="coverImage">Cover Image URL</Label>
                    <Input
                        id="coverImage"
                        name="coverImage"
                        value={coverImage}
                        onChange={(e) => setCoverImage(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                    />
                    {coverImage && (
                        <div className="mt-2 relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                            <img
                                src={coverImage}
                                alt="Cover preview"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}
                </div>
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
                    <Label htmlFor="category">Category</Label>
                    <Input
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Tutorials, News, Engineering"
                    />
                </div>

                <div className="flex items-center space-x-2 border p-4 rounded-md">
                    <Switch
                        id="featured"
                        checked={featured}
                        onCheckedChange={setFeatured}
                    />
                    <Label htmlFor="featured">Featured Post (Hero)</Label>
                    <input type="hidden" name="featured" value={featured.toString()} />
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

                <div className="space-y-4 rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="published"
                            name="published"
                            checked={isPublished}
                            onChange={(e) => setIsPublished(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <Label htmlFor="published">Published / Scheduled</Label>
                    </div>

                    {isPublished && (
                        <div className="grid gap-2 animate-in fade-in slide-in-from-top-2">
                            <Label htmlFor="publishedAt">Publish Date</Label>
                            <Input
                                type="datetime-local"
                                id="publishedAt"
                                name="publishedAt"
                                defaultValue={post?.publishedAt ? new Date(post.publishedAt.getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16) : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)}
                            />
                            <p className="text-xs text-muted-foreground">
                                Set a future date to schedule this post.
                            </p>
                        </div>
                    )}
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
        </form >
    )
}
