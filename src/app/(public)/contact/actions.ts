'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function submitContactForm(formData: FormData) {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    }

    const validatedFields = contactSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid fields. Please check your input.',
        }
    }

    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Contact form submitted:', validatedFields.data)

    return {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
    }
}
