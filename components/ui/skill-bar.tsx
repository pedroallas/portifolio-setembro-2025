"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface SkillBarProps {
  name: string
  level: number
  years: number
  className?: string
}

export function SkillBar({ name, level, years, className }: SkillBarProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <div ref={ref} className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{years} anos</span>
          <span className="text-primary font-semibold">{level}%</span>
        </div>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isIntersecting ? `${level}%` : "0%",
            transitionDelay: isIntersecting ? "0.2s" : "0s",
          }}
        />
      </div>
    </div>
  )
}
