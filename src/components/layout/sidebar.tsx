"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    FileText,
    FolderKanban,
    Settings,
    LogOut,
    Calendar,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const sidebarItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Home Builder", href: "/admin/home", icon: LayoutDashboard }, // Using LayoutDashboard or similar
    { name: "Events", href: "/admin/events", icon: Calendar },
    { name: "Posts", href: "/admin/posts", icon: FileText },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-card">
            <div className="flex h-16 items-center border-b px-6">
                <Link href="/admin" className="flex items-center gap-2 font-bold">
                    <span className="text-xl">Admin</span>
                </Link>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="grid gap-1 px-2">
                    {sidebarItems.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                    pathname === item.href
                                        ? "bg-accent text-accent-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="border-t p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
                    <ModeToggle />
                </div>
                <Button variant="outline" className="w-full justify-start gap-2">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                </Button>
            </div>
        </div>
    )
}
