"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submeter para Netlify Forms
      const formElement = e.target as HTMLFormElement;
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(formElement) as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert(
        "Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "pedroallas@professor.to.gov.br",
      href: "mailto:pedroallas@professor.to.gov.br",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pedroallasborges",
      href: "https://linkedin.com/in/pedroallasborges",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pedroallas",
      href: "https://github.com/pedroallas",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Tocantins, Brasil",
      href: null,
    },
    {
      icon: Clock,
      label: "Disponibilidade",
      value: "Segunda a Sexta, 9h-18h",
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              Vamos Conversar
            </h2>
            <div className="absolute -inset-4 bg-accent/5 rounded-lg blur-sm -z-10" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Tem um projeto em mente ou precisa de ajuda com matemática?
            <span className="text-accent font-medium">
              {" "}
              Entre em contato e vamos discutir como posso ajudar
            </span>{" "}
            você a alcançar seus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-accent" />
              Envie uma Mensagem
            </h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Campo obrigatório para Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot para spam protection */}
              <div style={{ display: "none" }}>
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-accent transition-colors duration-300"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border focus:border-accent transition-colors duration-300"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Assunto *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-accent transition-colors duration-300"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-accent resize-none transition-colors duration-300"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className={cn(
                  "w-full transition-all duration-300 relative overflow-hidden group",
                  isSubmitted
                    ? "bg-green-600 hover:bg-green-600"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105"
                )}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting && (
                  <div className="absolute inset-0 bg-accent/20 animate-pulse" />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Mensagem Enviada!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </span>
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-medium">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-accent/5 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Tempo de Resposta
              </h4>
              <p className="text-muted-foreground">
                Respondo a todas as mensagens em até{" "}
                <span className="text-accent font-semibold">24 horas</span>{" "}
                durante dias úteis. Para projetos urgentes, entre em contato
                diretamente via LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
