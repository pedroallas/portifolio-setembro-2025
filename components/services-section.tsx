"use client"

import { Code, BarChart3, GraduationCap, Zap, Shield, Rocket } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Software Sob Medida",
    description:
      "Criação de aplicações web e desktop personalizadas, desde o conceito e design até a implementação e o deploy, focando em performance e usabilidade.",
    features: ["Arquitetura Escalável", "Clean Code", "Testes Automatizados", "CI/CD"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: BarChart3,
    title: "Análise e Otimização de Sistemas",
    description:
      "Consultoria para análise de sistemas existentes, identificando gargalos, propondo melhorias de arquitetura e otimizando a performance para garantir escalabilidade.",
    features: ["Auditoria de Código", "Otimização de Performance", "Refatoração", "Monitoramento"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: GraduationCap,
    title: "Aulas e Mentoria em Matemática",
    description:
      "Aulas particulares e mentoria para estudantes e profissionais que buscam fortalecer sua base em matemática e lógica, aplicando conceitos em contextos práticos e tecnológicos.",
    features: ["Matemática Aplicada", "Algoritmos", "Estatística", "Lógica Computacional"],
    color: "from-purple-500/20 to-pink-500/20",
  },
]

const additionalServices = [
  { icon: Zap, title: "Consultoria Técnica", description: "Orientação estratégica em tecnologia" },
  { icon: Shield, title: "Segurança de Aplicações", description: "Auditoria e implementação de segurança" },
  { icon: Rocket, title: "MVP Development", description: "Desenvolvimento rápido de protótipos" },
]

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Como Posso Ajudar</h2>
            <div className="absolute -inset-4 bg-accent/5 rounded-lg blur-sm -z-10" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Ofereço soluções completas em desenvolvimento de software, otimização de sistemas e educação matemática,
            <span className="text-accent font-medium"> sempre com foco em excelência e resultados mensuráveis</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-500 relative overflow-hidden h-full">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      service.color,
                    )}
                  />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-4 text-balance group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-pretty mb-6">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Outros Serviços</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
