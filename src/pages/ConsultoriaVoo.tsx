import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import consultoriaHero from "@/assets/consultoria-voo-hero.png";
import consultoriaHands from "@/assets/consultoria-hands.jpeg";
import consultoriaGiulia from "@/assets/consultoria-giulia.jpg";
import depoimentoIsabella from "@/assets/depoimento-isabella.png";
import depoimentoNathalia from "@/assets/depoimento-nathalia.jpeg";
import depoimentoLeticia from "@/assets/depoimento-leticia.png";

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

      {/* Boa notícia */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <img
                src={consultoriaHands}
                alt="Mãos"
                className="w-full max-w-md aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
                A boa notícia é que você não está sozinha e tem um jeito de mudar esse cenário.
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                A onda do marketing digital e seus tem quês nos fez acreditar que todas as respostas estavam nas redes sociais e em conteúdos mirabolantes que te limitam a um personagem forçado. A verdade é que isso até pode dar certo, mas dura pouco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marca pessoal */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <img
                src={consultoriaGiulia}
                alt="Giulia Salvatore"
                className="w-full max-w-md aspect-[3/4] object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
                Existe algo muito mais perene do que qualquer trend ou rede social, algo que você jamais vai perder: sua marca pessoal.
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                E é essa marca que vamos potencializar nessa jornada, nesse VOO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="w-16 h-px bg-foreground mb-8" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
            O que dizem as mulheres que já VOARAM
          </h2>
          <p className="font-body text-sm md:text-base text-foreground/70 mb-16 max-w-2xl">
            Ninguém melhor do que quem já viveu essa transformação para falar sobre nosso trabalho.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: depoimentoIsabella, name: "Isabella Franklin", role: "Advogada e Mentora de Mulheres" },
              { image: depoimentoNathalia, name: "Nathalia Bovolon", role: "Empresária e Especialista em HOF" },
              { image: depoimentoLeticia, name: "Letícia Madeira", role: "Empresária e Mentora Executiva" },
            ].map((dep) => (
              <div key={dep.name} className="flex flex-col items-center text-center">
                <img
                  src={dep.image}
                  alt={`Depoimento de ${dep.name}`}
                  className="w-full max-w-sm rounded-lg mb-6"
                />
                <h3 className="font-serif text-lg text-foreground">{dep.name}</h3>
                <p className="font-body text-sm text-foreground/60">{dep.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ConsultoriaVoo;
