import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Database, Layout, Server, Sparkles, User } from "lucide-react"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center py-24 text-center lg:py-32 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                            <Sparkles className="mr-1 h-3 w-3" />
                            Disponible para proyectos
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                            Hola, soy cjhirashi
                            <br className="hidden sm:inline" />
                            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground block mt-2">
                                Científico de Datos | Desarrollador Full Stack
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                            Especializado en Inteligencia Artificial Generativa y la creación de productos digitales inteligentes y accesibles.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                            <Button asChild size="lg" className="h-11 px-8">
                                <Link href="/projects">
                                    Ver Portafolio
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-11 px-8">
                                <Link href="/contact">Contáctame</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="py-12 md:py-16 lg:py-20 border-y bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2 items-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre mí</h2>
                            <p className="text-muted-foreground md:text-lg/relaxed">
                                Combino la ciencia de datos con el desarrollo de software para construir soluciones innovadoras. Mi enfoque actual está en potenciar aplicaciones web con modelos de <strong>IA Generativa</strong>.
                            </p>
                            <p className="text-muted-foreground md:text-lg/relaxed">
                                A lo largo de mi carrera, he trabajado en proyectos que van desde análisis de datos complejos hasta sistemas web escalables, siempre buscando el equilibrio entre funcionalidad y experiencia de usuario.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-bold">3+</span>
                                    <span className="text-sm text-muted-foreground">Años de experiencia</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-3xl font-bold">20+</span>
                                    <span className="text-sm text-muted-foreground">Proyectos completados</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border bg-background shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                                {/* Placeholder for profile image - using a gradient for now */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    <User className="h-32 w-32 text-muted-foreground/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section (Simplified) */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mi Stack Tecnológico</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Herramientas que utilizo para dar vida a mis ideas.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors">
                            <Sparkles className="h-10 w-10 text-purple-500" />
                            <span className="font-semibold">IA Generativa</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors">
                            <Layout className="h-10 w-10 text-blue-500" />
                            <span className="font-semibold">Next.js</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors">
                            <Code2 className="h-10 w-10 text-blue-400" />
                            <span className="font-semibold">React</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors">
                            <Code2 className="h-10 w-10 text-teal-400" />
                            <span className="font-semibold">Tailwind CSS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors">
                            <Code2 className="h-10 w-10 text-blue-600" />
                            <span className="font-semibold">TypeScript</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-12 md:py-16 lg:py-24 border-t bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proyectos Destacados</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Una selección de mis trabajos recientes y proyectos personales.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                        {/* Placeholder Project 1 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                            <div className="aspect-video w-full bg-muted/50 object-cover transition-transform group-hover:scale-105" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold">Proyecto Alpha</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Un dashboard completo para la gestión de análisis de datos con actualizaciones en tiempo real.
                                </p>
                                <div className="mt-4 flex gap-2">
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Next.js</span>
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">TypeScript</span>
                                </div>
                            </div>
                        </div>
                        {/* Placeholder Project 2 */}
                        <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg">
                            <div className="aspect-video w-full bg-muted/50 object-cover transition-transform group-hover:scale-105" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold">Plataforma E-commerce</h3>
                                <p className="mt-2 text-muted-foreground">
                                    Tienda online completa con funcionalidad de carrito y procesamiento de pagos.
                                </p>
                                <div className="mt-4 flex gap-2">
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">React</span>
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Stripe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button asChild variant="ghost">
                            <Link href="/projects">Ver todos los proyectos</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Latest Posts Section */}
            <section className="py-12 md:py-16 lg:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Últimas publicaciones</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Pensamientos sobre desarrollo, diseño y tecnología.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                        {/* Placeholder Post 1 */}
                        <article className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                            <div className="text-sm text-muted-foreground">6 de Diciembre, 2025</div>
                            <h3 className="text-xl font-bold">Empezando con Next.js 15</h3>
                            <p className="text-muted-foreground line-clamp-3">
                                Explorando las nuevas características y mejoras en la última versión de Next.js.
                            </p>
                            <Link href="/blog/post-1" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                Leer más <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </article>
                        {/* Placeholder Post 2 */}
                        <article className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                            <div className="text-sm text-muted-foreground">28 de Noviembre, 2025</div>
                            <h3 className="text-xl font-bold">Dominando Tailwind CSS</h3>
                            <p className="text-muted-foreground line-clamp-3">
                                Consejos y trucos para construir diseños hermosos y responsivos con clases de utilidad.
                            </p>
                            <Link href="/blog/post-2" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                Leer más <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </article>
                        {/* Placeholder Post 3 */}
                        <article className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                            <div className="text-sm text-muted-foreground">15 de Noviembre, 2025</div>
                            <h3 className="text-xl font-bold">El futuro del desarrollo web</h3>
                            <p className="text-muted-foreground line-clamp-3">
                                Predicciones y tendencias para el próximo año en el mundo del desarrollo web.
                            </p>
                            <Link href="/blog/post-3" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                                Leer más <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}
