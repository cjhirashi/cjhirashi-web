import Link from "next/link"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code2 } from "lucide-react"

// Types for props
interface SectionProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}

export function HeroSection({ content }: SectionProps) {
    return (
        <section className="relative w-full overflow-hidden bg-background py-24 md:py-32 lg:py-40">
            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm mx-auto lg:mx-0">
                                <Sparkles className="mr-2 h-4 w-4" />
                                {content.badge || "Disponible para proyectos"}
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                {content.headline || "Welcome"}
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl mx-auto lg:mx-0 font-light leading-relaxed">
                                {content.subheadline}
                            </p>
                        </div>
                        {content.ctaText && (
                            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                                <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                                    <Link href={content.ctaLink || "#"}>
                                        {content.ctaText}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Visual Element / Image */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted/20 border shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            {content.imageUrl ? (
                                <NextImage
                                    src={content.imageUrl}
                                    alt="Hero Image"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-muted">
                                    <Code2 className="h-24 w-24 text-muted-foreground/20" />
                                </div>
                            )}
                        </div>
                        {/* Decorative background blob */}
                        <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-50 blur-3xl" />
                    </div>
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

export function FeaturesSection({ content }: SectionProps) {
    const items = typeof content.items === 'string' ? content.items.split(',').map((s: string) => s.trim()) : (content.items || [])

    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{content.title || "Features"}</h2>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
                    {items.map((item: string, index: number) => (
                        <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors">
                            <Code2 className="h-10 w-10 text-primary" />
                            <span className="font-semibold">{item}</span>
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
