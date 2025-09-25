"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/advanced-utils"

interface CodeExample {
  id: string
  title: string
  description: string
  language: string
  code: string
  complexity: "beginner" | "intermediate" | "advanced" | "expert"
  tags: string[]
}

const codeExamples: CodeExample[] = [
  {
    id: "performance-monitor",
    title: "Performance Analytics System",
    description: "Real-time performance monitoring with Core Web Vitals tracking",
    language: "typescript",
    complexity: "expert",
    tags: ["Performance", "Analytics", "Web Vitals"],
    code: `class PerformanceAnalytics {
  private metrics: Partial<PerformanceMetrics> = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initializeObservers()
    this.measureInitialMetrics()
  }

  private initializeObservers() {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      this.metrics.lcp = lastEntry.startTime
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  public logCoreWebVitals() {
    console.group('🚀 Core Web Vitals')
    // Advanced metrics logging...
  }
}`,
  },
  {
    id: "animation-scheduler",
    title: "Animation Frame Scheduler",
    description: "Efficient animation scheduling system with task management",
    language: "typescript",
    complexity: "advanced",
    tags: ["Animation", "Performance", "Scheduling"],
    code: `export class AnimationScheduler {
  private tasks: Map<string, () => void> = new Map()
  private isRunning = false
  private frameId: number | null = null

  schedule(id: string, task: () => void) {
    this.tasks.set(id, task)
    if (!this.isRunning) {
      this.start()
    }
  }

  private tick = () => {
    this.tasks.forEach((task, id) => {
      try {
        task()
      } catch (error) {
        console.error(\`Task \${id} failed:\`, error)
        this.tasks.delete(id)
      }
    })
    
    if (this.tasks.size > 0) {
      this.frameId = requestAnimationFrame(this.tick)
    }
  }
}`,
  },
  {
    id: "advanced-storage",
    title: "Advanced Local Storage",
    description: "Enhanced storage with compression, expiration, and error handling",
    language: "typescript",
    complexity: "advanced",
    tags: ["Storage", "Caching", "Data Management"],
    code: `export class AdvancedStorage {
  set<T>(key: string, value: T, expirationMs?: number): void {
    const item = {
      value,
      timestamp: Date.now(),
      expiration: expirationMs ? Date.now() + expirationMs : null
    }

    try {
      const serialized = JSON.stringify(item)
      localStorage.setItem(this.prefix + key, serialized)
    } catch (error) {
      console.error('Storage error:', error)
    }
  }

  get<T>(key: string): T | null {
    const item = localStorage.getItem(this.prefix + key)
    if (!item) return null

    const parsed = JSON.parse(item)
    
    if (parsed.expiration && Date.now() > parsed.expiration) {
      this.remove(key)
      return null
    }

    return parsed.value
  }
}`,
  },
]

export function CodeShowcase() {
  const [selectedExample, setSelectedExample] = useState<CodeExample>(codeExamples[0])
  const [isTyping, setIsTyping] = useState(false)
  const [displayedCode, setDisplayedCode] = useState("")

  useEffect(() => {
    setIsTyping(true)
    setDisplayedCode("")

    let currentIndex = 0
    const code = selectedExample.code

    const typeInterval = setInterval(() => {
      if (currentIndex < code.length) {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 20)

    return () => clearInterval(typeInterval)
  }, [selectedExample])

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "beginner":
        return "text-green-500"
      case "intermediate":
        return "text-yellow-500"
      case "advanced":
        return "text-orange-500"
      case "expert":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Code Examples List */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground mb-4">Technical Implementations</h3>
          {codeExamples.map((example) => (
            <Card
              key={example.id}
              className={cn(
                "p-4 cursor-pointer transition-all duration-200 hover:shadow-lg",
                selectedExample.id === example.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50",
              )}
              onClick={() => setSelectedExample(example)}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{example.title}</h4>
                  <span className={cn("text-xs font-medium", getComplexityColor(example.complexity))}>
                    {example.complexity}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{example.description}</p>
                <div className="flex flex-wrap gap-1">
                  {example.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Code Display */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{selectedExample.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedExample.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{selectedExample.language}</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code className="text-foreground font-mono">
                  {displayedCode}
                  {isTyping && <span className="animate-pulse">|</span>}
                </code>
              </pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
