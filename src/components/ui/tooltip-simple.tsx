import React, { useState } from 'react'
import { Info } from 'lucide-react'

interface TooltipSimpleProps {
    text: string
}

export function TooltipSimple({ text }: TooltipSimpleProps) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div
            className="relative inline-block ml-2 cursor-help"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <Info className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            {isVisible && (
                <div className="absolute z-50 w-64 p-2 mt-2 -ml-32 left-1/2 text-xs text-white bg-slate-900 rounded-lg shadow-lg dark:bg-slate-800 border border-slate-700">
                    {text}
                    {/* Tiny arrow */}
                    <div className="absolute w-2 h-2 -top-1 left-1/2 -ml-1 bg-slate-900 dark:bg-slate-800 border-t border-l border-slate-700 transform rotate-45" />
                </div>
            )}
        </div>
    )
}
