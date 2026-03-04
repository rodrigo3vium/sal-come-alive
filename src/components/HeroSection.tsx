const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden pb-24 md:pb-32">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpeg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brown/40" />

      <div className="relative z-10 px-8 md:px-16 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
          traduzimos mulheres<br />que marcam o mundo.
        </h1>
        <p className="text-white/80 text-base md:text-lg font-body font-light max-w-2xl leading-relaxed">
          somos a agência boutique de branding pessoal que trabalha a autenticidade através do autoconhecimento, mudando o mundo, uma mulher e uma marca pessoal por vez.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
