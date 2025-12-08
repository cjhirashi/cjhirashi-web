import { PrismaClient } from "@prisma/client"
import {
    HeroSection,
    AboutSection,
    FeaturesSection,
    CTASection
} from "@/components/sections/static-sections"
import {
    BlogFeedSection,
    ProjectFeedSection,
    EventFeedSection
} from "@/components/sections/feed-sections"

const prisma = new PrismaClient()

export const dynamic = "force-dynamic"

export default async function HomePage() {
    // Fetch active sections ordered by 'order'
    const sections = await prisma.homeSection.findMany({
        where: { isActive: true },
        orderBy: { order: "asc" },
    })

    return (
        <div className="flex flex-col min-h-screen">
            {sections.map((section) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const content = section.content as any

                switch (section.type) {
                    case "HERO":
                        return <HeroSection key={section.id} content={content} />
                    case "ABOUT":
                        return <AboutSection key={section.id} content={content} />
                    case "FEATURES":
                        return <FeaturesSection key={section.id} content={content} />
                    case "CTA":
                        return <CTASection key={section.id} content={content} />
                    case "BLOG_FEED":
                        return <BlogFeedSection key={section.id} content={content} />
                    case "PROJECT_FEED":
                        return <ProjectFeedSection key={section.id} content={content} />
                    case "EVENT_FEED":
                        return <EventFeedSection key={section.id} content={content} />
                    default:
                        return null
                }
            })}

            {sections.length === 0 && (
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 px-4">
                    <h1 className="text-4xl font-bold">Welcome</h1>
                    <p className="text-muted-foreground max-w-md">
                        This site is currently being set up. Check back soon!
                    </p>
                </div>
            )}
        </div>
    )
}
