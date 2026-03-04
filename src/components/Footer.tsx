import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-serif text-lg tracking-[0.3em] text-cream">STUDIO SAL</p>
            <p className="font-body text-xs text-cream/50 mt-2 tracking-wide">Personal Branding Boutique</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/studiosal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contato@studiosal.com.br"
              className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
            >
              contato@studiosal.com.br
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Studio SAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
