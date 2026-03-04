const QuoteSection = () => {
  return (
    <section id="about" className="bg-forest py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-cream/50 text-sm tracking-[0.3em] uppercase mb-6 font-body">Por que existimos</p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-cream leading-tight">
            em um mundo com 8 bilhões,
            <br />
            <span className="italic text-gold">só você é você.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-12 text-cream/80">
          <div className="space-y-4">
            <div className="w-8 h-px bg-gold" />
            <h3 className="font-serif text-lg text-cream">Jornada personalizada</h3>
            <p className="font-body text-sm leading-relaxed">
              Cada mulher tem uma história única. Criamos estratégias sob medida para traduzir sua essência em uma marca pessoal poderosa.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-8 h-px bg-gold" />
            <h3 className="font-serif text-lg text-cream">Olhar sensível</h3>
            <p className="font-body text-sm leading-relaxed">
              Unimos sensibilidade e estratégia para criar posicionamentos que respeitam quem você é e potencializam onde você quer chegar.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-8 h-px bg-gold" />
            <h3 className="font-serif text-lg text-cream">Equilíbrio como ferramenta</h3>
            <p className="font-body text-sm leading-relaxed">
              Acreditamos que sucesso profissional e bem-estar caminham juntos. Seu brilho não precisa custar sua paz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
