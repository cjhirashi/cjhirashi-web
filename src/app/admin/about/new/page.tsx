import { HomeSectionForm } from "@/components/admin/home-section-form"

export default function NewAboutSectionPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Add About Section</h2>
                <p className="text-muted-foreground">Add a new section to your About page.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
                <HomeSectionForm category="ABOUT" />
            </div>
        </div>
    )
}
