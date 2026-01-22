
import React from 'react'
import { DynamicIcon } from '@/components/ui/dynamic-icon'

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function TestimonialsSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <TestimonialsVariantB content={content} />
    if (variant === 'C') return <TestimonialsVariantC content={content} />
    return <TestimonialsVariantA content={content} />
}

// OPTION A: Grid Cards (Classic)
function TestimonialsVariantA({ content }: SectionProps) {
    return (
        <section className="py-24 bg-background border-b border-border relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{content.headline || "Historias de Éxito"}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Item 1 */}
                    <div className="p-8 rounded-2xl bg-card shadow-sm border border-border">
                        <div className="flex text-yellow-400 mb-4 gap-1">
                            {[...Array(5)].map((_, i) => <DynamicIcon key={i} name="Star" className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground mb-6 italic">"El mejor equipo de desarrollo con el que he trabajado. Entregaron a tiempo y con una calidad excepcional."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-muted"></div>
                            <div>
                                <p className="font-bold text-sm">Carlos Ruiz</p>
                                <p className="text-xs text-muted-foreground">CEO, TechStart</p>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="p-8 rounded-2xl bg-card shadow-sm border border-border">
                        <div className="flex text-yellow-400 mb-4 gap-1">
                            {[...Array(5)].map((_, i) => <DynamicIcon key={i} name="Star" className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground mb-6 italic">"Transformaron nuestra marca por completo. El diseño UI es de clase mundial."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-muted"></div>
                            <div>
                                <p className="font-bold text-sm">Ana S.</p>
                                <p className="text-xs text-muted-foreground">Marketing, Vercel</p>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="p-8 rounded-2xl bg-card shadow-sm border border-border">
                        <div className="flex text-yellow-400 mb-4 gap-1">
                            {[...Array(5)].map((_, i) => <DynamicIcon key={i} name="Star" className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground mb-6 italic">"Soporte increíble y una plataforma muy fácil de usar para mis empleados."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-muted"></div>
                            <div>
                                <p className="font-bold text-sm">Miguel Ángel</p>
                                <p className="text-xs text-muted-foreground">CTO, Global</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Solo Quote (Impact)
function TestimonialsVariantB({ content }: SectionProps) {
    return (
        <section className="py-32 bg-primary text-primary-foreground relative border-b border-primary-foreground/10">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <DynamicIcon name="Quote" className="w-16 h-16 mx-auto mb-8 opacity-50" />
                <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
                    "{content.quote || "Nexus no solo construyó nuestro sitio web, construyó la infraestructura digital que nos permitió escalar de 10 a 100 empleados en seis meses."}"
                </h2>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 mb-4"></div>
                    <p className="font-bold text-lg">{content.author || "Sarah Connor"}</p>
                    <p className="text-sm opacity-70">{content.role || "Directora de Operaciones, SkyNet"}</p>
                </div>
            </div>
        </section>
    )
}

// OPTION C: Scroller (E-commerce style)
function TestimonialsVariantC({ content }: SectionProps) {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden border-b border-border">
            {/* <div className="absolute top-0 left-0 bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Testimonios - Opción C</div> */}

            <h2 className="text-center font-bold text-3xl mb-12">{content.headline || "Lo que dice la comunidad"}</h2>
            <div className="flex gap-6 overflow-x-auto px-6 pb-8 no-scrollbar snap-x snap-mandatory">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="min-w-[300px] p-6 bg-card rounded-xl shadow-sm snap-center">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-muted"></div>
                            <span className="font-bold text-sm">Usuario{i}</span>
                            <span className="text-green-500 text-xs ml-auto">Compra Verificada</span>
                        </div>
                        <p className="text-sm text-muted-foreground">"El producto llegó en perfectas condiciones y el empaque es hermoso."</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
