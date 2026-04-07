import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import consultoriaHero from "@/assets/consultoria-voo-hero.png";

const talvezVoceItems = [
  {
    title: "SEJA UMA EXCELENTE PROFISSIONAL",
    description: "Mas sente que só quem conhece seu trabalho ao vivo sabe disso. Na internet é mais difícil mostrar.",
  },
  {
    title: "SINTA QUE TEM ALGO ESPECIAL PARA DAR AO MUNDO",
    description: 'Mas não consiga nomear e nem "empacotar" de um jeito que os outros também sintam.',
  },
  {
    title: "ESTEJA SONHANDO COM VOOS MAIORES",
    description: "Mas retrai com insegurança de não saber se sobreviveria sozinha a eles.",
  },
  {
    title: "TENHA ANOS DE EXPERIÊNCIA",
    description: "E veja pessoas com metade da sua ganhando o dobro porque se comunicam melhor (principalmente no digital).",
  },
];

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

      {/* Talvez você... */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center tracking-[0.3em] uppercase mb-12">
            talvez você...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {talvezVoceItems.map((item) => (
              <div key={item.title} className="bg-beige/60 p-8 flex flex-col">
                <Check className="text-foreground/60 mb-4" size={20} strokeWidth={1.5} />
                <h3 className="font-body text-sm font-bold tracking-[0.05em] uppercase text-foreground mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default ConsultoriaVoo;
