"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    FileText,
    Settings,
    User,
    FolderKanban,
    LogOut,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const sidebarItems = [
    {
        title: "Inicio",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Sobre Mí",
        href: "/admin/about",
        icon: User,
    },
    {
        title: "Proyectos",
        href: "/admin/projects",
        icon: FolderKanban,
    },
    {
        title: "Blog",
        href: "/admin/posts",
        icon: FileText,
    },
    {
        title: "Configuración",
        href: "/admin/settings",
        icon: Settings,
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="hidden h-screen w-64 flex-col border-r bg-muted/40 md:flex">
            <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <span className="">Juan.ai Admin</span>
                </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                pathname === item.href
                                    ? "bg-muted text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.title}
                        </Link>
                    ))}
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
        </aside>
    )
}
