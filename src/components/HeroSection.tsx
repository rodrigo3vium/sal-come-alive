const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-cream/70 text-sm tracking-[0.3em] uppercase mb-8 font-body">
          Personal Branding Boutique
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-8 italic">
          traduzimos mulheres que marcam o mundo.
        </h1>
        <p className="text-cream/80 text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed">
          Somos uma boutique de personal branding dedicada a posicionar mulheres extraordinárias no mercado com autenticidade e estratégia.
        </p>
        <div className="mt-12">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-cream/40 text-cream px-8 py-3 text-sm tracking-[0.2em] uppercase font-body hover:bg-cream/10 transition-colors rounded-none"
          >
            Descubra mais
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-cream/30 mx-auto mb-2" />
        <p className="text-cream/40 text-xs tracking-[0.2em] uppercase font-body">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
