"use client"

import { Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
    title: string
    slug: string
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)
    const url = typeof window !== "undefined" ? `${window.location.origin}/blog/${slug}` : ""

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const shareTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank")
    }

    const shareLinkedin = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank")
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={shareTwitter}
                title="Compartir en Twitter"
                className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-blue-500 transition-colors"
            >
                <Twitter className="h-4 w-4" />
            </button>

            <button
                onClick={shareLinkedin}
                title="Compartir en LinkedIn"
                className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-blue-700 transition-colors"
            >
                <Linkedin className="h-4 w-4" />
            </button>

            <button
                onClick={handleCopy}
                title={copied ? "Enlace copiado" : "Copiar enlace"}
                className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors"
            >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <LinkIcon className="h-4 w-4" />}
            </button>
        </div>
    )
}
