"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Cloud,
  Users,
  Globe,
  Award,
  BookOpen,
  Target,
} from "lucide-react";
import { useState, useEffect } from "react";

const skills = [
  {
    category: "Linguagens",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C#", "SQL"],
    icon: Code,
    level: 95,
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Django", "FastAPI", ".NET"],
    icon: Globe,
    level: 90,
  },
  {
    category: "Bancos de Dados",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL Server", "MySQL"],
    icon: Database,
    level: 88,
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Terraform"],
    icon: Cloud,
    level: 85,
  },
  {
    category: "Metodologias",
    items: ["Scrum", "Agile", "TDD", "Clean Architecture", "DDD"],
    icon: Users,
    level: 92,
  },
];

const achievements = [
  { number: "5+", label: "Anos de Experiência", icon: Target },
  { number: "50+", label: "Projetos Concluídos", icon: Code },
  { number: "100+", label: "Alunos Ensinados", icon: BookOpen },
  { number: "8", label: "Certificações", icon: Award },
];

const certifications = [
  "AWS Solutions Architect",
  "Microsoft Azure Developer",
  "Google Cloud Professional",
  "Scrum Master Certified",
  "MongoDB Developer",
];

export function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [visibleAchievements, setVisibleAchievements] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleAchievements(achievements.map(() => true));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="sobre" className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Enhanced About text */}
          <div className="space-y-8">
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-8">
                Sobre Mim
              </h2>
              <div className="absolute -inset-2 bg-accent/5 rounded-lg blur-sm -z-10" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Olá, eu sou o{" "}
                <span className="text-accent font-semibold">Pedro Allas</span>.
                Minha carreira é construída sobre dois pilares que se fortalecem
                mutuamente: a lógica da engenharia de software e a clareza do
                ensino da matemática.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Com{" "}
                <span className="text-accent font-semibold">
                  mais de 5 anos de experiência
                </span>{" "}
                no mercado de tecnologia, minha principal motivação é
                transformar problemas complexos em
                <span className="text-foreground font-medium">
                  {" "}
                  software robusto, escalável e, acima de tudo, humano
                </span>
                . Trabalho em todo o ciclo de desenvolvimento, desde a concepção
                de arquiteturas modernas e soluções cloud-native até o código
                full-stack que impacta milhares de usuários.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Mas a tecnologia, por si só, não é tudo. Minha jornada como{" "}
                <span className="text-foreground font-medium">
                  Professor de Matemática
                </span>{" "}
                me ensinou a lição mais valiosa da minha carreira: a solução
                mais brilhante é inútil se não puder ser compreendida.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Essa filosofia guia meu trabalho até hoje. Ela se traduz em{" "}
                <span className="text-foreground font-medium">
                  código limpo e bem documentado
                </span>
                , em uma comunicação transparente com a equipe e na capacidade
                de mentorar outros desenvolvedores, transformando conceitos
                difíceis em conhecimento prático.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Acredito que a{" "}
                <span className="text-accent font-semibold">
                  melhor tecnologia é aquela que empodera pessoas
                </span>
                , e isso começa com clareza e colaboração.
              </p>

              <p className="text-lg text-foreground leading-relaxed text-pretty font-medium">
                Seja bem-vindo ao meu portfólio.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "text-center p-6 bg-background rounded-xl border border-border relative overflow-hidden group transition-all duration-500",
                      visibleAchievements[index]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <IconComponent className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="text-3xl font-bold text-accent mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Certificações
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Enhanced Skills grid */}
          <div>
            <div className="relative mb-8">
              <h3 className="text-2xl font-semibold text-foreground">
                Habilidades & Tecnologias
              </h3>
              <div className="absolute -inset-2 bg-accent/5 rounded-lg blur-sm -z-10" />
            </div>

            <div className="grid gap-6">
              {skills.map((skillGroup, index) => {
                const IconComponent = skillGroup.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-xl p-6 border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 cursor-pointer group relative overflow-hidden"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                              hoveredSkill === index
                                ? "bg-accent text-accent-foreground scale-110"
                                : "bg-accent/10"
                            )}
                          >
                            <IconComponent
                              className={cn(
                                "w-5 h-5 transition-colors duration-300",
                                hoveredSkill === index
                                  ? "text-accent-foreground"
                                  : "text-accent"
                              )}
                            />
                          </div>
                          <h4 className="font-semibold text-foreground">
                            {skillGroup.category}
                          </h4>
                        </div>

                        <div className="text-sm text-accent font-medium">
                          {skillGroup.level}%
                        </div>
                      </div>

                      <div className="w-full bg-border rounded-full h-2 mb-4 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width:
                              hoveredSkill === index
                                ? `${skillGroup.level}%`
                                : "0%",
                          }}
                        />
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="skill-tag px-3 py-1.5 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
