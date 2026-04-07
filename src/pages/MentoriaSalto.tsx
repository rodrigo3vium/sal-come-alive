import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import mentoriaHero from "@/assets/mentoria-salto-hero.jpeg";

const MentoriaSalto = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <div className="h-[50vh] md:h-screen">
          <img
            src={mentoriaHero}
            alt="Mentoria SALto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.15] mb-8">
            Dê os saltos que você precisa para chegar onde deseja com a sua marca pessoal.
          </h1>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed mb-10 max-w-lg">
            Nessa jornada, vamos te guiar para que você aprenda a se comunicar{" "}
            <strong className="text-foreground">sem fórmulas engessadas ou discursos forçados</strong>,
            {" "}traduzindo a versão de você que{" "}
            <strong className="text-foreground">te dá orgulho on e offline.</strong>
          </p>
          <a
            href="https://form.respondi.app/ttqcWIpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit border border-foreground bg-foreground text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-transparent hover:text-foreground transition-colors"
          >
            Quero SALtar
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MentoriaSalto;
