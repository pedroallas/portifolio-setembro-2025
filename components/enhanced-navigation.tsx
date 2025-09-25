"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Code2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
]

export function EnhancedNavigation() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100

      setScrollProgress(progress)
      setIsScrolled(scrollTop > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-background/20">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent/80 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "nav-blur border-b border-border/50 shadow-lg shadow-background/20" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced logo */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleNavClick("#inicio")}>
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Pedro Allas</span>
            </div>

            {/* Desktop Navigation with enhanced effects */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-accent relative group px-3 py-2 rounded-lg",
                    activeSection === item.href.substring(1)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:bg-accent/5",
                  )}
                >
                  {item.label}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              ))}
            </div>

            {/* Enhanced mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-accent transition-all duration-300 hover:bg-accent/10 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={cn(
                    "w-6 h-6 absolute transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0",
                  )}
                />
                <X
                  className={cn(
                    "w-6 h-6 absolute transition-all duration-300",
                    isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180",
                  )}
                />
              </div>
            </button>
          </div>

          {/* Enhanced mobile menu */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-500 ease-out",
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="py-4 border-t border-border/50 mt-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <ScrollReveal key={item.href} direction="right" delay={index * 50}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "text-left text-sm font-medium transition-all duration-300 hover:text-accent p-3 rounded-lg hover:bg-accent/10",
                        activeSection === item.href.substring(1) ? "text-accent bg-accent/10" : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
