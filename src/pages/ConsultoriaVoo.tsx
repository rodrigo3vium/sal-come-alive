import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import consultoriaHero from "@/assets/consultoria-voo-hero.png";
import consultoriaHands from "@/assets/consultoria-hands.jpeg";
import aboutBeach from "@/assets/about-beach.jpeg";
import consultoriaGiulia from "@/assets/consultoria-giulia.jpg";
import depoimentoIsabella from "@/assets/depoimento-isabella.png";
import depoimentoNathalia from "@/assets/depoimento-nathalia.jpeg";
import depoimentoLeticia from "@/assets/depoimento-leticia.png";
import almaEntrevista from "@/assets/alma-entrevista.jpeg";
import folhas from "@/assets/folhas.webp";
import mentePedras from "@/assets/mente-pedras.jpeg";
import corpoVerbal from "@/assets/corpo-verbal.png";

const talvezVoceItems = [
  {
    title: "SEJA UMA EXCELENTE PROFISSIONAL",
    description: "Mas sente que só quem conhece seu trabalho ao vivo sabe disso. Na internet é mais difícil mostrar.",
  },
  {
    title: "SINTA QUE TEM ALGO ESPECIAL PARA DAR AO MUNDO",
    description: 'Mas não consiga nomear e nem "empacotar" de um jeito que os outros também sintam.',
  },
  {
    title: "ESTEJA SONHANDO COM VOOS MAIORES",
    description: "Mas retrai com insegurança de não saber se sobreviveria sozinha a eles.",
  },
  {
    title: "TENHA ANOS DE EXPERIÊNCIA",
    description: "E veja pessoas com metade da sua ganhando o dobro porque se comunicam melhor (principalmente no digital).",
  },
];

const ConsultoriaVoo = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left - Image */}
        <div className="h-[50vh] md:h-screen">
          <img
            src={consultoriaHero}
            alt="Mulher na praia"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-0 bg-warm-white">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-snug mb-8 lowercase">
            traduza sua autenticidade para o mundo e tenha a marca com o valor que você merece.
          </h1>
          <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg mb-10">
            Nessa jornada, nosso time trabalha exclusivamente para dar vida à marca que traduz tudo aquilo que muitas vezes nem você enxerga sobre si – com estratégia, autenticidade e leveza.
          </p>
          <div>
            <a
              href="https://form.respondi.app/ttqcWIpe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brown text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-body hover:bg-brown/90 transition-colors"
            >
              QUERO VOAR
            </a>
          </div>
        </div>
      </section>

      {/* Talvez você... */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center tracking-[0.3em] uppercase mb-12">
            talvez você...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {talvezVoceItems.map((item) => (
              <div key={item.title} className="bg-beige/60 p-8 flex flex-col">
                <Check className="text-foreground/60 mb-4" size={20} strokeWidth={1.5} />
                <h3 className="font-body text-sm font-bold tracking-[0.05em] uppercase text-foreground mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boa notícia */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <img
                src={consultoriaHands}
                alt="Mãos"
                className="w-full max-w-md aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
                A boa notícia é que você não está sozinha e tem um jeito de mudar esse cenário.
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                A onda do marketing digital e seus tem quês nos fez acreditar que todas as respostas estavam nas redes sociais e em conteúdos mirabolantes que te limitam a um personagem forçado. A verdade é que isso até pode dar certo, mas dura pouco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marca pessoal */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <img
                src={consultoriaGiulia}
                alt="Giulia Salvatore"
                className="w-full max-w-md aspect-[3/4] object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
                Existe algo muito mais perene do que qualquer trend ou rede social, algo que você jamais vai perder: sua marca pessoal.
              </h2>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                E é essa marca que vamos potencializar nessa jornada, nesse VOO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="w-16 h-px bg-foreground mb-8" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
            O que dizem as mulheres que já VOARAM
          </h2>
          <p className="font-body text-sm md:text-base text-foreground/70 mb-16 max-w-2xl">
            Ninguém melhor do que quem já viveu essa transformação para falar sobre nosso trabalho.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: depoimentoIsabella, name: "Isabella Franklin", role: "Advogada e Mentora de Mulheres" },
              { image: depoimentoNathalia, name: "Nathalia Bovolon", role: "Empresária e Especialista em HOF" },
              { image: depoimentoLeticia, name: "Letícia Madeira", role: "Empresária e Mentora Executiva" },
            ].map((dep) => (
              <div key={dep.name} className="flex flex-col items-center text-center">
                <img
                  src={dep.image}
                  alt={`Depoimento de ${dep.name}`}
                  className="w-full max-w-sm rounded-lg mb-6"
                />
                <h3 className="font-serif text-lg text-foreground">{dep.name}</h3>
                <p className="font-body text-sm text-foreground/60">{dep.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etapas da Jornada */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="font-body text-center text-lg md:text-xl tracking-[0.25em] uppercase text-foreground mb-16">
            conheça cada etapa da sua jornada conosco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "○",
                label: "alma",
                etapa: "ETAPA 1 | AUTOCONHECIMENTO",
                desc: "Esse momento da sua jornada trabalha os aspectos mais profundos e internos de quem você é. No qual nós te conhecemos a fundo e você se reconhece enquanto potência.",
              },
              {
                icon: "◎",
                label: "mente",
                etapa: "ETAPA 2 | ESTRATÉGIA",
                desc: "É a hora da estratégia. Mais do que mudar sua visão sobre o quão única e especial você é, pensamos a forma como você irá traduzir tudo isso para que o mundo também tenha essa certeza.",
              },
              {
                icon: "⚇",
                label: "corpo",
                etapa: "ETAPA 3 | PRESENÇA",
                desc: "Te damos as ferramentas para comunicar a sua marca e despertar a percepção que você deseja. Nessa etapa tangibilizamos tudo aquilo que estruturamos. É quando a visão dos outros sobre você começa a mudar.",
              },
            ].map((item) => (
              <div key={item.etapa} className="flex flex-col">
                {/* Card image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={aboutBeach}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brown/30" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4">
                    <span className="text-white text-5xl font-light">{item.icon}</span>
                    <span className="font-serif text-4xl md:text-5xl text-white">{item.label}</span>
                  </div>
                </div>
                {/* Card text */}
                <div className="bg-beige/40 p-6 flex-1">
                  <h3 className="font-body text-sm tracking-[0.1em] uppercase text-foreground/70 mb-4">
                    {item.etapa}
                  </h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alma - Detalhamento */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          {/* Header com linha e título */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-px bg-foreground/30 flex-1 max-w-[200px]" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">alma</h2>
            <div className="h-px bg-foreground/30 flex-1 max-w-[200px]" />
          </div>

          {/* Subtítulo */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
              Começaremos mergulhando na profundidade que é você.
            </h3>
            <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
              Seria impossível criarmos uma marca verdadeiramente autêntica se não estivéssemos dispostas e te olhar por inteiro. Por isso, nessa etapa fazemos...
            </p>
          </div>

          {/* A Entrevista */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="font-body text-sm tracking-[0.15em] uppercase text-foreground/60 mb-2">A ENTREVISTA</p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-snug mb-6">
                O quanto você se conhece antes do mundo te conhecer?
              </h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                Nossas clientes brincam que é quase uma sessão de terapia. Trata-se uma conversa bastante profunda na qual faremos perguntas essenciais para o nosso trabalho, mas também para a sua jornada de autoconhecimento.
              </p>
            </div>
            <div>
              <img
                src={almaEntrevista}
                alt="A Entrevista"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
          {/* A Pesquisa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mt-20">
            <div>
              <img
                src={folhas}
                alt="A Pesquisa"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
            <div>
              <p className="font-body text-sm tracking-[0.15em] uppercase text-foreground/60 mb-2">A PESQUISA</p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-snug mb-6">
                Mergulhamos no seu nicho e na percepção que você tem hoje.
              </h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                Depois de mergulharmos no seu universo, começaremos a olhar para fora com uma análise do seu nicho e um diagnóstico de como está sua comunicação hoje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mente - Detalhamento */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-px bg-foreground/30 flex-1 max-w-[200px]" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">mente</h2>
            <div className="h-px bg-foreground/30 flex-1 max-w-[200px]" />
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
              Nessa etapa, estruturamos os pilares do seu posicionamento.
            </h3>
            <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
              Imagine que a sua marca pessoal é um templo. Antes de pensarmos nos adornos e acabamentos, precisamos de um alicerce sólido e profundo que irá sustentar e inspirar tudo aquilo que vier como expressão da sua marca no mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h3 className="font-body text-sm tracking-[0.15em] uppercase text-foreground mb-4">O QUE SUSTENTA SUA MARCA PARA ALÉM DA SUPERFÍCIE?</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                Muitos pensam que trabalhar branding é pensar no logo e conteúdo, mas começar por aí é como querer construir uma casa especial apenas com um papel de parede. Os formatos de conteúdo mudam, nossos gostoso estéticos também, mas quando estruturamos pilares sólidos (e profundos como gostamos de fazer aqui) nos fortalecemos para além das efemeridades do mundo. Aqui trabalhamos os pilares abaixo, clique e saiba mais sobre cada um.
              </p>
            </div>
            <div>
              <img
                src={mentePedras}
                alt="Mão tocando pedras"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

          {/* Pilares - Accordion */}
          <div className="max-w-3xl mx-auto mt-16">
            {[
              {
                title: "HISTÓRIA",
                subtitle: "O que aconteceu com você que moldou?",
                text: "É a narrativa que irá te conectar com o seu público, o recorte de sua trajetória com os pontos mais marcantes que justificam o seu trabalho e geram um território proprietário.\nA sua história só você tem, chegou a hora de contá-la.",
              },
              {
                title: "PERSONALIDADE",
                subtitle: "Qual é o fio condutor da sua singularidade?",
                text: "De todos os seus traços, descobriremos quais são os mais marcantes e relevantes para gerar a percepção que verdadeira de quem você é e de que forma eles devem ser percebidos em você. São eles que guiam todo o resto, inclusive suas decisões mais importantes.",
              },
              {
                title: "PODERES",
                subtitle: 'Qual o diferencial do "como" você faz o que faz?',
                text: 'O que você entrega para o mundo de uma forma muito própria, são os diferenciais tangíveis do seu trabalho e da sua forma de atuar no mundo.\nÉ aqui que você enxerga o seu "como" de uma forma autêntica.',
              },
              {
                title: "PROPÓSITO",
                subtitle: "O que te move a levantar da cama todos os dias?",
                text: "É o seu porquê. A razão pela qual você decide levantar todos os dias da cama para fazer o seu trabalho. Quando temos uma motivação forte, não só é mais fácil acreditarmos naquilo que fazemos, como também inspirar os outros a acreditarem também. Simon Sinek, autor e especialista em liderança, diz que as pessoas não compram o quê você faz e sim o porquê você faz. Para nós, muito além de comprar, as pessoas se conectam por propósito.",
              },
              {
                title: "FRASE SÍNTESE",
                subtitle: "Como resumir em poucas palavras quem você é e o que agrega para o mundo?",
                text: "Também chamamos de mensagem central, a síntese de todo o seu posicionamento. O grão que carrega em si todo o significado de tudo que estruturamos nos outros pilares e que tem o objetivo de, em poucas palavras, deixar uma marca poderosa. A sua marca.",
              },
            ].map((pilar, i) => (
              <div key={pilar.title} className={`border-t border-foreground/20 ${i === 4 ? "border-b" : ""}`}>
                <details className="group" open>
                  <summary className="flex items-center gap-4 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <svg className="w-4 h-4 text-foreground/60 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="font-body text-sm md:text-base tracking-[0.15em] uppercase text-foreground">{pilar.title}</span>
                  </summary>
                  <div className="pb-6 pl-0 md:pl-8">
                    <p className="font-body text-sm md:text-base font-semibold italic text-foreground mb-2">
                      {pilar.subtitle}
                    </p>
                    {pilar.text.split("\n").map((line, j) => (
                      <p key={j} className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corpo - Detalhamento */}
      <section className="bg-warm-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-px bg-foreground/30 flex-1 max-w-[200px]" />
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">corpo</h2>
            <div className="h-px bg-foreground/30 flex-1 max-w-[200px]" />
          </div>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
              Na etapa final, cuidaremos dos pontos de maior contato da sua marca com o mundo.
            </h3>
            <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed">
              Uma vez que a base sólida da sua marca está clara, podemos partir para a parte mais tangível da sua comunicação, aquilo que é percebido de forma mais concreta pelas pessoas.
            </p>
          </div>

          {/* Identidade Verbal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
            <div>
              <h3 className="font-body text-sm md:text-base tracking-[0.15em] uppercase text-foreground mb-4">IDENTIDADE VERBAL</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                A forma como você se expressa através da fala e da escrita on e offline. Nessa etapa olharemos para sua linha editorial, seus conteúdos, mensagens e como instruir equipe e IA para garantir a coerência do tom de voz que te marca.
              </p>
            </div>
            <div>
              <img
                src={corpoVerbal}
                alt="Identidade Verbal"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

          {/* Identidade Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <img
                src={consultoriaGiulia}
                alt="Identidade Visual"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-body text-sm md:text-base tracking-[0.15em] uppercase text-foreground mb-4">IDENTIDADE VISUAL</h3>
              <p className="font-body text-sm md:text-base text-foreground/70 leading-relaxed max-w-lg">
                A forma como a sua estética traduz a marca que você quer deixar. Aqui, é importante entendermos que uma identidade visual vai muito além de um logo bonito. Ela precisa comunicar quem você é de forma coerente em todos os pontos de contato.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default ConsultoriaVoo;
