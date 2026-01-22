import { DynamicIcon } from "@/components/ui/dynamic-icon"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AboutValues({ content }: { content: any }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let values: any[] = []
    if (content.values) {
        try {
            values = typeof content.values === 'string' ? JSON.parse(content.values) : content.values
        } catch (e) { console.error("Error parsing values", e) }
    }
    if (!values.length) return null

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{content.title || "Nuestro ADN"}</h2>
                    {content.subheadline && <p className="text-muted-foreground">{content.subheadline}</p>}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {values.map((item: any, idx: number) => {
                        const colors = ["green", "blue", "purple", "orange", "pink"]
                        const color = colors[idx % colors.length]
                        // Simple fallback for colors
                        const bgClass = color === "green" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                            color === "blue" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                                color === "purple" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                                    color === "orange" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                                        "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"

                        return (
                            <div key={idx} className="p-8 rounded-3xl bg-card border border-border hover:-translate-y-1 transition-transform duration-300">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${bgClass}`}>
                                    <DynamicIcon name={item.icon || "Star"} className="w-7 h-7" />
                                </div>
                                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description || item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
