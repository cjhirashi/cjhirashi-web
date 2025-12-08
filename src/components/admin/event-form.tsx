'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { createEvent, updateEvent } from '@/app/admin/events/actions'

interface EventFormProps {
    initialData?: {
        id: string
        title: string
        description: string
        content: string
        location: string | null
        date: Date
        imageUrl: string | null
        published: boolean
    }
    isEditing?: boolean
}

export function EventForm({ initialData, isEditing = false }: EventFormProps) {
    // Helper to format date for input (YYYY-MM-DD)
    const formatDateForInput = (date: Date) => {
        return date.toISOString().split('T')[0]
    }

    return (
        <form action={isEditing ? updateEvent.bind(null, initialData!.id) : createEvent} className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input name="title" defaultValue={initialData?.title} placeholder="e.g. Next.js Conf 2025" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        defaultValue={initialData?.date ? formatDateForInput(initialData.date) : ''}
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="location">Location (Optional)</Label>
                <Input name="location" defaultValue={initialData?.location || ''} placeholder="e.g. San Francisco, CA or Online" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea name="description" defaultValue={initialData?.description} placeholder="Brief summary for the list view..." required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="content">Full Content (Markdown)</Label>
                <Textarea name="content" defaultValue={initialData?.content} className="min-h-[200px]" placeholder="Detailed event information..." required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="imageUrl">Cover Image URL</Label>
                <Input name="imageUrl" defaultValue={initialData?.imageUrl || ''} placeholder="https://..." />
            </div>

            <div className="flex items-center space-x-2">
                <Switch id="published" name="published" defaultChecked={initialData?.published ?? false} />
                <Label htmlFor="published">Published</Label>
            </div>

            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => history.back()}>Cancel</Button>
                <Button type="submit">{isEditing ? 'Save Changes' : 'Create Event'}</Button>
            </div>
        </form>
    )
}
