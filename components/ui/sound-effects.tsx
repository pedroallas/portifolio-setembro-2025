"use client"

import { useEffect, useRef } from "react"

class AudioManager {
  private context: AudioContext | null = null
  private gainNode: GainNode | null = null
  private enabled = false

  constructor() {
    if (typeof window !== "undefined") {
      this.init()
    }
  }

  private async init() {
    try {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)()
      this.gainNode = this.context.createGain()
      this.gainNode.connect(this.context.destination)
      this.gainNode.gain.value = 0.1
      this.enabled = true
    } catch (error) {
      console.warn("Audio context not supported")
    }
  }

  playHover() {
    if (!this.enabled || !this.context || !this.gainNode) return

    const oscillator = this.context.createOscillator()
    const envelope = this.context.createGain()

    oscillator.connect(envelope)
    envelope.connect(this.gainNode)

    oscillator.frequency.setValueAtTime(800, this.context.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(1200, this.context.currentTime + 0.1)

    envelope.gain.setValueAtTime(0, this.context.currentTime)
    envelope.gain.linearRampToValueAtTime(0.05, this.context.currentTime + 0.01)
    envelope.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.1)

    oscillator.start(this.context.currentTime)
    oscillator.stop(this.context.currentTime + 0.1)
  }

  playClick() {
    if (!this.enabled || !this.context || !this.gainNode) return

    const oscillator = this.context.createOscillator()
    const envelope = this.context.createGain()

    oscillator.connect(envelope)
    envelope.connect(this.gainNode)

    oscillator.frequency.setValueAtTime(1000, this.context.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(500, this.context.currentTime + 0.05)

    envelope.gain.setValueAtTime(0, this.context.currentTime)
    envelope.gain.linearRampToValueAtTime(0.1, this.context.currentTime + 0.005)
    envelope.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.05)

    oscillator.start(this.context.currentTime)
    oscillator.stop(this.context.currentTime + 0.05)
  }

  playSuccess() {
    if (!this.enabled || !this.context || !this.gainNode) return

    const frequencies = [523.25, 659.25, 783.99] // C5, E5, G5

    frequencies.forEach((freq, index) => {
      const oscillator = this.context!.createOscillator()
      const envelope = this.context!.createGain()

      oscillator.connect(envelope)
      envelope.connect(this.gainNode!)

      oscillator.frequency.setValueAtTime(freq, this.context!.currentTime + index * 0.1)

      envelope.gain.setValueAtTime(0, this.context!.currentTime + index * 0.1)
      envelope.gain.linearRampToValueAtTime(0.08, this.context!.currentTime + index * 0.1 + 0.01)
      envelope.gain.exponentialRampToValueAtTime(0.001, this.context!.currentTime + index * 0.1 + 0.2)

      oscillator.start(this.context!.currentTime + index * 0.1)
      oscillator.stop(this.context!.currentTime + index * 0.1 + 0.2)
    })
  }
}

export function SoundEffects() {
  const audioManagerRef = useRef<AudioManager | null>(null)

  useEffect(() => {
    audioManagerRef.current = new AudioManager()

    const handleHover = () => audioManagerRef.current?.playHover()
    const handleClick = () => audioManagerRef.current?.playClick()

    // Add sound effects to interactive elements
    const buttons = document.querySelectorAll('button, [role="button"], a')
    const cards = document.querySelectorAll('[class*="card"], [class*="project"]')

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleHover)
      button.addEventListener("click", handleClick)
    })

    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleHover)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleHover)
        button.removeEventListener("click", handleClick)
      })

      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleHover)
      })
    }
  }, [])

  return null
}
