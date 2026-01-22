"use client"

import { useEffect, useState } from "react"

export function ProgressBar() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPosition = window.scrollY
            const percentage = (scrollPosition / totalHeight) * 100
            setProgress(percentage)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent pointer-events-none">
            <div
                className="h-full bg-indigo-600 transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
