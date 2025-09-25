export interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
  memoryUsage: number
  renderTime: number
  bundleSize: number
}

export class PerformanceAnalytics {
  private metrics: Partial<PerformanceMetrics> = {}
  private observers: PerformanceObserver[] = []
  private startTime = performance.now()

  constructor() {
    this.initializeObservers()
    this.measureInitialMetrics()
  }

  private initializeObservers() {
    // Largest Contentful Paint
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        this.metrics.lcp = lastEntry.startTime
      })
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
      this.observers.push(lcpObserver)

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime
        })
      })
      fidObserver.observe({ entryTypes: ["first-input"] })
      this.observers.push(fidObserver)

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        this.metrics.cls = clsValue
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })
      this.observers.push(clsObserver)
    }
  }

  private measureInitialMetrics() {
    // First Contentful Paint
    const paintEntries = performance.getEntriesByType("paint")
    const fcpEntry = paintEntries.find((entry) => entry.name === "first-contentful-paint")
    if (fcpEntry) {
      this.metrics.fcp = fcpEntry.startTime
    }

    // Time to First Byte
    const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
    if (navigationEntries.length > 0) {
      this.metrics.ttfb = navigationEntries[0].responseStart - navigationEntries[0].requestStart
    }

    // Memory usage (if available)
    if ("memory" in performance) {
      const memory = (performance as any).memory
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024 // MB
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics }
  }

  public measureRenderTime(componentName: string): () => void {
    const start = performance.now()
    return () => {
      const end = performance.now()
      console.log(`[Performance] ${componentName} render time: ${(end - start).toFixed(2)}ms`)
    }
  }

  public logCoreWebVitals() {
    const vitals = {
      FCP: this.metrics.fcp,
      LCP: this.metrics.lcp,
      FID: this.metrics.fid,
      CLS: this.metrics.cls,
      TTFB: this.metrics.ttfb,
      Memory: this.metrics.memoryUsage,
    }

    console.group("🚀 Core Web Vitals")
    Object.entries(vitals).forEach(([key, value]) => {
      if (value !== undefined) {
        const status = this.getVitalStatus(key, value)
        console.log(`${key}: ${typeof value === "number" ? value.toFixed(2) : value}ms ${status}`)
      }
    })
    console.groupEnd()
  }

  private getVitalStatus(metric: string, value: number): string {
    const thresholds: Record<string, { good: number; poor: number }> = {
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      FID: { good: 100, poor: 300 },
      CLS: { good: 0.1, poor: 0.25 },
      TTFB: { good: 800, poor: 1800 },
    }

    const threshold = thresholds[metric]
    if (!threshold) return ""

    if (value <= threshold.good) return "🟢"
    if (value <= threshold.poor) return "🟡"
    return "🔴"
  }

  public cleanup() {
    this.observers.forEach((observer) => observer.disconnect())
  }
}

export const performanceAnalytics = new PerformanceAnalytics()
