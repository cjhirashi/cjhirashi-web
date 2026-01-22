import { notFound } from "next/navigation"
import { getSection } from "@/app/admin/home/actions"
import { HomeSectionForm } from "@/components/admin/home-section-form"

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function EditAboutSectionPage({ params }: PageProps) {
    const { id } = await params
    const section = await getSection(id)

    if (!section) notFound()

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Edit About Section</h2>
                <p className="text-muted-foreground">Update content for this section.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
                <HomeSectionForm initialData={section} isEditing category="ABOUT" />
            </div>
        </div>
    )
}
