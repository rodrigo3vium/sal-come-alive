const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-forest/80" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-cream mb-4">
          Pronta para <span className="italic">SALtar</span>?
        </h2>
        <p className="font-body text-cream/70 text-lg mb-10 max-w-xl mx-auto">
          Dê o próximo passo na construção da sua marca pessoal. Estamos aqui para caminhar com você.
        </p>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cream text-forest px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-warm-white transition-colors rounded-none"
        >
          Quero Saltar
        </a>
      </div>
    </section>
  );
};

export default CTASection;
