import { ContactForm } from "@/components/contact/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center p-4">
            {/* Background elements */}
            <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

            <div className="container max-w-5xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left Column: Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400">
                                Get in Touch
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email Me</h3>
                                    <p className="text-sm text-muted-foreground">contact@cjhirashi.dev</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-sm text-muted-foreground">Available for Remote Work</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Socials</h3>
                                    <p className="text-sm text-muted-foreground">@cjhirashi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <Card className="border-muted/20 bg-background/60 shadow-xl backdrop-blur-xl">
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                I'll get back to you within 24 hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
