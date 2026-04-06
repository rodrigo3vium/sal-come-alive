import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutBeach from "@/assets/about-beach.jpeg";
import aboutCoffee from "@/assets/about-coffee.jpeg";
import reencontroIcon from "@/assets/reencontro-icon.png";
import conexaoIcon from "@/assets/conexao-icon.png";

const SobreNos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-foreground/70">
        <div className="text-center px-6">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide lowercase">
            tudo começa com um <span className="font-normal">SAL</span>to
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNos;
