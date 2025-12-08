import { HomeSectionForm } from "@/components/admin/home-section-form"

export default function NewHomeSectionPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Add New Section</h1>
            </div>
            <HomeSectionForm />
        </div>
    )
}
