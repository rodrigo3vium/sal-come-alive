import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import mentoriaHero from "@/assets/mentoria-salto-hero.jpeg";
import mentoriaChapeu from "@/assets/mentoria-chapeu.jpeg";
import instagramAntes from "@/assets/instagram-antes.png";
import instagramDepois from "@/assets/instagram-depois.png";
import iconIsi from "@/assets/icon-isi.jpeg";
import iconGo from "@/assets/icon-go.jpeg";
import iconEye from "@/assets/icon-eye.jpeg";

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

      {/* Frase + Cards */}
      <section className="bg-beige">
        <div className="py-16 md:py-20 px-6">
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground text-center max-w-5xl mx-auto leading-relaxed">
            A verdade é que te fizeram acreditar que você precisava se moldar a um jeito "certo" de se comunicar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-6xl mx-auto">
          {[
            {
              title: "QUE SE VOCÊ QUISESSE PASSAR AUTORIDADE...",
              text: "Deveria falar sempre sobre suas conquistas materiais ou acadêmicas.",
            },
            {
              title: 'QUE SE QUISESSE UMA IMAGEM DE "ALTO VALOR"...',
              text: "O jeito é aparecer sempre com acessórios dourados, cabelo muito bem escovado e blazer, de preferência.",
            },
            {
              title: "QUE SE VOCÊ NÃO ESTIVER NO DIGITAL...",
              text: 'Está "deixando dinheiro na mesa", perdendo oportunidades e abrindo mão da melhor forma de alcançar o sucesso.',
            },
            {
              title: "E PARA CRESCER NO DIGITAL...",
              text: "Você precisaria abrir mão de quem você é para seguir as regras do jogo que sequer são claras para você.",
            },
          ].map((card, i) => (
            <div key={i} className="bg-warm-white p-10 md:p-12">
              <p className="font-body text-xl font-bold text-foreground mb-2">...</p>
              <h3 className="font-body text-sm md:text-base tracking-[0.05em] uppercase text-foreground font-semibold mb-4 leading-relaxed">
                {card.title}
              </h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="h-16 md:h-20" />
      </section>

      {/* Mas sabe o que é verdade */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground text-center mb-12">
            Mas sabe o que é verdade, mesmo?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                <strong>Você não precisa de mais um "tem que" limitante.</strong>
              </p>
              <p className="font-serif text-xl md:text-2xl text-foreground/70 leading-relaxed mt-2">
                Precisa ter acesso ao método que te liberta e te guia pra{" "}
                <strong className="text-foreground">sua autenticidade.</strong>
              </p>
            </div>
            <div>
              <img
                src={mentoriaChapeu}
                alt="Chapéu de palha"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crescimento Instagram */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                O mesmo conhecimento que trouxe sua mentora até aqui...
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                Com um crescimento completamente orgânico, sem investir um centavo em publicidade e um mundo de oportunidades que aparecem por conta de sua marca pessoal.
              </p>
            </div>
            <div className="flex gap-6 justify-center items-start">
              <img
                src={instagramAntes}
                alt="Perfil Instagram antes"
                className="w-[45%] rounded-lg shadow-lg"
              />
              <img
                src={instagramDepois}
                alt="Perfil Instagram depois"
                className="w-[45%] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Não é sobre caber */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
            Não é sobre caber em uma fórmula pronta. É sobre finalmente encontrar o <strong>seu</strong> jeito de fazer.
          </h2>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-3xl">
            Varios gurus do marketing vendem fórmulas prontas porque é isso que a maioria busca: soluções fáceis e rápidas. Mas essa dinâmica criou um problema gigante: todo mundo está ficando igual. Abrimos nosso feed e nos deparamos com os mesmos tipos de conteúdo, os mesmos tipos de identidade visual. Como se agora tudo fosse um grande copia e cola.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-12">
          <hr className="border-border" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MentoriaSalto;
