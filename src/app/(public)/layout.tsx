import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { getSettings } from "@/app/admin/settings/actions"

export default async function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const settings = await getSettings()

    return (
        <div className="relative flex min-h-screen flex-col">
            <Navbar settings={settings} />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}
