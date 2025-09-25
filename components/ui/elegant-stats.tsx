"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface Stat {
  label: string
  value: number
  suffix?: string
  icon: string
}

const stats: Stat[] = [
  { label: "Years Experience", value: 8, icon: "⚡" },
  { label: "Projects Completed", value: 150, suffix: "+", icon: "🚀" },
  { label: "Technologies Mastered", value: 25, suffix: "+", icon: "💻" },
  { label: "Client Satisfaction", value: 99, suffix: "%", icon: "⭐" },
]

export function ElegantStats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    null
  )
}
