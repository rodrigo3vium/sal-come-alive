const QuoteSection = () => {
  return (
    <section id="about" className="bg-warm-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left side - Quote */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              "em um mundo com 8 bilhões<span className="font-bold">,</span> só você é você e isso não é mero acaso."
            </h2>
          </div>

          {/* Right side - Value propositions */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-10">
              Você é única, sua marca também precisa ser. Por isso nós:
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-foreground/20 flex-shrink-0 mt-1" />
                <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                  <span className="font-bold text-foreground">Oferecemos uma jornada personalizada e de autoconhecimento</span> para que você não só pareça, mas também seja verdadeiramente autêntica.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-foreground/20 flex-shrink-0 mt-1" />
                <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                  <span className="font-bold text-foreground">Cultivamos um olhar sensível</span> para que o mundo te veja com o mesmo encanto e a mesma riqueza que nós enxergamos.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-foreground/20 flex-shrink-0 mt-1" />
                <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                  <span className="font-bold text-foreground">Trabalhamos o equilíbrio como ferramenta para o sucesso,</span> transformando em realidade a força de vontade daquelas que nos procuram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
