"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Portafolio", href: "/projects" },
    { name: "Eventos", href: "/events" },
    { name: "Contacto", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight">cjhirashi</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild variant="default" size="sm">
                        <Link href="/contact">Contáctame</Link>
                    </Button>
                    <ModeToggle />
                </div>

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="border-b md:hidden">
                    <div className="container flex flex-col space-y-4 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                Contáctame
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
