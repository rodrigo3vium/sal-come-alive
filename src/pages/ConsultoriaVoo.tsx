import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import consultoriaHero from "@/assets/consultoria-voo-hero.png";

const ConsultoriaVoo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <div className="h-[50vh] md:h-screen">
          <img
            src={consultoriaHero}
            alt="Mulher na praia"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0 bg-warm-white">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-snug mb-8 lowercase">
            traduza sua autenticidade para o mundo e tenha a marca com o valor que você merece.
          </h1>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg mb-10">
            Nessa jornada, nosso time trabalha exclusivamente para dar vida à marca que traduz tudo aquilo que muitas vezes nem você enxerga sobre si – com estratégia, autenticidade e leveza.
          </p>
          <div>
            <a
              href="https://form.respondi.app/ttqcWIpe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brown text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-body hover:bg-brown/90 transition-colors"
            >
              QUERO VOAR
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ConsultoriaVoo;
