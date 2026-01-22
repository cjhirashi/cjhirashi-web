import { getSettings } from "./actions"
import { SettingsForm } from "@/components/admin/settings-form"

export default async function SettingsPage() {
    const settings = await getSettings()

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Global Settings</h2>
                <p className="text-muted-foreground">Manage your site's identity, branding, and theme.</p>
            </div>
            <SettingsForm initialData={settings} />
        </div>
    )
}
