"use client";

import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Github,
  Star,
  TrendingUp,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MorphingCard } from "@/components/ui/morphing-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects = [
  {
    title: "AgendaTech - Gestão Escolar",
    description:
      "Solução completa para gerenciamento de agendamentos de recursos em instituições educacionais com interface intuitiva e funcionalidades avançadas.",
    image: "/agenda-tech-escolar.jpg",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    github:
      "https://github.com/pedroallas/agendatechescolar-em-producao-gni-september-2025",
    demo: "https://agendatechescolar-production.vercel.app/",
    featured: true,
    stats: { schools: "50+", bookings: "10K+" },
  },
  {
    title: "Duallas Donalds - Sistema de Pedidos",
    description:
      "Sistema de gerenciamento de pedidos de restaurante com autenticação, cardápio interativo, carrinho de compras e histórico de pedidos completo.",
    image: "/duallas-donalds-project.jpg",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/pedroallas/pad-port-donalds",
    demo: "https://pad-port-donalds-vkts.vercel.app/duallas-donalds",
    featured: true,
    stats: { orders: "500+", uptime: "99.9%" },
  },
  {
    title: "Fundamentos da Fé - Site Educacional",
    description:
      "Site educacional moderno e interativo para estudos bíblicos com módulos estruturados, material em PDF e acompanhamento de progresso.",
    image: "/fundamentos-da-fe-project.jpg",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Radix UI"],
    github: "https://github.com/pedroallas/fundamentosdafe-comunidade",
    demo: "https://fundamentosdafe.netlify.app/",
    featured: false,
    stats: { modules: "12+", students: "200+" },
  },
  {
    title: "E-commerce Moderno",
    description:
      "Plataforma de e-commerce com carrinho inteligente, pagamentos seguros e experiência mobile-first.",
    image: "/placeholder.jpg",
    tags: ["Next.js", "Stripe", "Tailwind", "Supabase"],
    github: "#",
    demo: "#",
    featured: false,
    stats: { sales: "500K+", conversion: "4.2%" },
  },
  {
    title: "Sistema de Monitoramento IoT",
    description:
      "Dashboard em tempo real para monitoramento de sensores IoT com alertas inteligentes.",
    image: "/placeholder.jpg",
    tags: ["Vue.js", "Express", "InfluxDB", "MQTT"],
    github: "#",
    demo: "#",
    featured: false,
    stats: { sensors: "1K+", uptime: "99.5%" },
  },
  {
    title: "App de Gestão Financeira",
    description:
      "Aplicativo móvel para controle financeiro pessoal com análise de gastos e metas.",
    image: "/placeholder.jpg",
    tags: ["Flutter", "Firebase", "Chart.js", "Node.js"],
    github: "#",
    demo: null,
    featured: false,
    stats: { users: "25K+", rating: "4.8★" },
  },
  {
    title: "Plataforma de Learning Management",
    description:
      "LMS completo com videoaulas, exercícios interativos e sistema de avaliações automáticas.",
    image: "/placeholder.jpg",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
    featured: false,
    stats: { students: "15K+", courses: "200+" },
  },
  {
    title: "Sistema de Agendamento",
    description:
      "Plataforma para agendamento online com calendário inteligente e notificações automáticas.",
    image: "/placeholder.jpg",
    tags: ["Angular", "Spring Boot", "MySQL", "Redis"],
    github: "#",
    demo: "#",
    featured: false,
    stats: { bookings: "100K+", efficiency: "98%" },
  },
  {
    title: "Marketplace de Serviços",
    description:
      "Plataforma que conecta prestadores de serviços com clientes, incluindo sistema de avaliações.",
    image: "/placeholder.jpg",
    tags: ["React", "GraphQL", "PostgreSQL", "AWS"],
    github: "#",
    demo: null,
    featured: false,
    stats: { providers: "5K+", matches: "50K+" },
  },
];

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 3);

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projetos" className="py-20 bg-card relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              {showAllProjects ? "Todos os Projetos" : "Projetos em Destaque"}
            </h2>
            <div className="absolute -inset-4 bg-accent/10 rounded-lg blur-xl -z-10" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {showAllProjects
              ? "Portfolio completo com projetos desenvolvidos em diferentes tecnologias e áreas de atuação."
              : "Uma seleção dos meus trabalhos mais recentes, demonstrando expertise em diferentes tecnologias e domínios."}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <MorphingCard
                className={cn(
                  "bg-background rounded-xl overflow-hidden border border-border group h-full",
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                )}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Destaque
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-accent px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Popular
                  </div>

                  <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xl font-bold text-accent">
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-balance group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="skill-tag px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 items-center">
                    <MagneticButton
                      size="sm"
                      variant="outline"
                      className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent min-w-[100px] px-4"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">GitHub</span>
                    </MagneticButton>
                    {project.demo && (
                      <MagneticButton
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25 min-w-[90px] px-4"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="whitespace-nowrap">Demo</span>
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </MorphingCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={600} className="text-center mt-12">
          <MagneticButton
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent px-8 py-3 rounded-full min-w-[220px]"
            onClick={handleToggleProjects}
          >
            {showAllProjects ? (
              <ChevronUp className="w-5 h-5 flex-shrink-0" />
            ) : (
              <Github className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="whitespace-nowrap">
              {showAllProjects ? "Mostrar Menos" : "Ver Todos os Projetos"}
            </span>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
