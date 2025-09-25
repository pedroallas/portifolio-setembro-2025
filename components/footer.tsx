import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Pedro Allas. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/pedroallasborges"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-accent" />
            </a>
            <a
              href="https://github.com/pedroallas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Github className="w-4 h-4 text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
