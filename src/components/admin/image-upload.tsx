"use client"

import { useState, useId } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImagePlus, X, Loader2 } from "lucide-react"

interface ImageUploadProps {
    value?: string
    onChange: (url: string) => void
    label?: string
}

export function ImageUpload({ value, onChange, label = "Image" }: ImageUploadProps) {
    const id = useId()
    const [isUploading, setIsUploading] = useState(false)

    async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (!file) return

        setIsUploading(true)
        const formData = new FormData()
        formData.append("file", file)

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            if (!res.ok) throw new Error("Upload failed")

            const data = await res.json()
            onChange(data.url)
        } catch (error) {
            console.error(error)
            alert("Failed to upload image")
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="space-y-2">
            <Label>{label}</Label>

            {value ? (
                <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-lg border bg-muted">
                    <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute right-2 top-2 z-10 h-6 w-6"
                        onClick={() => onChange("")}
                    >
                        <X className="h-3 w-3" />
                    </Button>
                    <Image
                        src={value}
                        alt="Upload preview"
                        fill
                        className="object-cover"
                    />
                </div>
            ) : (
                <div className="flex w-full items-center gap-4">
                    <Button
                        type="button"
                        variant="secondary"
                        disabled={isUploading}
                        onClick={() => document.getElementById(id)?.click()}
                    >
                        {isUploading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <ImagePlus className="mr-2 h-4 w-4" />
                        )}
                        Upload Image
                    </Button>
                    <Input
                        id={id}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
            )}
            {/* Hidden input to ensure value is submitted with form if needed, though we primarily handle via state/json in parent */}
            <input type="hidden" name={label.toLowerCase().replace(" ", "_") + "_hidden"} value={value} />
        </div>
    )
}
