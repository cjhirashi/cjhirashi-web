import Link from "next/link"
import { ArrowRight, Download, TrendingUp, Code, Database, Box, Cloud, BarChart, ShoppingCart, Activity, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-pattern">
                <div className="container px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                Disponible para nuevos proyectos
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
                                Datos que cuentan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-indigo-400 dark:to-purple-400">historias.</span>
                            </h1>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Soy Científico de Datos y Desarrollador Full-Stack. Construyo puentes entre modelos complejos de IA e interfaces de usuario intuitivas.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button asChild size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-base bg-primary hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 group">
                                    <Link href="/projects">
                                        Ver Portafolio
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-base border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
                                    <Link href="/cv.pdf" target="_blank">
                                        <Download className="mr-2 h-4 w-4" />
                                        Descargar CV
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Visual Element */}
                        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
                            {/* Decorative Blobs */}
                            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

                            {/* Photo Container */}
                            <div className="relative z-10 w-[80%] md:w-[60%] lg:w-[80%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl dark:shadow-slate-900/50 border-8 border-white dark:border-slate-800 rotate-2 hover:rotate-0 transition-all duration-500 group">
                                <img
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
                                    alt="Juan Scientist Portrait"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Name Tag */}
                                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-1">Lead Data Scientist</p>
                                    <p className="text-xl font-bold">Juan Scientist</p>
                                </div>

                                {/* Code Decoration */}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-xs font-mono text-green-400 px-3 py-1 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    model.fit(X, y)
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-8 -left-4 lg:-left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl dark:shadow-black/40 border border-slate-100 dark:border-slate-700 flex items-center gap-4 animate-float z-20 hover:scale-105 transition-transform cursor-default" style={{ animationDelay: '1s' }}>
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">ROI Generado</div>
                                    <div className="text-xl font-bold text-slate-900 dark:text-white">$1.2M+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-10 border-y border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                <div className="container px-6 text-center">
                    <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Stack Tecnológico</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><Code className="h-6 w-6" /> Python</span>
                        <span className="text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><Database className="h-6 w-6" /> PostgreSQL</span>
                        <span className="text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><Box className="h-6 w-6" /> TensorFlow</span>
                        <span className="text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><Code className="h-6 w-6" /> React</span>
                        <span className="text-xl font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2"><Cloud className="h-6 w-6" /> AWS</span>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="proyectos" className="py-24 bg-white dark:bg-background">
                <div className="container px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Proyectos Destacados</h2>
                            <p className="text-slate-500 dark:text-slate-400">Una selección de mis trabajos en Data Science y Web.</p>
                        </div>
                        <Link href="/projects" className="text-primary font-medium hover:underline flex items-center gap-1">
                            Ver todos
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project Card 1 */}
                        <div className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none bg-white dark:bg-slate-900 hover:shadow-2xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-2">
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <BarChart className="h-16 w-16 opacity-50" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">Python</span>
                                    <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">AI</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Predicción Financiera</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Modelo de ML para predecir tendencias de mercado de valores utilizando análisis de sentimiento en tiempo real.</p>
                                <Link href="#" className="inline-flex items-center text-slate-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary">
                                    Ver caso de estudio
                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Project Card 2 */}
                        <div className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none bg-white dark:bg-slate-900 hover:shadow-2xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-2">
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-600 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <ShoppingCart className="h-16 w-16 opacity-50" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">Next.js</span>
                                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">Stripe</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">E-commerce Headless</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Plataforma de comercio electrónico ultrarrápida con gestión de inventario en tiempo real.</p>
                                <Link href="#" className="inline-flex items-center text-slate-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary">
                                    Ver caso de estudio
                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Project Card 3 */}
                        <div className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none bg-white dark:bg-slate-900 hover:shadow-2xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-2">
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-600 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <Activity className="h-16 w-16 opacity-50" />
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wider">Mobile</span>
                                    <span className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wider">Health</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Vital Monitor App</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Aplicación multiplataforma para el seguimiento de pacientes crónicos con integración IoT.</p>
                                <Link href="#" className="inline-flex items-center text-slate-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary">
                                    Ver caso de estudio
                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Blogs */}
            <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="container px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Blogs Destacados</h2>
                            <p className="text-slate-500 dark:text-slate-400">Pensamientos sobre código, arquitectura y el futuro de la IA.</p>
                        </div>
                        <Link href="/blog" className="text-primary font-medium hover:underline flex items-center gap-1">
                            Leer el blog completo
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Blog Post 1 */}
                        <div className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-900 dark:bg-slate-800 text-white md:col-span-2 flex flex-col justify-between p-8 relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">Arquitectura</span>
                                    <span className="text-slate-400 text-sm">Hace 2 días</span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-indigo-300 transition-colors">¿Cómo estructurar un Data Lake moderno para empresas SaaS?</h3>
                                <p className="text-slate-300 mb-8 max-w-2xl text-lg">Exploramos las mejores prácticas para diseñar lagos de datos escalables, desde la ingesta en tiempo real hasta el almacenamiento costo-eficiente en S3.</p>
                            </div>
                            <Link href="#" className="inline-flex items-center text-white font-medium hover:text-indigo-300 group-hover:translate-x-2 transition-transform">
                                Leer artículo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        {/* Blog Post 2 */}
                        <div className="group rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900 hover:shadow-2xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">Tutorial</span>
                                    <span className="text-slate-400 text-sm">Hace 1 semana</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">Introducción a React Server Components</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">Una guía práctica para entender cómo RSC cambia el paradigma de renderizado en el frontend moderno.</p>
                            </div>
                            <Link href="#" className="inline-flex items-center text-slate-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary group-hover:translate-x-2 transition-transform">
                                Leer artículo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Contact CTA */}
            <section id="contacto" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-20 dark:opacity-10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">¿Tienes un proyecto en mente?</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">Estoy disponible para consultoría freelance y colaboraciones técnicas.</p>
                    <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg font-bold shadow-xl shadow-indigo-500/20 hover:scale-105 transition-all">
                        <Link href="/contact">
                            Enviar Correo
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

