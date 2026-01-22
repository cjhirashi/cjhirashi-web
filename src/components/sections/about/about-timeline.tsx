import { DynamicIcon } from "@/components/ui/dynamic-icon"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AboutTimeline({ content }: { content: any }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let items: any[] = []
    if (content.timeline) {
        try {
            items = typeof content.timeline === 'string' ? JSON.parse(content.timeline) : content.timeline
        } catch (e) { console.error("Error parsing timeline", e) }
    }
    // Fallback if empty and not defined
    if (!items || items.length === 0) return null

    return (
        <section className="py-24 bg-muted/30 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">{content.title || "Nuestra Trayectoria"}</h2>
                    <p className="text-muted-foreground">{content.subheadline || "Hitos importantes en nuestro camino."}</p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-primary/50 before:to-primary/20">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <DynamicIcon name={item.icon || "Circle"} className="w-4 h-4" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card shadow-sm border border-border hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between space-x-2 mb-2">
                                    <span className="font-bold text-lg">{item.title}</span>
                                    <span className="px-2 py-1 bg-muted rounded text-xs font-mono">{item.year}</span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description || item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
