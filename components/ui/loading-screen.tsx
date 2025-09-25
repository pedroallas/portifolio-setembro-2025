"use client"

import { useEffect, useState } from "react"
import { Code2, Zap, Rocket } from "lucide-react"

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { icon: Code2, text: "Inicializando sistemas..." },
    { icon: Zap, text: "Carregando componentes..." },
    { icon: Rocket, text: "Preparando experiência..." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5

        if (newProgress >= 33 && currentStep === 0) setCurrentStep(1)
        if (newProgress >= 66 && currentStep === 1) setCurrentStep(2)

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }

        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentStep])

  if (!isVisible) return null

  const CurrentIcon = steps[currentStep].icon

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CurrentIcon className="w-10 h-10 text-accent animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl animate-pulse" />
        </div>

        {/* Progress */}
        <div className="space-y-4">
          <div className="text-lg font-semibold text-foreground">{steps[currentStep].text}</div>

          <div className="w-64 h-2 bg-card rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="text-sm text-muted-foreground">{Math.round(progress)}%</div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
