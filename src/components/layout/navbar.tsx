"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Database, Sun, Moon, Monitor, X } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

export function Navbar() {
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()
    const [scrolled, setScrolled] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    // Handle hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Handle scroll effect
    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-300",
            scrolled
                ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 h-20"
                : "bg-transparent border-transparent h-24"
        )}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Database className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                        Juan<span className="text-primary">.ai</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/projects"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                        Proyectos
                    </Link>
                    <Link
                        href="/blog"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                        Sobre mí
                    </Link>

                    {/* Theme Toggle */}
                    <div className="relative group">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
                            {mounted && theme === 'dark' ? (
                                <Moon className="h-5 w-5" />
                            ) : (
                                <Sun className="h-5 w-5" />
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right z-50">
                            <button
                                onClick={() => setTheme('light')}
                                className={cn(
                                    "w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2",
                                    mounted && theme === 'light' && "text-primary dark:text-primary bg-slate-50 dark:bg-slate-800"
                                )}
                            >
                                <Sun className="h-3 w-3" /> Claro
                            </button>
                            <button
                                onClick={() => setTheme('dark')}
                                className={cn(
                                    "w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2",
                                    mounted && theme === 'dark' && "text-primary dark:text-primary bg-slate-50 dark:bg-slate-800"
                                )}
                            >
                                <Moon className="h-3 w-3" /> Oscuro
                            </button>
                            <button
                                onClick={() => setTheme('system')}
                                className={cn(
                                    "w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2",
                                    mounted && theme === 'system' && "text-primary dark:text-primary bg-slate-50 dark:bg-slate-800"
                                )}
                            >
                                <Monitor className="h-3 w-3" /> Sistema
                            </button>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:shadow-lg"
                    >
                        Hablemos
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800 dark:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-x-0 top-20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-100 dark:border-slate-800 p-6 animate-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/projects"
                            className="text-lg font-medium text-slate-900 dark:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Proyectos
                        </Link>
                        <Link
                            href="/blog"
                            className="text-lg font-medium text-slate-900 dark:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-medium text-slate-900 dark:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sobre mí
                        </Link>
                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
                        <Link
                            href="/contact"
                            className="text-center w-full px-5 py-3 bg-primary text-white rounded-xl font-bold"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Hablemos
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

