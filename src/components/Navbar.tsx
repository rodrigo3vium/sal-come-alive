import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoStudioSal from "@/assets/logo-studio-sal.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button onClick={() => scrollTo("hero")}>
          <img src={logoStudioSal} alt="Studio SAL" className="h-8" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("hero")} className="text-sm tracking-[0.1em] lowercase text-foreground/80 hover:text-foreground transition-colors font-body">
            início
          </button>
          <button onClick={() => scrollTo("about")} className="text-sm tracking-[0.1em] lowercase text-foreground/80 hover:text-foreground transition-colors font-body">
            sobre nós
          </button>
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm tracking-[0.1em] lowercase text-foreground/80 hover:text-foreground transition-colors font-body"
            >
              serviços
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-warm-white border border-border rounded-sm shadow-lg py-2 min-w-[200px]">
                <a href="https://studiosal.com.br/consultoria-voo" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-beige transition-colors font-body">
                  Consultoria Voo
                </a>
                <a href="https://studiosal.com.br/mentoria-salto" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-beige transition-colors font-body">
                  Mentoria SALto
                </a>
                <a href="https://studiosal.com.br/contato" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-beige transition-colors font-body">
                  Cursos
                </a>
              </div>
            )}
          </div>
        </div>

        <a
          href="https://form.respondi.app/ttqcWIpe"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex border border-foreground text-foreground px-6 py-2 text-xs tracking-[0.15em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-colors rounded-sm"
        >
          QUERO SALTAR
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-white border-t border-border px-6 pb-6 space-y-4">
          <button onClick={() => scrollTo("hero")} className="block w-full text-left text-sm tracking-[0.1em] lowercase text-foreground/80 py-2 font-body">início</button>
          <button onClick={() => scrollTo("about")} className="block w-full text-left text-sm tracking-[0.1em] lowercase text-foreground/80 py-2 font-body">sobre nós</button>
          <button onClick={() => scrollTo("services")} className="block w-full text-left text-sm tracking-[0.1em] lowercase text-foreground/80 py-2 font-body">serviços</button>
          <a
            href="https://form.respondi.app/ttqcWIpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground text-foreground px-6 py-2 text-xs tracking-[0.15em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-colors rounded-sm"
          >
            QUERO SALTAR
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
