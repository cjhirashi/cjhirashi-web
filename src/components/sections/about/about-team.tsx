import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AboutTeam({ content }: { content: any }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let team: any[] = []
    if (content.team) {
        try {
            team = typeof content.team === 'string' ? JSON.parse(content.team) : content.team
        } catch (e) { console.error("Error parsing team", e) }
    }
    if (!team.length) return null

    return (
        <section className="py-24 bg-muted/30 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">{content.title || "Conoce a los Expertos"}</h2>
                        <p className="text-muted-foreground">{content.subheadline || "Mentes brillantes, corazones humildes."}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {team.map((member: any, idx: number) => (
                        <div key={idx} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <Image
                                    src={member.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600"}
                                    alt={member.title || "Team Member"} // Note: Form uses 'title' for name
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg">{member.title}</h3>
                                <p className="text-sm text-primary font-medium">{member.role}</p>
                                {member.description && (
                                    <p className="text-xs text-muted-foreground mt-2 line-clamp-3">{member.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
