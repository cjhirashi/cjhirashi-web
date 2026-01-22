
import React from 'react'

interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function LogosSection({ content }: SectionProps) {
    const variant = content.variant || 'A'

    if (variant === 'B') return <LogosVariantB content={content} />
    if (variant === 'C') return <LogosVariantC content={content} />
    return <LogosVariantA content={content} />
}

// OPTION A: Static Grid (Corporate)
function LogosVariantA({ content }: SectionProps) {
    return (
        <section className="py-16 border-b border-border relative bg-background">
            {/* Label for admin/preview clarity, optional in prod */}
            {/* <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Logos - Opción A</div> */}

            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-bold text-muted-foreground mb-8 uppercase tracking-widest">
                    {content.headline || "Confían en nosotros"}
                </p>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="h-8 w-32 bg-slate-800 dark:bg-white rounded"></div>
                    <div className="h-8 w-32 bg-slate-800 dark:bg-white rounded"></div>
                    <div className="h-8 w-32 bg-slate-800 dark:bg-white rounded"></div>
                    <div className="h-8 w-32 bg-slate-800 dark:bg-white rounded"></div>
                </div>
            </div>
        </section>
    )
}

// OPTION B: Infinite Marquee (Tech/SaaS)
function LogosVariantB({ content }: SectionProps) {
    return (
        <section className="py-12 border-b border-border relative bg-muted/30 overflow-hidden">
            {/* <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Logos - Opción B</div> */}

            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li className="font-bold text-2xl text-muted-foreground/50">GOOGLE</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">META</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">AMAZON</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">NETFLIX</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">SPOTIFY</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">GOOGLE</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">META</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">AMAZON</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">NETFLIX</li>
                    <li className="font-bold text-2xl text-muted-foreground/50">SPOTIFY</li>
                </ul>
            </div>
        </section>
    )
}

// OPTION C: Minimalist (Luxury)
function LogosVariantC({ content }: SectionProps) {
    return (
        <section className="py-16 border-b border-border relative bg-black text-white">
            {/* <div className="absolute top-0 left-0 bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase rounded-br-lg z-50">Logos - Opción C</div> */}

            <div className="container mx-auto px-6 flex justify-between items-center opacity-70">
                <span className="font-serif italic text-xl">Vogue</span>
                <span className="font-serif italic text-xl">Forbes</span>
                <span className="font-serif italic text-xl">Elle</span>
                <span className="font-serif italic text-xl">GQ</span>
            </div>
        </section>
    )
}
