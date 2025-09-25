"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Code2, Database, Cpu, Zap, Globe, Rocket } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlitchText } from "@/components/ui/glitch-text";
import { ParticleSystem } from "@/components/ui/particle-system";

const titles = [
  "Engenheiro de Software",
  "Analista e Desenvolvedor de Sistemas",
  "Professor de Matemática",
];

export function EnhancedHeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [triggerGlitch, setTriggerGlitch] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    let index = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (index < title.length) {
          setDisplayText(title.substring(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTriggerGlitch(true);
          setTimeout(() => {
            setTriggerGlitch(false);
            setTimeout(() => {
              setCurrentTitle((prev) => (prev + 1) % titles.length);
              setDisplayText("");
              setIsTyping(true);
            }, 1000);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }
  }, [currentTitle, isTyping]);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <ParticleSystem />

      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" />
      </div>

      {/* Enhanced floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 w-8 h-8 text-accent/40 animate-float-slow" />
        <Database className="absolute top-40 right-20 w-6 h-6 text-accent/30 animate-float-delayed" />
        <Cpu className="absolute bottom-40 left-20 w-7 h-7 text-accent/35 animate-float-reverse" />
        <Zap className="absolute top-60 left-1/3 w-5 h-5 text-accent/25 animate-float-slow" />
        <Globe className="absolute bottom-60 right-1/3 w-6 h-6 text-accent/30 animate-float-delayed" />
        <Rocket className="absolute top-1/3 right-10 w-7 h-7 text-accent/35 animate-float-reverse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Photo with advanced effects */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative float-animation">
              {/* Multiple animated rings */}
              <div className="absolute inset-0 rounded-full border border-accent/40 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-pulse" />
              <div className="absolute inset-[-10px] rounded-full border border-accent/20 animate-spin-slow" />

              <div className="w-80 h-80 rounded-full border-4 border-accent overflow-hidden relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 via-transparent to-accent/20" />
                <Image
                  src="/professional-headshot-of-pedro-allas--software-eng.jpg"
                  alt="Pedro Allas"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Enhanced tech skill indicators */}
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-accent/50 hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-accent/80 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-accent/40 hover:scale-110 transition-transform duration-300">
                  <Database className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="absolute top-1/4 -right-2 w-10 h-10 bg-accent/70 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30 hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl -z-10 animate-pulse" />

              {/* Advanced orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-6 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 shadow-lg shadow-accent/50" />
                <div className="absolute top-1/2 -right-6 w-2 h-2 bg-accent/80 rounded-full transform -translate-y-1/2 shadow-md shadow-accent/40" />
                <div className="absolute -bottom-6 left-1/2 w-3 h-3 bg-accent/90 rounded-full transform -translate-x-1/2 shadow-lg shadow-accent/50" />
                <div className="absolute top-1/2 -left-6 w-2 h-2 bg-accent/70 rounded-full transform -translate-y-1/2 shadow-md shadow-accent/40" />
              </div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6 leading-tight relative z-10">
                <GlitchText text="Pedro Allas" trigger={triggerGlitch} />
              </h1>
              <div className="absolute -inset-6 bg-gradient-to-r from-accent/15 via-transparent to-accent/15 blur-2xl -z-10" />
            </div>

            <div className="h-20 mb-8 flex items-center justify-center lg:justify-start">
              <div className="relative">
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  <span className="typewriter inline-block font-medium text-accent">
                    {displayText}
                  </span>
                </p>
                <div className="absolute -inset-3 bg-accent/10 rounded-lg blur-md -z-10" />
              </div>
            </div>

            <div className="relative">
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                Transformando ideias em{" "}
                <span className="text-accent font-medium">
                  soluções digitais inovadoras
                </span>{" "}
                através de código limpo, arquitetura sólida e experiências
                excepcionais que impactam milhares de usuários.
              </p>
            </div>

            {/* Enhanced stats with animations */}
            <div className="grid grid-cols-3 gap-4 py-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-xs text-muted-foreground font-medium">
                  Anos
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-xs text-muted-foreground font-medium">
                  Projetos
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground font-medium">
                  Dedicação
                </div>
              </div>
            </div>

            {/* Enhanced buttons with magnetic effect */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <MagneticButton
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full shadow-lg shadow-accent/25"
                onClick={() =>
                  document
                    .getElementById("projetos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Projetos
              </MagneticButton>
              <MagneticButton
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold px-8 py-3 rounded-full"
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Fale Comigo
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
