
import React from 'react'
import NextImage from "next/image"
import { Button } from "@/components/ui/button"

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function ShowcaseSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <ShowcaseVariantB content={content} />
    if (variant === 'C') return <ShowcaseVariantC content={content} />
    return <ShowcaseVariantA content={content} />
}

// OPTION A: Slider (Existing style)
function ShowcaseVariantA({ content }: SectionProps) {
    return (
        <section className="py-24 relative overflow-hidden border-b border-border bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8">{content.headline || "Trabajos Destacados"}</h2>
                <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                    {/* Item 1 */}
                    <div className="min-w-[300px] h-[400px] bg-muted rounded-2xl relative overflow-hidden group">
                        <NextImage
                            src="https://images.unsplash.com/photo-1481487484168-9b995ecc168d?q=80&w=600&auto=format&fit=crop"
                            alt="Project 1"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h3 className="font-bold text-xl">Proyecto Alpha</h3>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="min-w-[300px] h-[400px] bg-muted rounded-2xl relative overflow-hidden group">
                        <NextImage
                            src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop"
                            alt="Project 2"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h3 className="font-bold text-xl">Proyecto Beta</h3>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="min-w-[300px] h-[400px] bg-muted rounded-2xl relative overflow-hidden group">
                        <NextImage
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                            alt="Project 3"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <h3 className="font-bold text-xl">Proyecto Gamma</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Masonry / Grid (Visual Heavy)
function ShowcaseVariantB({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-muted/30 border-b border-border">
            {/* <div className="absolute top-0 left-0 bg-purple-600 text-white px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Showcase - Opción B</div> */}

            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">{content.headline || "Galería Visual"}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {/* Large Item */}
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group bg-muted">
                        <NextImage
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                            alt="Showcase Large"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold cursor-pointer">
                            Ver Proyecto
                        </div>
                    </div>
                    {/* Small Items */}
                    <div className="rounded-2xl overflow-hidden bg-muted relative">
                        <NextImage src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600" alt="Small 1" fill className="object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted relative">
                        <NextImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600" alt="Small 2" fill className="object-cover" />
                    </div>
                    <div className="col-span-2 rounded-2xl overflow-hidden bg-muted relative">
                        <NextImage src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000" alt="Medium 1" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION C: Single Feature (Detailed/Elegant)
function ShowcaseVariantC({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-stone-100 dark:bg-stone-900 border-b border-border">
            {/* <div className="absolute top-0 left-0 bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Showcase - Opción C</div> */}

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <span className="font-serif italic text-gold text-lg mb-2 block">{content.subheadline || "Selección del Chef"}</span>
                    <h2 className="font-serif text-4xl mb-6 text-foreground text-slate-900 dark:text-white">
                        {content.headline || "Risotto de Trufa Negra"}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        {content.body || "Arroz Carnaroli envejecido 18 meses, mantecado con parmesano Reggiano de 24 meses y trufa negra fresca de temporada. Un plato que define nuestra filosofía."}
                    </p>
                    <Button variant="outline" className="border-slate-900 dark:border-white text-slate-900 dark:text-white uppercase tracking-widest text-xs font-bold hover:bg-slate-900 hover:text-white transition-colors">
                        Ver Menú Completo
                    </Button>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="aspect-square rounded-full overflow-hidden border-8 border-white dark:border-white/5 shadow-2xl relative">
                        <NextImage
                            src={content.imageUrl || "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1000&auto=format&fit=crop"}
                            alt="Feature"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
