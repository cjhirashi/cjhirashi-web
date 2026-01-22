
import React from 'react'
import NextImage from "next/image"
import { Button } from "@/components/ui/button"

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function AboutSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <AboutVariantB content={content} />
    if (variant === 'C') return <AboutVariantC content={content} />
    return <AboutVariantA content={content} />
}

// OPTION A: Corporate Split (Classic)
function AboutVariantA({ content }: SectionProps) {
    return (
        <section className="py-24 relative border-b border-border bg-background">
            {/* <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Sobre Nosotros - Opción A</div> */}

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                    <div className="relative aspect-video lg:aspect-square w-full overflow-hidden rounded-2xl shadow-xl">
                        {content.imageUrl ? (
                            <NextImage
                                src={content.imageUrl}
                                alt="About Us"
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                No Image
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold">{content.headline || "Socios estratégicos para tu crecimiento."}</h2>
                    <div className="text-muted-foreground leading-relaxed">
                        {content.body ? (
                            content.body.split('\n').map((p: string, i: number) => <p key={i} className="mb-4">{p}</p>)
                        ) : (
                            <p>En Nexus, combinamos datos y diseño para crear productos digitales que escalan.</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 className="text-2xl font-bold text-primary">500+</h4>
                            <p className="text-sm text-muted-foreground">Proyectos</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-primary">98%</h4>
                            <p className="text-sm text-muted-foreground">Retención</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Creative / Tech (Bold Typography)
function AboutVariantB({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-slate-900 text-white border-b border-slate-800">
            {/* <div className="absolute top-0 left-0 bg-white text-black px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Sobre Nosotros - Opción B</div> */}

            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <p className="font-mono text-primary mb-4">// WHO_WE_ARE</p>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        {content.headline || "NO SOMOS UNA AGENCIA."}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {content.subheadline || "SOMOS CREADORES DE FUTURO."}
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-start border-t border-white/10 pt-8">
                        <div className="text-lg text-slate-300 font-light">
                            {content.body ? (
                                content.body.split('\n').map((p: string, i: number) => <p key={i} className="mb-4">{p}</p>)
                            ) : (
                                <p>Rompemos las reglas del diseño convencional. Código limpio, estética brutalista y performance extrema.</p>
                            )}
                        </div>
                        <ul className="space-y-2 font-mono text-sm text-slate-400">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Innovation_First</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> React_Experts</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Global_Scale</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION C: Luxury (Serif & Elegant)
function AboutVariantC({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-stone-50 dark:bg-stone-900 border-b border-border">
            {/* <div className="absolute top-0 left-0 bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Sobre Nosotros - Opción C</div> */}

            <div className="container mx-auto px-6 text-center max-w-3xl">
                <span className="font-serif italic text-gold text-xl mb-4 block">Nuestra Historia</span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
                    {content.headline || "Artesanía en cada detalle"}
                </h2>
                <div className="text-muted-foreground leading-loose mb-12">
                    {content.body ? (
                        content.body.split('\n').map((p: string, i: number) => <p key={i} className="mb-4">{p}</p>)
                    ) : (
                        <p>Desde 1985, hemos cultivado el arte de la hospitalidad y el diseño.</p>
                    )}
                </div>
                <div className="relative h-64 w-full overflow-hidden rounded-t-[10rem]">
                    {content.imageUrl ? (
                        <NextImage
                            src={content.imageUrl}
                            alt="Luxury Visual"
                            fill
                            className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                            No Image
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
