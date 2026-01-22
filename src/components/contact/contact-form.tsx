'use client'

import { useState, useTransition } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/(public)/contact/actions"
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ContactForm() {
    const [isPending, startTransition] = useTransition()
    const [formState, setFormState] = useState<{
        success?: boolean
        message?: string
        errors?: Record<string, string[]>
    } | null>(null)

    const handleSubmit = async (formData: FormData) => {
        setFormState(null)
        startTransition(async () => {
            const result = await submitContactForm(formData)
            setFormState(result)
        })
    }

    if (formState?.success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center space-y-4 p-8 text-center"
            >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                    {formState.message}
                </p>
                <Button variant="outline" onClick={() => setFormState(null)}>
                    Send Another Message
                </Button>
            </motion.div>
        )
    }

    return (
        <form action={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    disabled={isPending}
                    required
                    className="bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary/50"
                />
                {formState?.errors?.name && (
                    <p className="text-sm text-destructive">{formState.errors.name[0]}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    disabled={isPending}
                    required
                    className="bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary/50"
                />
                {formState?.errors?.email && (
                    <p className="text-sm text-destructive">{formState.errors.email[0]}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    className="min-h-[150px] bg-background/50 backdrop-blur-sm border-muted-foreground/20 focus:border-primary/50 resize-none"
                    disabled={isPending}
                    required
                />
                {formState?.errors?.message && (
                    <p className="text-sm text-destructive">{formState.errors.message[0]}</p>
                )}
            </div>

            {formState?.success === false && (
                <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <p>{formState.message}</p>
                </div>
            )}

            <Button className="w-full group" disabled={isPending}>
                {isPending ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </Button>
        </form>
    )
}
