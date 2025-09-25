"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function ScrollProgress() {
  const scrollProgress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  )
}
