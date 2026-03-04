import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <button onClick={() => scrollTo("hero")} className="font-serif text-xl tracking-[0.3em] text-primary-foreground">
          STUDIO SAL
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("hero")} className="text-sm tracking-[0.15em] uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Início
          </button>
          <button onClick={() => scrollTo("about")} className="text-sm tracking-[0.15em] uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Sobre Nós
          </button>
          <button onClick={() => scrollTo("services")} className="text-sm tracking-[0.15em] uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollTo("faq")} className="text-sm tracking-[0.15em] uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            FAQ
          </button>
        </div>

        <Button
          onClick={() => scrollTo("cta")}
          className="hidden md:inline-flex bg-cream text-forest hover:bg-warm-white tracking-[0.15em] text-xs uppercase font-body rounded-none px-6"
        >
          Quero Saltar
        </Button>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-forest border-t border-forest-light px-6 pb-6 space-y-4">
          <button onClick={() => scrollTo("hero")} className="block w-full text-left text-sm tracking-[0.15em] uppercase text-primary-foreground/80 py-2">Início</button>
          <button onClick={() => scrollTo("about")} className="block w-full text-left text-sm tracking-[0.15em] uppercase text-primary-foreground/80 py-2">Sobre Nós</button>
          <button onClick={() => scrollTo("services")} className="block w-full text-left text-sm tracking-[0.15em] uppercase text-primary-foreground/80 py-2">Serviços</button>
          <button onClick={() => scrollTo("faq")} className="block w-full text-left text-sm tracking-[0.15em] uppercase text-primary-foreground/80 py-2">FAQ</button>
          <Button onClick={() => scrollTo("cta")} className="bg-cream text-forest hover:bg-warm-white tracking-[0.15em] text-xs uppercase font-body rounded-none px-6 w-full">
            Quero Saltar
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
