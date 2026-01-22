import { NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { auth } from "@/lib/auth"

export async function POST(request: Request) {
    const session = await auth()
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const data = await request.formData()
    const file: File | null = data.get("file") as unknown as File

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Ensure uploads dir exists
    const relativeUploadDir = "/uploads"
    const uploadDir = join(process.cwd(), "public", relativeUploadDir)

    try {
        await mkdir(uploadDir, { recursive: true })
    } catch {
        // Ignore error if directory exists
    }

    // Create unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    const ext = file.name.split('.').pop()
    const filename = `${file.name.replace(/\.[^/.]+$/, "")}-${uniqueSuffix}.${ext}`

    const finalPath = join(uploadDir, filename)

    try {
        await writeFile(finalPath, buffer)
        // Return public URL
        return NextResponse.json({ url: `${relativeUploadDir}/${filename}` })
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json({ error: "Failed to save file" }, { status: 500 })
    }
}
