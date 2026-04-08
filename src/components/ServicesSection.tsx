import { Link } from "react-router-dom";

const services = [
  {
    title: "Consultoria Voo",
    description: "Um trabalho individual e exclusivo, feito por nós, do início ao fim. Indicada para quem pode investir em ter sua marca pessoal estruturada com profundidade, estratégia e um olhar dedicado só para si.",
    image: "/images/consultoria-voo.jpeg",
    link: "/consultoria-voo",
    subtitle: "",
  },
  {
    title: "Mentoria SALto",
    description: "Uma jornada guiada em grupo, mas vivida de forma individual. Ideal para quem quer aprender a se comunicar com mais verdade, clareza e consistência — com apoio no processo, mas construindo com as próprias mãos.",
    image: "/images/mentoria-salto.jpeg",
    link: "/mentoria-salto",
    subtitle: "",
  },
  {
    title: "Cursos",
    description: "Você poderá aprender tudo sobre o nosso método para estruturar a comunicação que traduz profundamente aquilo que temos de único para nós e para o mundo.",
    image: "/images/cursos.jpeg",
    link: "https://studiosal.com.br/contato",
    subtitle: "| EM BREVE |",
    external: true,
  },
];

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="flex-1 h-px bg-foreground/20" />
            <p className="text-foreground text-lg md:text-xl tracking-[0.15em] uppercase font-serif">SERVIÇOS</p>
            <div className="flex-1 h-px bg-foreground/20" />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-foreground/20" />
            <p className="font-serif text-lg md:text-xl text-foreground whitespace-nowrap">
              Conheça os <em>caminhos</em> que oferecemos para seu <em>crescimento</em>
            </p>
            <div className="flex-1 h-px bg-foreground/20" />
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service) => {
            const content = (
              <>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">{service.title}</h3>
                  <p className={`text-white/90 text-sm tracking-widest mb-3 ${service.subtitle ? '' : 'invisible'}`}>
                    {service.subtitle || '&nbsp;'}
                  </p>
                  <p className="font-body text-sm text-white/90 leading-relaxed max-w-xs">{service.description}</p>
                </div>
              </>
            );
            const className = "group cursor-pointer block relative overflow-hidden";

            if (service.external) {
              return (
                <div key={service.title} className="relative overflow-hidden">
                  {content}
                </div>
              );
            }

            return (
              <Link key={service.title} to={service.link} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
    </section>
  );
};

export default ServicesSection;
