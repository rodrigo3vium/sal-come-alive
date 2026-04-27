import ctaSaltar from "@/assets/cta-saltar.jpg";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="bg-warm-white py-20 md:py-28 overflow-hidden"
    >
      {/* Desktop: Image bleeding left, card bleeding right */}
      <div className="hidden md:block relative px-6 lg:px-12">
        <div className="w-[72%] ml-auto bg-beige rounded-sm py-16 lg:py-20 pl-[26%] pr-10 lg:pr-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">
            Pronta para SALtar?
          </h2>
          <a
            href="https://form.respondi.app/ttqcWIpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground text-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-colors rounded-sm"
          >
            Quero SALtar agora
          </a>
        </div>
        <img
          src={ctaSaltar}
          alt="Pés caminhando na água da praia"
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-[42%] aspect-[16/10] object-cover z-10 rounded-sm"
        />
      </div>

      {/* Mobile: Stacked */}
      <div className="md:hidden container mx-auto px-6">
        <img
          src={ctaSaltar}
          alt="Pés caminhando na água da praia"
          className="w-full aspect-[16/10] object-cover rounded-sm mb-[-3rem] relative z-10"
        />
        <div className="bg-beige rounded-sm pt-20 pb-12 px-6 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-8">
            Pronta para SALtar?
          </h2>
          <a
            href="https://form.respondi.app/ttqcWIpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-sm tracking-[0.15em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-colors rounded-sm"
          >
            Quero SALtar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
