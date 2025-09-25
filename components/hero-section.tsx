"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown, Code2, Database, Cpu } from "lucide-react";

const titles = [
  "Engenheiro de Software",
  "Analista e Desenvolvedor de Sistemas",
  "Professor de Matemática",
];

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

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
          setTimeout(() => {
            setIsTyping(false);
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
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 w-8 h-8 text-accent/30 animate-float-slow" />
        <Database className="absolute top-40 right-20 w-6 h-6 text-accent/20 animate-float-delayed" />
        <Cpu className="absolute bottom-40 left-20 w-7 h-7 text-accent/25 animate-float-reverse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced Photo with tech elements */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative float-animation">
              <div className="absolute inset-0 rounded-full border border-accent/30 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse" />

              <div className="w-80 h-80 rounded-full border-4 border-accent overflow-hidden relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent" />
                <Image
                  src="/professional-headshot-of-pedro-allas--software-eng.jpg"
                  alt="Pedro Allas"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover relative z-10"
                />

                {/* Tech skill indicators around the photo */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Code2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-accent/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Database className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>

              <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl -z-10" />

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-4 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2" />
                <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-accent/70 rounded-full transform -translate-y-1/2" />
                <div className="absolute -bottom-4 left-1/2 w-2 h-2 bg-accent/80 rounded-full transform -translate-x-1/2" />
                <div className="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-accent/60 rounded-full transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-6 leading-tight relative z-10">
                Pedro Allas
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 blur-xl -z-10" />
            </div>

            <div className="h-20 mb-8 flex items-center justify-center lg:justify-start">
              <div className="relative">
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  <span className="typewriter inline-block font-medium">
                    {displayText}
                  </span>
                </p>
                <div className="absolute -inset-2 bg-accent/5 rounded-lg blur-sm -z-10" />
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

            <div className="grid grid-cols-3 gap-4 py-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/20">
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-xs text-muted-foreground">Anos</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/20">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-xs text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/20">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Dedicação</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 relative overflow-hidden group"
                onClick={() =>
                  document
                    .getElementById("projetos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">Ver Projetos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">Fale Comigo</span>
                <div className="absolute inset-0 bg-accent/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
            </div>
            <ChevronDown className="w-4 h-4 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
