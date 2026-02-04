import Link from "next/link"
import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"
import { HeroSection, FeaturesSection, CTASection } from "@/components/sections/static-sections"
import { TechStackSection, ProjectFeedSection, BlogFeedSection } from "@/components/sections/dynamic-home-sections"

async function getHomeSections() {
    const sections = await prisma.homeSection.findMany({
        where: {
            isActive: true,
            NOT: { type: { startsWith: 'ABOUT_' } }
        },
        orderBy: { order: 'asc' }
    })
    return sections
}

export default async function HomePage() {
    const sections = await getHomeSections()

    // Fallback if no sections exist
    if (sections.length === 0) {
        return (
            <div className="flex flex-col min-h-screen items-center justify-center">
                <div className="text-center p-10">
                    <h1 className="text-4xl font-bold mb-4">Bienvenido a tu Portafolio</h1>
                    <p className="mb-8 text-muted-foreground">No hay secciones configuradas. Ve al panel de admin para comenzar.</p>
                    <Button asChild size="lg">
                        <Link href="/admin/home">Ir al Admin</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            {sections.map((section) => {
                const { type, content, id } = section

                switch (type) {
                    case 'HERO':
                        return <HeroSection key={id} content={content} />
                    case 'TECH_STACK':
                    case 'LOGOS':
                        return <TechStackSection key={id} content={content} />
                    case 'FEATURES':
                        return <FeaturesSection key={id} content={content} />
                    case 'PROJECT_FEED':
                        return <ProjectFeedSection key={id} content={content} />
                    case 'BLOG_FEED':
                        return <BlogFeedSection key={id} content={content} />
                    case 'CTA':
                        return <CTASection key={id} content={content} />
                    default:
                        // Log unknown types or handle gracefully
                        return null
                }
            })}
        </div>
    )
}



