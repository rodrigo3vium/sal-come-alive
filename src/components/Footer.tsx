import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-serif text-lg tracking-[0.15em] text-primary-foreground">STUDIO <span className="italic">SAL</span></p>
            <p className="font-body text-xs text-primary-foreground/50 mt-2 tracking-wide">Agência Boutique de Branding Pessoal</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/studiosal_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:atendimento@studiosal.com.br"
              className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              atendimento@studiosal.com.br
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Studio SAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
