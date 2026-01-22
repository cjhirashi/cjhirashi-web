
import React from 'react'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function ContactSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <ContactVariantB content={content} />
    if (variant === 'C') return <ContactVariantC content={content} />
    return <ContactVariantA content={content} />
}

// OPTION A: Side by Side (Classic)
function ContactVariantA({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-background border-b border-border">
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2 bg-primary text-primary-foreground p-12 rounded-3xl">
                    <h3 className="text-2xl font-bold mb-4">{content.headline || "Información"}</h3>
                    <div className="space-y-4">
                        <p className="flex items-center gap-2"><DynamicIcon name="Mail" className="w-4 h-4" /> info@nexus.com</p>
                        <p className="flex items-center gap-2"><DynamicIcon name="Phone" className="w-4 h-4" /> +1 234 567 890</p>
                        <p className="flex items-center gap-2"><DynamicIcon name="MapPin" className="w-4 h-4" /> Ciudad de México</p>
                    </div>
                </div>
                <div className="md:w-1/2 p-4">
                    <form className="space-y-4">
                        <Input type="text" placeholder="Nombre" className="w-full p-4 h-auto" />
                        <Input type="email" placeholder="Email" className="w-full p-4 h-auto" />
                        <Textarea rows={3} placeholder="Mensaje" className="w-full p-4" />
                        <Button className="w-full py-6 text-lg">Enviar</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Centered Overlay (Visual)
function ContactVariantB({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')" }}>
            <div className="absolute inset-0 bg-black/60"></div>
            {/* <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Contacto - Opción B</div> */}

            <div className="container mx-auto px-6 relative z-10 flex justify-center">
                <div className="bg-card p-10 rounded-2xl shadow-2xl max-w-lg w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">{content.headline || "Escríbenos"}</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input type="text" placeholder="Nombre" className="bg-muted" />
                            <Input type="text" placeholder="Apellido" className="bg-muted" />
                        </div>
                        <Input type="email" placeholder="Email" className="bg-muted" />
                        <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg">Comenzar Proyecto</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

// OPTION C: Map & Floating (Local Biz)
function ContactVariantC({ content }: SectionProps) {
    return (
        <section className="relative h-[600px] bg-muted">
            {/* <div className="absolute top-0 left-0 bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Contacto - Opción C</div> */}

            {/* Mock Map */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold bg-muted">
                [GOOGLE MAPS INTEGRATION AREA]
            </div>
            <div className="absolute top-1/2 left-12 md:left-24 transform -translate-y-1/2 bg-card p-8 rounded-xl shadow-2xl max-w-sm border border-border">
                <h3 className="font-serif text-2xl mb-4">{content.headline || "Visítanos"}</h3>
                <p className="text-muted-foreground mb-6 text-sm">Av. Reforma 222<br />Ciudad de México, CDMX</p>
                <div className="space-y-3">
                    <Button variant="outline" className="w-full font-bold">Cómo llegar</Button>
                    <Button className="w-full bg-gold text-black hover:bg-gold/90 font-bold">Reservar Mesa</Button>
                </div>
            </div>
        </section>
    )
}
