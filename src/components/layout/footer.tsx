import Link from "next/link"
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white dark:bg-card pt-16 pb-12 border-t border-slate-100 dark:border-slate-800">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

                    {/* Columna Izquierda: Identidad y Contacto */}
                    <div className="space-y-8">
                        {/* Brand + Tagline */}
                        <div>
                            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">Juan<span className="text-primary">.ai</span></span>
                            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-sm leading-relaxed">
                                Científico de Datos especializado en construir puentes entre modelos complejos de IA e interfaces humanas intuitivas.
                            </p>
                        </div>

                        {/* Contact List */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span className="font-medium">contacto@juanscientist.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span className="font-medium">Ciudad de México, Remoto</span>
                            </div>
                        </div>

                        {/* Social Media Icons (Brand Colors on Hover) */}
                        <div className="flex gap-3">
                            {/* GitHub */}
                            <Link href="#" className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-[#24292e] hover:text-white hover:border-[#24292e] dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                                <Github className="h-5 w-5" />
                            </Link>
                            {/* LinkedIn */}
                            <Link href="#" className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            {/* Twitter/X */}
                            <Link href="#" className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            {/* Instagram (Opcional) */}
                            <Link href="#" className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Columna Derecha: Navegación Rápida */}
                    <div className="flex flex-col md:items-end justify-between">
                        <nav className="flex flex-col md:items-end gap-4">
                            <Link href="/projects" className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Proyectos</Link>
                            <Link href="/blog" className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Blog Técnico</Link>
                            <Link href="/about" className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Sobre mí</Link>
                            <Link href="/mentoring" className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Mentoria 1:1</Link>
                        </nav>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <p>© 2024 Juan Scientist. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-1">
                        <span>Diseñado con</span>
                        <Heart className="h-4 w-4 text-red-500 animate-pulse fill-red-500" />
                        <span>y mucho café.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
