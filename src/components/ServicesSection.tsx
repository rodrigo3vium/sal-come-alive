const services = [
  {
    title: "Consultoria Voo",
    description: "Uma imersão estratégica para alinhar sua marca pessoal com seus objetivos. Ideal para quem busca clareza e direcionamento.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Mentoria SALto",
    description: "Acompanhamento contínuo para construir e fortalecer seu posicionamento com consistência, profundidade e autenticidade.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cursos",
    description: "Conteúdos práticos e transformadores para quem quer aprender a se posicionar com estratégia e verdade.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">O que fazemos</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">Serviços</h2>
          <div className="mt-6 w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-4">
                <span className="text-xs tracking-[0.2em] uppercase text-forest font-body border-b border-forest/30 pb-1 group-hover:border-forest transition-colors">
                  Saiba mais
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
