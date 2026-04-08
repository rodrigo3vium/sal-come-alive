import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoStudioSal from "@/assets/logo-studio-sal.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto flex items-center py-4 px-6">
        <button onClick={() => scrollTo("hero")} className="mr-12">
          <img src={logoStudioSal} alt="Studio SAL" className="h-8" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 mr-auto">
          <button onClick={() => scrollTo("hero")} className="text-sm tracking-[0.1em] lowercase text-foreground/80 hover:text-foreground transition-colors font-body">
            início
          </button>
          <button onClick={() => { navigate("/sobre-nos"); setIsOpen(false); }} className="text-sm tracking-[0.1em] lowercase text-foreground/80 hover:text-foreground transition-colors font-body">
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
              <div className="fixed left-0 right-0 top-[65px] bg-white border-t border-foreground/10 shadow-lg z-50">
                <div className="container mx-auto grid grid-cols-3 divide-x divide-foreground/15">
                  {/* Consultoria Voo */}
                  <a href="/consultoria-voo" className="p-10 hover:bg-beige/50 transition-colors group">
                    <h3 className="font-serif text-lg text-foreground mb-4">Consultoria Voo</h3>
                    <div className="w-full h-[2px] bg-foreground/50 mb-6" />
                    <p className="font-body text-sm text-foreground/70 leading-relaxed">
                      Um trabalho individual e exclusivo, feito por nós, do início ao fim. Indicada para quem quer ter sua marca pessoal estruturada com profundidade, estratégia e um olhar dedicado só para si.
                    </p>
                  </a>
                  {/* Mentoria SALto */}
                  <a href="/mentoria-salto" className="p-10 hover:bg-beige/50 transition-colors group">
                    <h3 className="font-serif text-lg text-foreground mb-4">Mentoria SALto</h3>
                    <div className="w-full h-[2px] bg-foreground/50 mb-6" />
                    <p className="font-body text-sm text-foreground/70 leading-relaxed">
                      Uma jornada de autoconhecimento e expressão, guiada em grupo e vivida de forma individual. Ideal para quem quer aprender a se comunicar com mais verdade, clareza e consistência — com apoio no processo, mas construindo com as próprias mãos.
                    </p>
                  </a>
                  {/* Cursos */}
                  <div className="p-10 bg-beige/40">
                    <h3 className="font-serif text-lg text-foreground mb-4">Cursos</h3>
                    <div className="w-full h-[2px] bg-foreground/50 mb-6" />
                    <p className="font-body text-sm font-semibold text-foreground/80 mb-1">[EM BREVE]</p>
                    <p className="font-body text-sm text-foreground/70 leading-relaxed">
                      Você poderá aprender tudo sobre o nosso método para estruturar a comunicação que traduz profundamente aquilo que temos de único para nós e para o mundo.
                    </p>
                  </div>
                </div>
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
          <button onClick={() => { navigate("/sobre-nos"); setIsOpen(false); }} className="block w-full text-left text-sm tracking-[0.1em] lowercase text-foreground/80 py-2 font-body">sobre nós</button>
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
