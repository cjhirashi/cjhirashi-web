
import React from 'react'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { Button } from "@/components/ui/button"

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function PricingSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <PricingVariantB content={content} />
    if (variant === 'C') return <PricingVariantC content={content} />
    return <PricingVariantA content={content} />
}

// OPTION A: Cards (Classic)
function PricingVariantA({ content }: SectionProps) {
    return (
        <section className="py-24 relative border-b border-border bg-background">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">{content.headline || "Planes Simples"}</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {/* Basic */}
                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border w-full md:w-80">
                        <h3 className="font-bold">Básico</h3>
                        <div className="text-3xl font-bold my-4">$19</div>
                        <Button variant="outline" className="w-full">Elegir</Button>
                    </div>
                    {/* Pro */}
                    <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl w-full md:w-80 transform scale-105">
                        <h3 className="font-bold">Pro</h3>
                        <div className="text-3xl font-bold my-4">$49</div>
                        <Button className="w-full bg-background text-foreground hover:bg-muted">Elegir</Button>
                    </div>
                    {/* Enterprise */}
                    <div className="bg-card p-6 rounded-2xl shadow-sm border border-border w-full md:w-80">
                        <h3 className="font-bold">Enterprise</h3>
                        <div className="text-3xl font-bold my-4">$99</div>
                        <Button variant="outline" className="w-full">Elegir</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Comparison Table (Detailed)
function PricingVariantB({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-muted/30 border-b border-border">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold mb-12 text-center">{content.headline || "Compara Características"}</h2>
                <div className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border">
                    <table className="w-full text-left">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="p-6 font-bold text-muted-foreground">Feature</th>
                                <th className="p-6 font-bold text-center">Starter</th>
                                <th className="p-6 font-bold text-center text-primary">Pro</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr>
                                <td className="p-6">Usuarios</td>
                                <td className="p-6 text-center text-muted-foreground">1</td>
                                <td className="p-6 text-center font-bold">Ilimitados</td>
                            </tr>
                            <tr>
                                <td className="p-6">Almacenamiento</td>
                                <td className="p-6 text-center text-muted-foreground">5 GB</td>
                                <td className="p-6 text-center font-bold">500 GB</td>
                            </tr>
                            <tr>
                                <td className="p-6">Soporte</td>
                                <td className="p-6 text-center text-muted-foreground">Email</td>
                                <td className="p-6 text-center font-bold">24/7 Prioritario</td>
                            </tr>
                            <tr>
                                <td className="p-6">API Access</td>
                                <td className="p-6 text-center text-muted-foreground"><DynamicIcon name="X" className="w-5 h-5 mx-auto" /></td>
                                <td className="p-6 text-center text-green-500"><DynamicIcon name="Check" className="w-5 h-5 mx-auto" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

// OPTION C: Minimal Switch (Clean)
function PricingVariantC({ content }: SectionProps) {
    return (
        <section className="py-24 relative bg-slate-900 text-white border-b border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">{content.headline || "Simple Pricing."}</h2>
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="text-slate-400">Mensual</span>
                    <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white font-bold">Anual (Ahorra 20%)</span>
                </div>
                <div className="text-6xl font-bold mb-4">$29<span className="text-xl text-slate-400 font-normal">/mes</span></div>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">Acceso completo a todas las herramientas. Cancela cuando quieras. Sin contratos ocultos.</p>
                <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-slate-200">Comenzar Trial de 14 días</Button>
            </div>
        </section>
    )
}
