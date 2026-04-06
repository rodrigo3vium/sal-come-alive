import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNos;
