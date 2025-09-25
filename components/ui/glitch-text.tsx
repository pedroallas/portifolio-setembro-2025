"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  trigger?: boolean
}

export function GlitchText({ text, className, trigger = false }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

  useEffect(() => {
    if (!trigger) return

    setIsGlitching(true)
    let iterations = 0
    const maxIterations = 10

    const interval = setInterval(() => {
      setGlitchText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index]
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          })
          .join(""),
      )

      iterations += 1

      if (iterations >= maxIterations) {
        clearInterval(interval)
        setGlitchText(text)
        setIsGlitching(false)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [text, trigger])

  return (
    <span className={cn("relative inline-block", isGlitching && "animate-pulse", className)}>
      {glitchText}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-ping">{glitchText}</span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-70 animate-pulse">{glitchText}</span>
        </>
      )}
    </span>
  )
}
