import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Advanced debounce with immediate execution option
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }

    const callNow = immediate && !timeout

    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)

    if (callNow) func(...args)
  }
}

// Advanced throttle with trailing execution
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
  trailing = true,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  let lastFunc: NodeJS.Timeout
  let lastRan: number

  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args)
      lastRan = Date.now()
      inThrottle = true
    } else {
      if (trailing) {
        clearTimeout(lastFunc)
        lastFunc = setTimeout(
          () => {
            if (Date.now() - lastRan >= limit) {
              func.apply(this, args)
              lastRan = Date.now()
            }
          },
          limit - (Date.now() - lastRan),
        )
      }
    }
  }
}

// Intersection Observer with advanced options
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit & {
    once?: boolean
    delay?: number
  } = {},
): IntersectionObserver {
  const { once = false, delay = 0, ...observerOptions } = options

  const wrappedCallback: IntersectionObserverCallback = (entries, observer) => {
    if (delay > 0) {
      setTimeout(() => {
        callback(entries, observer)
        if (once) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target)
            }
          })
        }
      }, delay)
    } else {
      callback(entries, observer)
      if (once) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
        })
      }
    }
  }

  return new IntersectionObserver(wrappedCallback, observerOptions)
}

// Advanced animation frame scheduler
export class AnimationScheduler {
  private tasks: Map<string, () => void> = new Map()
  private isRunning = false
  private frameId: number | null = null

  schedule(id: string, task: () => void) {
    this.tasks.set(id, task)
    if (!this.isRunning) {
      this.start()
    }
  }

  cancel(id: string) {
    this.tasks.delete(id)
    if (this.tasks.size === 0) {
      this.stop()
    }
  }

  private start() {
    this.isRunning = true
    this.tick()
  }

  private stop() {
    this.isRunning = false
    if (this.frameId) {
      cancelAnimationFrame(this.frameId)
      this.frameId = null
    }
  }

  private tick = () => {
    if (!this.isRunning) return

    this.tasks.forEach((task, id) => {
      try {
        task()
      } catch (error) {
        console.error(`Animation task ${id} failed:`, error)
        this.tasks.delete(id)
      }
    })

    if (this.tasks.size > 0) {
      this.frameId = requestAnimationFrame(this.tick)
    } else {
      this.stop()
    }
  }
}

export const animationScheduler = new AnimationScheduler()

// Memory-efficient event emitter
export class EventEmitter<T extends Record<string, any[]>> {
  private events: Map<keyof T, Set<(...args: any[]) => void>> = new Map()

  on<K extends keyof T>(event: K, listener: (...args: T[K]) => void): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set())
    }

    this.events.get(event)!.add(listener)

    // Return unsubscribe function
    return () => this.off(event, listener)
  }

  off<K extends keyof T>(event: K, listener: (...args: T[K]) => void): void {
    const listeners = this.events.get(event)
    if (listeners) {
      listeners.delete(listener)
      if (listeners.size === 0) {
        this.events.delete(event)
      }
    }
  }

  emit<K extends keyof T>(event: K, ...args: T[K]): void {
    const listeners = this.events.get(event)
    if (listeners) {
      listeners.forEach((listener) => {
        try {
          listener(...args)
        } catch (error) {
          console.error(`Event listener error for ${String(event)}:`, error)
        }
      })
    }
  }

  clear(): void {
    this.events.clear()
  }
}

// Advanced local storage with compression and expiration
export class AdvancedStorage {
  private prefix: string

  constructor(prefix = "app_") {
    this.prefix = prefix
  }

  set<T>(key: string, value: T, expirationMs?: number): void {
    const item = {
      value,
      timestamp: Date.now(),
      expiration: expirationMs ? Date.now() + expirationMs : null,
    }

    try {
      const serialized = JSON.stringify(item)
      localStorage.setItem(this.prefix + key, serialized)
    } catch (error) {
      console.error("Failed to save to localStorage:", error)
    }
  }

  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(this.prefix + key)
      if (!item) return null

      const parsed = JSON.parse(item)

      // Check expiration
      if (parsed.expiration && Date.now() > parsed.expiration) {
        this.remove(key)
        return null
      }

      return parsed.value
    } catch (error) {
      console.error("Failed to read from localStorage:", error)
      return null
    }
  }

  remove(key: string): void {
    localStorage.removeItem(this.prefix + key)
  }

  clear(): void {
    const keys = Object.keys(localStorage)
    keys.forEach((key) => {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key)
      }
    })
  }

  size(): number {
    return Object.keys(localStorage).filter((key) => key.startsWith(this.prefix)).length
  }
}

export const storage = new AdvancedStorage("portfolio_")
