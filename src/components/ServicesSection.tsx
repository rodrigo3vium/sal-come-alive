const services = [
  {
    title: "Consultoria Voo",
    description: "Um trabalho individual e exclusivo, feito por nós, do início ao fim. Indicada para quem pode investir em ter sua marca pessoal estruturada com profundidade, estratégia e um olhar dedicado só para si.",
    image: "/images/consultoria-voo.jpeg",
    link: "https://studiosal.com.br/consultoria-voo",
  },
  {
    title: "Mentoria SALto",
    description: "Uma jornada guiada em grupo, mas vivida de forma individual. Ideal para quem quer aprender a se comunicar com mais verdade, clareza e consistência — com apoio no processo, mas construindo com as próprias mãos.",
    image: "/images/mentoria-salto.jpeg",
    link: "https://studiosal.com.br/mentoria-salto",
  },
  {
    title: "Cursos",
    description: "Você poderá aprender tudo sobre o nosso método para estruturar a comunicação que traduz profundamente aquilo que temos de único para nós e para o mundo.",
    image: "/images/cursos.jpeg",
    link: "https://studiosal.com.br/contato",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-warm-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">SERVIÇOS</p>
        </div>
        <div className="text-center mb-16">
          <p className="font-serif text-xl md:text-2xl text-foreground">
            Conheça os <em><strong>caminhos</strong></em> que oferecemos para seu <em><strong>crescimento</strong></em>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <div className="overflow-hidden mb-6 rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3 font-bold">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
