import { DynamicIcon } from "@/components/ui/dynamic-icon"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AboutStats({ content }: { content: any }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let stats: any[] = []

    if (content.stats) {
        try {
            stats = typeof content.stats === 'string' ? JSON.parse(content.stats) : content.stats
        } catch (e) {
            console.error("Error parsing stats", e)
        }
    } else {
        // Fallback for legacy monolithic data
        stats = [
            { value: content.stat1Value, label: content.stat1Label },
            { value: content.stat2Value, label: content.stat2Label },
            { value: content.stat3Value, label: content.stat3Label },
        ].filter(s => s.value)
    }

    if (stats.length === 0) return null

    return (
        <section className="py-12 border-y border-border/50 bg-muted/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-around gap-12">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center">
                            <p className="text-4xl md:text-5xl font-bold text-foreground">{stat.value}</p>
                            <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
