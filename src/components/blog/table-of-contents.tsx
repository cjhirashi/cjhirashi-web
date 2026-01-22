"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface TableOfContentsProps {
    headings: {
        id: string
        text: string
        level: number
    }[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "0px 0px -80% 0px" }
        )

        headings.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [headings])

    if (!headings || headings.length === 0) return null

    return (
        <div className="sticky top-32">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">
                En este artículo
            </h3>
            <ul className="space-y-4 border-l-2 border-slate-100 dark:border-slate-800">
                {headings.map((heading) => (
                    <li key={heading.id} className="relative">
                        <Link
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" })
                                setActiveId(heading.id)
                            }}
                            className={`block pl-4 text-sm transition-colors border-l-2 -ml-[2px] ${activeId === heading.id
                                    ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium"
                                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                                }`}
                        >
                            {heading.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
