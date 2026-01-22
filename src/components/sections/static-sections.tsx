import Link from "next/link"
import React from "react"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { DynamicIcon } from '@/components/ui/dynamic-icon'

// Types for props
interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function HeroSection({ content }: SectionProps) {
    const variant = content.variant || 'BUSINESS'

    if (variant === 'DEV') return <DevHero content={content} />
    if (variant === 'RESTAURANT') return <RestaurantHero content={content} />
    return <BusinessHero content={content} />
}

// -----------------------------------------------------------------------------
// VARIANT 1: BUSINESS (Corporate 2.0)
// -----------------------------------------------------------------------------
function BusinessHero({ content }: SectionProps) {
    return (
        <section className="relative pt-20 overflow-hidden bg-background">
            {/* Background Image (If provided) */}
            {content.imageUrl && (
                <div className="absolute inset-0 z-0">
                    <NextImage
                        src={content.imageUrl}
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
                </div>
            )}

            {/* Background Blob (Only if no BG image) */}
            {!content.imageUrl && <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />}

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 min-h-[90vh]">
                {/* Text Content */}
                <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm">
                        {content.badgeIcon ? (
                            <DynamicIcon name={content.badgeIcon} className="w-4 h-4" />
                        ) : (
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        )}
                        {content.badge || "Solución Enterprise 2.0"}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        {content.headline || "Impulsa tu Negocio Digital"}
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        {content.subheadline || "Plataforma integral diseñada para escalar operaciones, optimizar flujos y aumentar la conversión."}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        {content.ctaText && (
                            <Button asChild size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:-translate-y-[2px] transition-all w-full sm:w-auto">
                                <Link href={content.ctaLink || "#"} className="flex items-center gap-2">
                                    {content.ctaIcon && <DynamicIcon name={content.ctaIcon} className="w-5 h-5" />}
                                    {content.ctaText}
                                </Link>
                            </Button>
                        )}
                        {content.secondaryCtaText && (
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                                <Link href={content.secondaryCtaLink || "#"} className="flex items-center gap-2">
                                    {content.secondaryCtaIcon && <DynamicIcon name={content.secondaryCtaIcon} className="w-5 h-5" />}
                                    {content.secondaryCtaText}
                                </Link>
                            </Button>
                        )}
                    </div>


                </div>

                {/* Visual Content */}
                <div className="relative h-[500px] lg:h-[600px] w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                    <div className="absolute inset-0 bg-gradient-to-tr from-muted to-background rounded-2xl overflow-hidden shadow-2xl border border-border group">
                        {content.foregroundImageUrl ? (
                            <NextImage
                                src={content.foregroundImageUrl}
                                alt="Hero Visual"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                No Foreground Image
                            </div>
                        )}

                        {/* Floating Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-md p-6 rounded-xl border shadow-lg flex items-center gap-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg text-green-700 dark:text-green-300">
                                {content.cardIcon ? (
                                    <DynamicIcon name={content.cardIcon} className="w-6 h-6" />
                                ) : (
                                    <Sparkles className="w-6 h-6" />
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">{content.cardLabel || "Productividad"}</p>
                                <p className="text-2xl font-bold">{content.cardValue || "+240%"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// -----------------------------------------------------------------------------
// VARIANT 2: DEVELOPER (Terminal / Tech)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// VARIANT 2: DEVELOPER (Terminal / Tech)
// -----------------------------------------------------------------------------
function DevHero({ content }: SectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image (If provided) */}
            {content.imageUrl ? (
                <div className="absolute inset-0 z-0 opactiy-30">
                    <NextImage
                        src={content.imageUrl}
                        alt="Dev Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-background/80" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
            )}

            <div className="container relative z-10 px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 py-20">
                {/* Terminal Visual */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

                    {/* Visual Content: Image or Code Terminal */}
                    {content.foregroundImageUrl ? (
                        // CLEAN IMAGE (No Window Frame)
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50">
                            <NextImage
                                src={content.foregroundImageUrl}
                                alt="Hero Visual"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        // CODE TERMINAL (Window Frame)
                        <div className="relative bg-card rounded-xl border border-border shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-muted-foreground">
                            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-xs text-muted-foreground">developer_profile.tsx</span>
                            </div>

                            <div className="p-6">
                                <div className="flex gap-4">
                                    <div className="text-muted-foreground/50 select-none text-right border-r border-border pr-4">
                                        1<br />2<br />3<br />4<br />5<br />6
                                    </div>
                                    <div>
                                        <span className="text-primary">const</span> <span className="text-secondary">{content.devName?.replace(/\s+/g, '') || "Developer"}</span> = {'{'}<br />
                                        &nbsp;&nbsp;<span className="text-foreground">name</span>: <span className="text-green-500">"{content.devName || "Alex Dev"}"</span>,<br />
                                        &nbsp;&nbsp;<span className="text-foreground">role</span>: <span className="text-green-500">"{content.devRole || "Full Stack Developer"}"</span>,<br />
                                        &nbsp;&nbsp;<span className="text-foreground">stack</span>: [<span className="text-green-500">
                                            {(content.devStack ? content.devStack.split(',') : ["React", "Next.js", "Node"]).map((t: string, i: number, arr: string[]) => (
                                                <React.Fragment key={i}>
                                                    "{t.trim()}"{i < arr.length - 1 && ", "}
                                                </React.Fragment>
                                            ))}
                                        </span>],<br />
                                        &nbsp;&nbsp;<span className="text-foreground">status</span>: <span className="text-green-500">"{content.devStatus || "Open to work"}"</span><br />
                                        {'}'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm">
                        {content.badgeIcon ? (
                            <DynamicIcon name={content.badgeIcon} className="w-4 h-4" />
                        ) : (
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        )}
                        {content.badge || "HI, WORLD_"}
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                        {content.headline || "Building the Digital Future"}
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        {content.subheadline || "Transforming complex ideas into clean, scalable code."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        {content.ctaText && (
                            <Button asChild size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:-translate-y-[2px] transition-all">
                                <Link href={content.ctaLink || "#"} className="flex items-center gap-2">
                                    {content.ctaIcon && <DynamicIcon name={content.ctaIcon} className="w-5 h-5" />}
                                    {content.ctaText}
                                </Link>
                            </Button>
                        )}
                        {content.secondaryCtaText && (
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                                <Link href={content.secondaryCtaLink || "#"} className="flex items-center gap-2">
                                    {content.secondaryCtaIcon && <DynamicIcon name={content.secondaryCtaIcon} className="w-5 h-5" />}
                                    {content.secondaryCtaText}
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

// -----------------------------------------------------------------------------
// VARIANT 3: RESTAURANT (Unified Style)
// -----------------------------------------------------------------------------
function RestaurantHero({ content }: SectionProps) {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                {content.imageUrl ? (
                    <NextImage
                        src={content.imageUrl}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-background" />
                )}
                <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
            </div>

            <div className="container relative z-10 px-6 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">

                <div className="inline-flex justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary font-medium text-sm backdrop-blur-sm">
                        {content.badgeIcon ? (
                            <DynamicIcon name={content.badgeIcon} className="w-4 h-4" />
                        ) : (
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        )}
                        {content.badge || "Desde 1985"}
                    </div>
                </div>

                <h1 className="text-5xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter">
                    {content.headline || "Sabor & Excelencia"}
                </h1>

                <p className="text-xl text-slate-200 max-w-lg mx-auto mb-10 leading-relaxed">
                    {content.subheadline || "Una experiencia culinaria inolvidable en el corazón de la ciudad."}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {content.ctaText && (
                        <Button asChild size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:-translate-y-[2px] transition-all w-full sm:w-auto">
                            <Link href={content.ctaLink || "#"} className="flex items-center gap-2">
                                {content.ctaIcon && <DynamicIcon name={content.ctaIcon} className="w-5 h-5" />}
                                {content.ctaText}
                            </Link>
                        </Button>
                    )}
                    {content.secondaryCtaText && (
                        <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg gap-2 w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-black">
                            <Link href={content.secondaryCtaLink || "#"} className="flex items-center gap-2">
                                {content.secondaryCtaIcon && <DynamicIcon name={content.secondaryCtaIcon} className="w-5 h-5" />}
                                {content.secondaryCtaText}
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
}

export function AboutSection({ content }: SectionProps) {
    return (
        <section className="py-20 md:py-28 bg-muted/10">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Image Side - Order 2 on mobile, 1 on desktop if desired, but default is good */}
                    <div className="relative order-last lg:order-first">
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl border bg-background shadow-xl">
                            {content.imageUrl ? (
                                <NextImage
                                    src={content.imageUrl}
                                    alt="About Me"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-muted">
                                    <span className="text-muted-foreground">No image uploaded</span>
                                </div>
                            )}
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
                        <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{content.title || "About Me"}</h2>
                        <div className="prose prose-gray dark:prose-invert max-w-none text-muted-foreground text-lg/relaxed">
                            {/* Simple rendering for now, could act as markdown later */}
                            {content.body?.split('\n').map((paragraph: string, i: number) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Helper to safely parse items
function parseItems(items: any) {
    if (Array.isArray(items)) return items
    if (typeof items === 'string') {
        try {
            const parsed = JSON.parse(items)
            if (Array.isArray(parsed)) return parsed
            // Handle legacy comma-separated string that isn't JSON
            return items.split(',').map(s => ({ title: s.trim(), description: 'Feature description placeholder.' }))
        } catch {
            return items.split(',').map(s => ({ title: s.trim(), description: 'Feature description placeholder.' }))
        }
    }
    return []
}

export function FeaturesSection({ content }: SectionProps) {
    const items = parseItems(content.items)

    return (
        <section className="py-20 md:py-32 bg-background/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 mb-16 max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{content.title || "Stay on top of customer support"}</h2>
                    {content.subheadline && (
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {content.subheadline}
                        </p>
                    )}
                </div>

                <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col items-center space-y-3 group text-center">
                            {/* Icon Box */}
                            <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary mb-2 group-hover:bg-primary/20 transition-colors">
                                {item.icon ? (
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    <DynamicIcon name={item.icon as any} className="h-6 w-6" />
                                ) : (
                                    <Sparkles className="h-6 w-6" />
                                )}
                            </div>

                            <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>

                            <p className="text-muted-foreground leading-relaxed">
                                {item.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                            </p>

                            {item.link && (
                                <Link
                                    href={item.link}
                                    className="inline-flex items-center text-primary font-medium hover:underline mt-2"
                                >
                                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export function CTASection({ content }: SectionProps) {
    return (
        <section className="py-12 md:py-16 lg:py-24 border-t">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{content.title}</h2>
                    <Button asChild size="lg">
                        <Link href={content.buttonLink || "#"}>{content.buttonText}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
