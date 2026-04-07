import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import mentoriaHero from "@/assets/mentoria-salto-hero.jpeg";
import giuliaMentora from "@/assets/giulia-mentora.png";
import mentoriaPraia from "@/assets/mentoria-praia.jpg";
import mentoriaChapeu from "@/assets/mentoria-chapeu.jpeg";
import instagramAntes from "@/assets/instagram-antes.png";
import instagramDepois from "@/assets/instagram-depois.png";
import iconIsi from "@/assets/icon-isi.jpeg";
import iconGo from "@/assets/icon-go.jpeg";
import iconEye from "@/assets/icon-eye.jpeg";
import depoimentoIsabela from "@/assets/depoimento-isabela.png";
import depoimentoInara from "@/assets/depoimento-inara.jpeg";
import depoimentoGiovanna from "@/assets/depoimento-giovanna.jpeg";
import mentoriaMaoAgua from "@/assets/mentoria-mao-agua.jpeg";
import mentoriaEncontros from "@/assets/mentoria-encontros.png";
import mentoriaMetodo from "@/assets/mentoria-metodo.png";
import peixariaTemplates from "@/assets/peixaria-templates.png";
import mentoriaCafe from "@/assets/mentoria-cafe.jpg";

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

      {/* É por isso que na Mentoria SALto */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed mb-16">
            É por isso que na Mentoria SALto você vai...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                bold: "Ser valorizada por seus diferenciais sem precisar recorrer a discursos agressivos.",
                text: "Nosso método te guia para encontrar e potencializar o que há de mais único em você.",
                icon: iconIsi,
              },
              {
                bold: "Superar a dor de depender de hacks e fórmulas rasas que não geram vendas nem reconhecimento real.",
                text: "Te damos acesso a um entendimento mais profundo sobre comunicação, algo que você vai levar pra vida.",
                icon: iconGo,
              },
              {
                bold: "Ter acesso a um ecossistema que transforma a sua força de vontade em realidade.",
                text: "Além de todo o conhecimento compartilhado, também te damos acesso a diversas ferramentas que facilitam o seu dia a dia de forma prática.",
                icon: iconEye,
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <p className="font-body text-sm md:text-base text-foreground leading-relaxed mb-4">
                  {item.bold}
                </p>
                <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed mb-8">
                  {item.text}
                </p>
                <img
                  src={item.icon}
                  alt=""
                  className="w-16 h-16 rounded-full mt-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed">
              O que aconteceu com quem já SALtou:
            </h2>
            <a
              href="https://form.respondi.app/ttqcWIpe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-block border border-foreground text-foreground px-8 py-3 text-sm tracking-[0.15em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              Quero SALtar
            </a>
          </div>
          <p className="font-body text-sm md:text-base text-foreground/70 mb-12">
            Cada jornada é única, mas é sempre maravilhoso podermos nos inspirar na transformação de mulheres incríveis:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: depoimentoIsabela, name: "Isabela Piratininga | Psicóloga", desc: "Além de conseguir atingir sua meta de pacientes, a Isa também recebeu de uma pessoa que admira muito o reconhecimento por seu conteúdo de qualidade." },
              { img: depoimentoInara, name: "Inara Menezes | Psicóloga", desc: "A Inara viu sua vida mudar da água para o vinho, deixando para trás pacientes que não reconheciam o valor de seu trabalho e abrindo espaço para quem valoriza e enxerga a pessoa e profissional ímpar que ela é." },
              { img: depoimentoGiovanna, name: "Giovanna Gusmão | Terapeuta Cognitivo Sexual", desc: "A Gi finalmente conseguiu trazer seu trabalho para o digital e comunicar quem ela é de verdade, com orgulho da forma como se apresenta agora." },
            ].map((dep, i) => (
              <div key={i}>
                <div className="bg-beige rounded-sm overflow-hidden">
                  <img
                    src={dep.img}
                    alt={`Depoimento de ${dep.name}`}
                    className="w-full object-cover"
                  />
                </div>
                <p className="font-body text-sm text-foreground font-medium mt-3">{dep.name}</p>
                <p className="font-body text-sm text-foreground/70 mt-2 leading-relaxed">{dep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tudo que vai estar ao seu alcance */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed mb-6">
              Tudo que vai estar<br />ao seu alcance
            </h2>
            <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Caso você seja aprovada, muito mais do que conhecimento, trazemos um ecossistema que transforma sua força de vontade em realidade.
            </p>
          </div>

          {/* 6 Meses */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center mb-16">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">6 Meses de Acompanhamento</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                Esse é o tempo que nós estaremos com você para cuidar com todo o carinho e sensibilidade da marca que você veio deixar no mundo.
              </p>
            </div>
            <div>
              <img
                src={mentoriaMaoAgua}
                alt="Mão na água"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

          {/* Encontros Quinzenais */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center mb-20">
            <div>
              <img
                src={mentoriaEncontros}
                alt="Encontros quinzenais"
                className="w-full"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">Encontros Quinzenais</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                Semana sim, semana não, estaremos juntas em grupo para mergulhar, lapidar e potencializar a sua comunicação trabalhando temas como conteúdo, visual, estratégia e oratória.
              </p>
            </div>
          </div>

          {/* Acesso ao Método Sal */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">Acesso ao Método Sal</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                Todo o nosso conhecimento sobre como descobrir aquilo que você tem de único e potencializar isso para o mundo vai estar em uma área exclusiva, tipo a Netflix da sua Marca Pessoal.
              </p>
            </div>
            <div>
              <img
                src={mentoriaMetodo}
                alt="Método Sal - plataforma"
                className="w-full"
              />
            </div>
          </div>
          {/* Peixaria */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center mb-20">
            <div>
              <img
                src={peixariaTemplates}
                alt="Templates da Peixaria"
                className="w-full"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">Acesso à "Peixaria"</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                Aqui na Sal nós ensinamos a pescar, mas também gostamos de dar o peixe porque sabemos como <strong className="text-foreground">fica mais fácil quando temos algo "mastigadinho"</strong>. A peixaria é o nosso acervo de templates lindos que facilitam sua vida. Templates, de posts, apresentações, sites e muito mais.
              </p>
            </div>
          </div>

          {/* Grupo de Conexão */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">Grupo de Conexão e Apoio</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                Todas as mentoradas são recebidas com carinho em um grupo no qual acontece muita troca, suporte e networking.
              </p>
            </div>
            <div>
              <img
                src={mentoriaCafe}
                alt="Café e caderno"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>
      </div>
      </section>

      {/* CTA Final */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <a
            href="https://form.respondi.app/ttqcWIpe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-8 group"
          >
            <span className="hidden md:block h-px w-32 bg-foreground/30" />
            <span className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:opacity-70 transition-opacity">
              Quero SALtar
            </span>
            <span className="hidden md:block h-px w-32 bg-foreground/30" />
          </a>
        </div>
      </section>

      {/* Conheça a sua mentora */}
      <section className="bg-warm-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src={giuliaMentora}
              alt="Giulia Salvatore"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <p className="font-serif text-lg md:text-xl text-foreground/70 mb-2">Conheça a sua mentora,</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">Giulia Salvatore.</h2>
            <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed mb-10">
              A Giu entendeu na prática que autenticidade não se compra. Se constrói.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="font-serif text-base md:text-lg text-foreground leading-relaxed mb-3">
                  Antes de compartilhar o que aprendeu e viveu na pele, ela consolidou seu conhecimento.
                </p>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  Com uma formação em Comunicação Social, certificação em Marketing Digital na UCLA (University Of California Los Angeles) e uma trajetória que a fez crescer no digital de forma 100% orgânica.
                </p>
              </div>
              <div>
                <p className="font-serif text-base md:text-lg text-foreground leading-relaxed mb-3">
                  Hoje, ela transforma toda essa experiência em método.
                </p>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  Acredita que o autoconhecimento é a base da comunicação, e que comunicar bem é a chave para ser valorizada pelo que você realmente tem a oferecer.
                </p>
              </div>
            </div>

            <p className="font-serif text-base md:text-lg text-foreground/70 leading-relaxed">
              Na Mentoria SALto, te ajudamos a encontrar essa chave e abrir as portas para um posicionamento que te representa de verdade. Vamos?
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final - Sente o chamado */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-center">
            <div>
              <img
                src={mentoriaPraia}
                alt="Correndo na praia"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-relaxed mb-6">
                Sente o chamado para SALtar?
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed mb-8">
                Clique abaixo para fazer sua aplicação. Analisamos com muito carinho cada caso para entendermos se faz sentido trabalharmos juntas. Você nos escolhe e nós escolhemos você!
              </p>
              <a
                href="https://form.respondi.app/ttqcWIpe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-foreground bg-foreground text-primary-foreground px-10 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-transparent hover:text-foreground transition-colors"
              >
                Quero SALtar
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MentoriaSalto;
