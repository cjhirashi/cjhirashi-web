import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AboutHero({ content }: { content: any }) {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
                            {content.badge || "Desde 2015"}
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            {content.title || "Creamos el futuro"} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                                {content.highlight || "digital."}
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            {content.body || "Somos arquitectos de experiencias."}
                        </p>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-square lg:aspect-auto h-[500px] lg:h-[600px] w-full">
                            <Image
                                src={content.imageUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&fit=crop"}
                                alt="About Hero"
                                fill
                                className="object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
