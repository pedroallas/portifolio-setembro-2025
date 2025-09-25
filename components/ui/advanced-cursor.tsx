"use client"

import { useEffect, useState } from "react"

export function AdvancedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === "pointer")
    }

    const hideCursor = () => setIsHidden(true)
    const showCursor = () => setIsHidden(false)

    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseleave", hideCursor)
    document.addEventListener("mouseenter", showCursor)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseleave", hideCursor)
      document.removeEventListener("mouseenter", showCursor)
    }
  }, [])

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-50 transition-all duration-150 ease-out ${
          isHidden ? "opacity-0 scale-0" : "opacity-100 scale-100"
        } ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 w-8 h-8 border border-accent/50 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHidden ? "opacity-0 scale-0" : "opacity-100 scale-100"
        } ${isPointer ? "scale-200" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
    </>
  )
}
