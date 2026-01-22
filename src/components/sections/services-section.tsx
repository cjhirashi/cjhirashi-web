
import React from 'react'
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { Button } from "@/components/ui/button"

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

// Helper to safely parse items
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseItems(items: any) {
    if (Array.isArray(items)) return items
    if (typeof items === 'string') {
        try {
            const parsed = JSON.parse(items)
            if (Array.isArray(parsed)) return parsed
            // Handle legacy comma-separated string that isn't JSON
            return items.split(',').map(s => ({ title: s.trim(), description: 'Description placeholder.' }))
        } catch {
            return items.split(',').map(s => ({ title: s.trim(), description: 'Description placeholder.' }))
        }
    }
    return []
}

export function ServicesSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <ServicesVariantB content={content} />
    if (variant === 'C') return <ServicesVariantC content={content} />
    return <ServicesVariantA content={content} />
}

// OPTION A: Bento Grid (Existing/Classic)
function ServicesVariantA({ content }: SectionProps) {
    const items = parseItems(content.items)

    // Fallback items if none provided
    const displayItems = items.length > 0 ? items : [
        { title: "Desarrollo Web", description: "Apps escalables y rápidas.", icon: "Code" },
        { title: "UI Design", description: "Interfaces modernas.", icon: "Palette" },
        { title: "Mobile First", description: "Adaptable a todo dispositivo.", icon: "Smartphone" },
        { title: "Consultoría IT", description: "Estrategia digital.", icon: "Brain" }
    ]

    return (
        <section className="py-24 relative border-b border-border bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center space-y-4 mb-16 max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{content.headline || "Ecosistema de Soluciones"}</h2>
                    {content.subheadline && (
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {content.subheadline}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
                    {/* Item 1: Large Box */}
                    <div className="md:col-span-2 md:row-span-2 bg-muted/50 rounded-2xl p-8 relative overflow-hidden group border border-border">
                        <h3 className="text-2xl font-bold mb-2">{displayItems[0]?.title}</h3>
                        <p className="text-muted-foreground">{displayItems[0]?.description}</p>
                        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full">
                            {displayItems[0]?.icon ? <DynamicIcon name={displayItems[0].icon} className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                        </div>
                    </div>

                    {/* Item 2: Small Box */}
                    <div className="bg-primary/10 rounded-2xl p-6 flex flex-col justify-center text-center border border-primary/20">
                        <div className="mx-auto text-primary mb-3">
                            {displayItems[1]?.icon ? <DynamicIcon name={displayItems[1].icon} className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
                        </div>
                        <h3 className="font-bold">{displayItems[1]?.title}</h3>
                    </div>

                    {/* Item 3: Small Box */}
                    <div className="bg-muted/50 rounded-2xl p-6 flex flex-col justify-center text-center border border-border">
                        <div className="mx-auto text-muted-foreground mb-3">
                            {displayItems[2]?.icon ? <DynamicIcon name={displayItems[2].icon} className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
                        </div>
                        <h3 className="font-bold">{displayItems[2]?.title}</h3>
                    </div>

                    {/* Item 4: Wide Box */}
                    <div className="md:col-span-2 bg-slate-800 text-white rounded-2xl p-8 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold">{displayItems[3]?.title}</h3>
                            <p className="text-slate-400 text-sm">{displayItems[3]?.description}</p>
                        </div>
                        <ArrowRight className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Icon Cards (Clean Columns)
function ServicesVariantB({ content }: SectionProps) {
    const items = parseItems(content.items)
    const displayItems = items.length > 0 ? items : [
        { title: "Cloud Solutions", description: "Migración y gestión de infraestructura en AWS o Google Cloud.", icon: "Cloud", color: "blue" },
        { title: "Ciberseguridad", description: "Auditorías de pentesting y protección de datos sensibles.", icon: "Lock", color: "purple" },
        { title: "Analítica de Datos", description: "Dashboards interactivos para la toma de decisiones.", icon: "BarChart", color: "pink" }
    ]

    return (
        <section className="py-24 relative bg-muted/30 border-b border-border">
            {/* <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Servicios - Opción B</div> */}

            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10">{content.headline || "¿Qué podemos hacer por ti?"}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {displayItems.map((item: any, idx: number) => (
                        <div key={idx} className="bg-background p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-border">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-primary/10 text-primary`}>
                                {item.icon ? <DynamicIcon name={item.icon} className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// OPTION C: Horizontal List (Interactive/Minimal)
function ServicesVariantC({ content }: SectionProps) {
    const items = parseItems(content.items)
    const displayItems = items.length > 0 ? items : [
        { title: "Dirección de Arte" },
        { title: "Desarrollo Frontend" },
        { title: "Motion Graphics" }
    ]

    return (
        <section className="py-24 relative bg-black text-white border-b border-white/10">
            {/* <div className="absolute top-0 left-0 bg-white text-black px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Servicios - Opción C</div> */}

            <div className="container mx-auto px-6">
                <h2 className="font-mono text-sm text-slate-400 mb-8 tracking-widest">{content.headline || "CAPABILITIES"}</h2>
                <div className="space-y-0">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {displayItems.map((item: any, idx: number) => (
                        <div key={idx} className="group py-8 border-t border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors px-4">
                            <h3 className="text-3xl md:text-5xl font-light group-hover:pl-4 transition-all">{item.title}</h3>
                            <DynamicIcon name="ArrowUpRight" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                    <div className="group py-8 border-t border-white/10 border-b opacity-0" />
                </div>
            </div>
        </section>
    )
}
