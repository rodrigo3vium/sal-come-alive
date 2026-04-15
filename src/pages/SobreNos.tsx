import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutBeach from "@/assets/about-beach.jpeg";
import aboutCoffee from "@/assets/about-coffee.jpeg";
import reencontroIcon from "@/assets/reencontro-icon.png";
import conexaoIcon from "@/assets/conexao-icon.png";
import aboutShell from "@/assets/about-shell.jpeg";
import olharsensivelIcon from "@/assets/olharsensivel-icon.png";
import aboutHandWater from "@/assets/about-hand-water.jpeg";
import evolucaoIcon from "@/assets/evolucao-icon.png";
import aboutHero from "@/assets/about-hero.jpeg";
import corpoMenteAlmaIcon from "@/assets/corpo-mente-alma-icon.png";
import aboutLeaves from "@/assets/about-leaves.jpg";
import aboutShadowHands from "@/assets/about-shadow-hands.jpeg";
import logoComFrase from "@/assets/logo-com-frase.png";

const SobreNos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src={aboutHero}
          alt="Mulher na praia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-wide">
            tudo começa com um <span className="uppercase font-normal">sal</span>to
          </h1>
          <p className="font-body text-sm md:text-base text-white/80 mt-6 italic">
            Ou, pelo menos, a nossa história.
          </p>
        </div>
      </section>

      {/* Second Section - do salto, surge um propósito */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Image */}
            <div>
              <img
                src={aboutBeach}
                alt="Ondas na praia"
                className="w-full max-w-md aspect-[4/5] object-cover"
              />
            </div>

            {/* Right - Text */}
            <div>
              <img
                src={reencontroIcon}
                alt="Ícone reencontro"
                className="w-16 h-16 mb-8"
              />
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 lowercase">
                do salto, surge um propósito
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                Foi com um salto de fé que a nossa fundadora, Giulia Salvatore, abriu mão de seu emprego e do que era seguro para mergulhar em uma jornada de descobertas e de propósito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - do propósito, uma profissão */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Text */}
            <div className="md:text-right">
              <img
                src={conexaoIcon}
                alt="Ícone conexão"
                className="w-16 h-16 mb-8 md:ml-auto"
              />
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 lowercase">
                do propósito, uma profissão.
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed md:ml-auto max-w-lg">
                Convidada por mulheres próximas, ela começou de forma espontânea a sua carreira como estrategista de marcas pessoais.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-end">
              <img
                src={aboutCoffee}
                alt="Café e livro"
                className="w-full max-w-md aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section - o olhar para uma dor comum */}
      <section className="bg-warm-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Text */}
            <div>
              <img
                src={olharsensivelIcon}
                alt="Ícone olhar sensível"
                className="w-16 h-16 mb-8"
              />
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 lowercase">
                o olhar para uma dor comum
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                Durante a sua jornada, Giu percebeu a existência de uma dor, comum a muitas mulheres
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-end">
              <img
                src={aboutShell}
                alt="Mulher com concha"
                className="w-full max-w-lg aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth Section - da dor, fez-se o sonho */}
      <section className="bg-warm-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Image */}
            <div>
              <img
                src={aboutHandWater}
                alt="Mão na água"
                className="w-full max-w-md aspect-[4/5] object-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="md:text-right">
              <img
                src={evolucaoIcon}
                alt="Ícone evolução"
                className="w-16 h-16 mb-8 md:ml-auto"
              />
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 lowercase">
                da dor, fez-se o sonho
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed md:ml-auto max-w-lg">
                Da dor percebida, veio a motivação para criar um projeto capaz de trazer autoconhecimento e confiança para que as mulheres possam reconhecer, e comunicar para o mundo, quem verdadeiramente são.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Sixth Section - alma, mente e corpo */}
      <section className="bg-warm-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Image */}
            <div>
              <img
                src={aboutHero}
                alt="Mulher na praia"
                className="w-full max-w-md aspect-[4/5] object-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="md:text-right">
              <img
                src={corpoMenteAlmaIcon}
                alt="Alma, mente e corpo"
                className="w-40 h-auto mb-8 md:ml-auto"
              />
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 lowercase">
                alma, mente e corpo
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed md:ml-auto max-w-lg">
                nossos 3 pilares fundamentais alinhados em uma única jornada...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh Section - assim, nasce a marca */}
      <section className="bg-warm-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Text */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 lowercase">
                assim, nasce a marca
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                Studio Sal, agência boutique de branding pessoal que promove um reencontro com a essência e a autenticidade. Mudando o mundo uma mulher e uma marca pessoal por vez.
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-end">
              <img
                src={aboutLeaves}
                alt="Folhas verdes"
                className="w-full max-w-sm aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eighth Section - logo com imagem */}
      <section className="bg-warm-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left - Image */}
            <div>
              <img
                src={aboutShadowHands}
                alt="Sombra de mãos"
                className="w-full max-w-lg aspect-[3/2] object-cover"
              />
            </div>

            {/* Right - Logo */}
            <div className="flex justify-center md:justify-end">
              <img
                src={logoComFrase}
                alt="Studio Sal - traduzimos mulheres que marcam o mundo"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-warm-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-10 lowercase">
            chegou a sua vez de <span className="uppercase">SAL</span>tar!
          </h2>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground/40 px-8 py-3 font-body text-sm text-foreground hover:bg-foreground hover:text-white transition-colors lowercase"
          >
            quero SALtar agora
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNos;
