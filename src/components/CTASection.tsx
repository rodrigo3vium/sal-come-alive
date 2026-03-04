const CTASection = () => {
  return (
    <section
      id="cta"
      className="bg-warm-white py-28 md:py-36"
    >
      <div className="container mx-auto px-6 text-center">
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
    </section>
  );
};

export default CTASection;
