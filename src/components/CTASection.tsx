import ctaSaltar from "@/assets/cta-saltar.jpg";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden"
    >
      {/* Background image */}
      <img
        src={ctaSaltar}
        alt="Pés caminhando na água da praia"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
        {/* Title - centered horizontally, mid-vertical */}
        <h2 className="font-serif text-4xl md:text-6xl text-warm-white text-center mb-16 md:mb-24">
          Pronta para SALtar?
        </h2>

        {/* Button - aligned left */}
        <div className="flex justify-start">
          <a
            href="https://form.respondi.app/ttqcWIpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-warm-white text-warm-white px-8 md:px-10 py-3 md:py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-warm-white hover:text-foreground transition-colors rounded-sm"
          >
            Quero SALtar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
