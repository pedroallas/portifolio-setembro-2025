"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  threshold?: number
}

export function ScrollReveal({ children, className, delay = 0, direction = "up", threshold = 0.1 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(60px)"
      case "down":
        return "translateY(-60px)"
      case "left":
        return "translateX(60px)"
      case "right":
        return "translateX(-60px)"
      case "fade":
        return "scale(0.8)"
      default:
        return "translateY(60px)"
    }
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${getInitialTransform()}`,
        className,
      )}
    >
      {children}
    </div>
  )
}
