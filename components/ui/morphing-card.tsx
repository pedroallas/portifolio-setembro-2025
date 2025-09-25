"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface MorphingCardProps {
  children: React.ReactNode
  className?: string
  hoverContent?: React.ReactNode
}

export function MorphingCard({ children, className, hoverContent }: MorphingCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-500 ease-out",
        "hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-accent/20",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-transparent",
        "before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="transition-all duration-500 ease-out">{children}</div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  )
}
