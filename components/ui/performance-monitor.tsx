"use client"

import { useEffect, useState } from "react"
import { Activity, Cpu, Zap } from "lucide-react"

interface PerformanceMetrics {
  fps: number
  memory: number
  loadTime: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    loadTime: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // FPS monitoring
    let frames = 0
    let lastTime = performance.now()

    const measureFPS = () => {
      frames++
      const currentTime = performance.now()

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frames * 1000) / (currentTime - lastTime))
        setMetrics((prev) => ({ ...prev, fps }))
        frames = 0
        lastTime = currentTime
      }

      requestAnimationFrame(measureFPS)
    }

    measureFPS()

    // Memory monitoring
    const updateMemory = () => {
      if ("memory" in performance) {
        const memory = Math.round((performance as any).memory.usedJSHeapSize / 1048576)
        setMetrics((prev) => ({ ...prev, memory }))
      }
    }

    // Load time
    const loadTime = Math.round(performance.now())
    setMetrics((prev) => ({ ...prev, loadTime }))

    const memoryInterval = setInterval(updateMemory, 2000)

    // Show/hide with keyboard shortcut
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setIsVisible((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => {
      clearInterval(memoryInterval)
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 text-xs font-mono z-50">
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-3 h-3 text-accent" />
        <span className="text-foreground font-semibold">Performance</span>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-green-500" />
            <span className="text-muted-foreground">FPS:</span>
          </div>
          <span
            className={`font-semibold ${metrics.fps >= 55 ? "text-green-500" : metrics.fps >= 30 ? "text-yellow-500" : "text-red-500"}`}
          >
            {metrics.fps}
          </span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-blue-500" />
            <span className="text-muted-foreground">Memory:</span>
          </div>
          <span className="text-foreground font-semibold">{metrics.memory}MB</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-muted-foreground">Load:</span>
          <span className="text-foreground font-semibold">{metrics.loadTime}ms</span>
        </div>
      </div>

      <div className="text-[10px] text-muted-foreground mt-2 opacity-60">Ctrl+Shift+P to toggle</div>
    </div>
  )
}
