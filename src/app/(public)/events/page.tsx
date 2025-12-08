import { PrismaClient, Event } from "@prisma/client"
import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NextImage from "next/image"
import { formatDate } from "@/lib/utils"

const prisma = new PrismaClient()

export const revalidate = 60

export default async function EventsPage() {
    const events = await prisma.event.findMany({
        where: { published: true },
        orderBy: { date: "asc" },
    })

    const upcomingEvents = events.filter(e => new Date(e.date) >= new Date())
    const pastEvents = events.filter(e => new Date(e.date) < new Date())

    return (
        <div className="container py-10">
            <div className="mb-8 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Events</h1>
                <p className="text-xl text-muted-foreground">
                    Conferences, workshops, and meetups where needed.
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                        {upcomingEvents.length === 0 && (
                            <p className="text-muted-foreground col-span-full">No upcoming events scheduled.</p>
                        )}
                    </div>
                </section>

                {pastEvents.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-muted-foreground">Past Events</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 opacity-70">
                            {pastEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

function EventCard({ event }: { event: Event }) {
    return (
        <Card className="flex flex-col h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-muted/50">
                {event.imageUrl ? (
                    <div className="relative w-full h-full">
                        <NextImage
                            src={event.imageUrl}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                            unoptimized
                        />
                    </div>
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-muted-foreground/30">
                        <Calendar className="h-12 w-12" />
                    </div>
                )}
            </div>
            <CardHeader>
                <div className="flex items-center text-sm text-primary mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {formatDate(event.date)}
                </div>
                <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location || 'Online'}
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    {/* In a real app, this might go to a detail page event.slug */}
                    <Link href={`/contact?subject=Event: ${event.title}`}>
                        Register / Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
