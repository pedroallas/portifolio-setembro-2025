import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { AboutSection } from "@/components/about-section"
import { ElegantStats } from "@/components/ui/elegant-stats"
import { TechStack } from "@/components/ui/tech-stack"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AdvancedCursor } from "@/components/ui/advanced-cursor"
import { InteractiveBackground } from "@/components/ui/interactive-background"

export default function Home() {
  return (
    <>
      <AdvancedCursor />
      <InteractiveBackground />

      <main className="min-h-screen bg-background relative">
        <EnhancedNavigation />
        <EnhancedHeroSection />
        <ScrollReveal direction="up" delay={100}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={150}>
          <ElegantStats />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={250}>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300}>
          <ProjectsSection />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={400}>
          <ContactSection />
        </ScrollReveal>
        <Footer />
      </main>
    </>
  )
}
