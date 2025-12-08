'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent } from '@/components/ui/card'
// Note: importing actions directly into client component for form ACTION prop usage is valid in Next.js Server Actions
import { createSection, updateSection } from '@/app/admin/home/actions'
import { ImageUpload } from '@/components/admin/image-upload'

interface HomeSectionFormProps {
    initialData?: {
        id: string
        type: string
        isActive: boolean
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content: any
    }
    isEditing?: boolean
}

export function HomeSectionForm({ initialData, isEditing = false }: HomeSectionFormProps) {
    const [type, setType] = useState(initialData?.type || 'HERO')
    const [content, setContent] = useState(initialData?.content || {})

    const updateContent = (key: string, value: any) => {
        setContent((prev: any) => ({ ...prev, [key]: value }))
    }

    const SECTION_TYPES = [
        { value: 'HERO', label: 'Hero Section' },
        { value: 'ABOUT', label: 'About/Bio Section' },
        { value: 'FEATURES', label: 'Features/Stack Grid' },
        { value: 'BLOG_FEED', label: 'Latest Blog Posts' },
        { value: 'PROJECT_FEED', label: 'Featured Projects' },
        { value: 'EVENT_FEED', label: 'Upcoming Events' },
        { value: 'CTA', label: 'Call to Action' },
    ]

    return (
        <form action={isEditing ? updateSection.bind(null, initialData!.id) : createSection} className="space-y-8">
            <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="type">Section Type</Label>
                        <Select name="type" value={type} onValueChange={setType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                {SECTION_TYPES.map((t) => (
                                    <SelectItem key={t.value} value={t.value}>
                                        {t.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2 flex flex-col justify-end pb-2">
                        <div className="flex items-center space-x-2">
                            <Switch id="isActive" name="isActive" defaultChecked={initialData?.isActive ?? true} />
                            <Label htmlFor="isActive">Active (Visible)</Label>
                        </div>
                    </div>
                </div>

                <Card>
                    <CardContent className="pt-6 space-y-4">
                        {/* DYNAMIC FIELDS BASED ON TYPE */}

                        {type === 'HERO' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Headline</Label>
                                    <Input name="content_headline" defaultValue={content.headline} placeholder="e.g. Building the Future" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Subheadline</Label>
                                    <Input name="content_subheadline" defaultValue={content.subheadline} placeholder="e.g. Full Stack Developer & AI Enthusiast" />
                                </div>
                                <div className="space-y-2">
                                    <Label>CTA Text</Label>
                                    <Input name="content_ctaText" defaultValue={content.ctaText} placeholder="e.g. View Portfolio" />
                                </div>
                                <div className="space-y-2">
                                    <Label>CTA Link</Label>
                                    <Input name="content_ctaLink" defaultValue={content.ctaLink} placeholder="e.g. /projects" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Hero Background/Image</Label>
                                    <ImageUpload
                                        value={content.imageUrl}
                                        onChange={(url) => updateContent('imageUrl', url)}
                                    />
                                    <input type="hidden" name="content_imageUrl" value={content.imageUrl || ''} />
                                </div>
                            </>
                        )}

                        {type === 'ABOUT' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Title</Label>
                                    <Input name="content_title" defaultValue={content.title} placeholder="e.g. About Me" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Content (Markdown supported)</Label>
                                    <Textarea name="content_body" defaultValue={content.body} className="min-h-[150px]" placeholder="Write your bio..." required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Image URL (Optional)</Label>
                                    <div className="space-y-2">
                                        <ImageUpload
                                            value={content.imageUrl}
                                            onChange={(url) => updateContent('imageUrl', url)}
                                        />
                                        {/* Hidden input for server action */}
                                        <input type="hidden" name="content_imageUrl" value={content.imageUrl || ''} />
                                    </div>
                                </div>
                            </>
                        )}

                        {(type === 'BLOG_FEED' || type === 'PROJECT_FEED' || type === 'EVENT_FEED') && (
                            <>
                                <div className="space-y-2">
                                    <Label>Section Title</Label>
                                    <Input name="content_title" defaultValue={content.title} placeholder="e.g. Latest Posts" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Display Count</Label>
                                    <Input type="number" name="content_count" defaultValue={content.count || 3} min={1} max={12} required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Description/Subtitle</Label>
                                    <Input name="content_subtitle" defaultValue={content.subtitle} placeholder="Optional subtitle text" />
                                </div>
                            </>
                        )}

                        {type === 'FEATURES' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Title</Label>
                                    <Input name="content_title" defaultValue={content.title} placeholder="e.g. My Tech Stack" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Items (Comma separated)</Label>
                                    <Textarea name="content_items" defaultValue={Array.isArray(content.items) ? content.items.join(', ') : content.items} placeholder="React, Next.js, Node.js" />
                                    <p className="text-xs text-muted-foreground">Enter items separated by commas.</p>
                                </div>
                            </>
                        )}

                        {type === 'CTA' && (
                            <>
                                <div className="space-y-2">
                                    <Label>Main Text</Label>
                                    <Input name="content_title" defaultValue={content.title} placeholder="e.g. Ready to start a project?" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Button Text</Label>
                                    <Input name="content_buttonText" defaultValue={content.buttonText} placeholder="e.g. Contact Me" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Button Link</Label>
                                    <Input name="content_buttonLink" defaultValue={content.buttonLink} placeholder="e.g. /contact" required />
                                </div>
                            </>
                        )}

                    </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                    <Button type="button" variant="outline" onClick={() => history.back()}>Cancel</Button>
                    <Button type="submit">{isEditing ? 'Save Changes' : 'Create Section'}</Button>
                </div>
            </div>
        </form>
    )
}
