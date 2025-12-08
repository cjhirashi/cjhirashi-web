import { notFound } from "next/navigation"
import { getSection } from "../../actions"
import { HomeSectionForm } from "@/components/admin/home-section-form"

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function EditHomeSectionPage({ params }: PageProps) {
    const { id } = await params
    const section = await getSection(id)

    if (!section) {
        notFound()
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Edit Section</h1>
            </div>
            <HomeSectionForm initialData={section} isEditing />
        </div>
    )
}
