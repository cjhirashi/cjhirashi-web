
import React from 'react'
import { DynamicIcon } from '@/components/ui/dynamic-icon'
import { Button } from "@/components/ui/button"

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function FaqSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <FaqVariantB content={content} />
    if (variant === 'C') return <FaqVariantC content={content} />
    return <FaqVariantA content={content} />
}

// OPTION A: Accordion (Standard)
function FaqVariantA({ content }: SectionProps) {
    return (
        <section className="py-24 bg-background border-b border-border relative">
            <div className="container mx-auto px-6 max-w-2xl">
                <h2 className="text-3xl font-bold mb-10 text-center">{content.headline || "Preguntas Frecuentes"}</h2>
                <div className="space-y-4">
                    <details className="group bg-muted/30 rounded-xl p-4 cursor-pointer open:bg-muted/50 transition-colors">
                        <summary className="font-bold list-none flex justify-between items-center text-foreground">
                            ¿Cuánto tiempo toma la implementación?
                            <DynamicIcon name="ChevronDown" className="w-5 h-5 transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="text-muted-foreground mt-4 text-sm">Generalmente toma entre 2 y 4 semanas dependiendo de la complejidad del proyecto y los requerimientos específicos.</p>
                    </details>
                    <details className="group bg-muted/30 rounded-xl p-4 cursor-pointer open:bg-muted/50 transition-colors">
                        <summary className="font-bold list-none flex justify-between items-center text-foreground">
                            ¿Ofrecen soporte post-venta?
                            <DynamicIcon name="ChevronDown" className="w-5 h-5 transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="text-muted-foreground mt-4 text-sm">Sí, todos nuestros planes incluyen 6 meses de soporte técnico gratuito para errores y mantenimiento básico.</p>
                    </details>
                    <details className="group bg-muted/30 rounded-xl p-4 cursor-pointer open:bg-muted/50 transition-colors">
                        <summary className="font-bold list-none flex justify-between items-center text-foreground">
                            ¿Es compatible con móviles?
                            <DynamicIcon name="ChevronDown" className="w-5 h-5 transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="text-muted-foreground mt-4 text-sm">Absolutamente. Adoptamos una filosofía 'Mobile First', asegurando que tu sitio se vea perfecto en cualquier dispositivo.</p>
                    </details>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Grid Box (Visual)
function FaqVariantB({ content }: SectionProps) {
    return (
        <section className="py-24 bg-muted/30 border-b border-border relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">{content.headline || "Centro de Ayuda"}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <DynamicIcon name="CreditCard" className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Facturación y Pagos</h3>
                        <p className="text-muted-foreground text-sm">Aceptamos todas las tarjetas de crédito, PayPal y transferencias bancarias. Las facturas se envían automáticamente.</p>
                    </div>
                    <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                            <DynamicIcon name="ShieldCheck" className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Seguridad y Privacidad</h3>
                        <p className="text-muted-foreground text-sm">Tus datos están protegidos con encriptación AES-256. Cumplimos con todas las normativas GDPR y locales.</p>
                    </div>
                    <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                        <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                            <DynamicIcon name="Users" className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Gestión de Equipos</h3>
                        <p className="text-muted-foreground text-sm">Puedes invitar a miembros ilimitados a tu equipo y gestionar sus permisos desde el panel de administración.</p>
                    </div>
                    <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                            <DynamicIcon name="Code2" className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">API y Desarrolladores</h3>
                        <p className="text-muted-foreground text-sm">Documentación completa disponible. Webhooks, API REST y SDKs para los lenguajes más populares.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// OPTION C: Contact Sidebar (Functional)
function FaqVariantC({ content }: SectionProps) {
    return (
        <section className="py-24 bg-background border-b border-border relative">
            <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-3xl font-serif mb-4">{content.headline || "¿Dudas?"}</h2>
                    <p className="text-muted-foreground mb-8">Si no encuentras la respuesta que buscas, nuestro equipo de concierge está disponible 24/7.</p>
                    <Button variant="link" className="flex items-center gap-2 font-bold text-gold hover:text-gold/80 p-0 text-md">
                        Contactar Soporte <DynamicIcon name="ArrowRight" className="w-4 h-4" />
                    </Button>
                </div>
                <div className="md:w-2/3 space-y-6">
                    <div>
                        <h3 className="font-bold text-lg mb-2">¿Cuál es la política de cancelación?</h3>
                        <p className="text-muted-foreground text-sm">Puedes cancelar tu reserva hasta 24 horas antes sin cargo alguno. Para cancelaciones tardías se aplica un cargo del 10%.</p>
                    </div>
                    <hr className="border-border" />
                    <div>
                        <h3 className="font-bold text-lg mb-2">¿Tienen opciones vegetarianas/veganas?</h3>
                        <p className="text-muted-foreground text-sm">Sí, el 40% de nuestro menú es apto para dietas basadas en plantas. También manejamos opciones sin gluten.</p>
                    </div>
                    <hr className="border-border" />
                    <div>
                        <h3 className="font-bold text-lg mb-2">¿Ofrecen servicio de valet parking?</h3>
                        <p className="text-muted-foreground text-sm">Contamos con servicio de valet parking gratuito para todos nuestros clientes con reserva confirmada.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
