import { notFound } from "next/navigation"
import { PrismaClient } from "@prisma/client"
import { EventForm } from "@/components/admin/event-form"

const prisma = new PrismaClient()

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function EditEventPage({ params }: PageProps) {
    const { id } = await params
    const event = await prisma.event.findUnique({
        where: { id },
    })

    if (!event) {
        notFound()
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Edit Event</h1>
            </div>
            <EventForm initialData={event} isEditing />
        </div>
    )
}
