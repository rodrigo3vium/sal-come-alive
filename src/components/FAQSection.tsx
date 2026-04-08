import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é Branding Pessoal?",
    answer: 'Toda pessoa que existe já é uma marca na medida em que todos com quem convivemos irão criar uma percepção de nós, quer estejamos conscientes disso ou não. Como diria o especialista no assunto, Dan Shawbel, "marca pessoal é sobre desenterrar tudo o que é verdadeiro e único sobre você e deixar todo mundo saber". Quando você trabalha sua marca pessoal, está tomando consciência e criando estratégias para que a marca que você deixa no mundo, seja o mais próxima daquilo que você deseja.',
  },
  {
    question: "Como saber qual serviço é ideal para mim?",
    answer: "Gostamos de chamar nossos serviços de jornadas porque todos são uma experiência completa que proporciona grande crescimento. Cada cliente é única e se encontra em um momento de vida distinto, por isso temos uma diversidade grande de jornadas possíveis. Para entender qual a melhor para você, pense na tríade tempo-energia-dinheiro e qual desses três elementos você está mais disposta a investir. Quando não podemos investir muito tempo e nem energia, precisamos dispor de um maior investimento financeiro para que outros façam por nós. Quando não podemos investir dinheiro, precisamos dispor de mais tempo e energia para fazer acontecer. A boa notícia é que na Sal temos caminhos para as diferentes necessidades:\n\nA Consultoria Voo é o serviço mais exclusivo que temos, nele somos nós que colocamos a mão na massa e estruturamos sua marca, você só curte e aprova.\n\nJá na Mentoria SALto, montamos um ecossistema muito completo no qual te guiamos de forma próxima e personalizada para que você dê vida à sua marca.\n\nPense no seu momento pessoal e profissional e, se ainda ficar um restinho de dúvida, estamos aqui para te ajudar a tomar a melhor decisão.",
  },
  {
    question: "Como contratar a Sal?",
    answer: 'Para SALtar conosco, basta clicar em um dos botões "QUERO SALTAR" ou "QUERO VOAR" dentro da página do serviço selecionado ou entrar em contato pelo WhatsApp +55 11 97540-4650 ou e-mail atendimento@studiosal.com.br. Com esse primeiro contato, iremos te conhecer melhor para entender se de fato faz sentido trabalharmos juntas. Somos uma agência boutique, comprometida com um atendimento personalizado, próximo e artesanal. Devido à alta demanda, precisamos selecionar com carinho os projetos que melhor se alinham com a transformação que podemos promover. Acreditamos que você nos escolhe, mas nós também escolhemos você! Por isso, ressaltamos que nem todos os projetos que recebemos poderão ser aprovados para fazerem parte da Sal.',
  },
  {
    question: "Qual a diferença entre branding e social media?",
    answer: "Branding pessoal, em essência, é a percepção que as pessoas têm sobre você e o que você representa. Envolve entender quem você é, sua história, seus valores, diferenciais e como deseja ser percebida. O objetivo é construir uma identidade sólida e autêntica que conecte emocionalmente com as pessoas. O estrategista de branding pessoal é um guardião da essência da sua marca, além de te ajudar a ter clareza sobre o que você tem de mais único, ele também te guia no entendimento de como comunicar isso para o mundo de forma estratégica tanto on quanto offline.\n\nO social media cuida de como essa marca vai para o digital, auxiliando na criação e gerenciamento de conteúdo nas redes sociais. Ambos são essenciais, mas atuam em etapas diferentes no processo de construção da marca pessoal.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-beige py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground font-normal">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-foreground/20 rounded-none px-6 bg-transparent">
              <AccordionTrigger className="font-body text-left text-[15px] text-foreground/70 hover:no-underline py-3 font-normal tracking-wide">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5511975404650"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground/20 px-10 py-5 text-center hover:border-foreground/40 transition-colors"
          >
            <span className="block font-body text-xs tracking-[0.15em] uppercase text-foreground/80">RESTOU ALGUMA DÚVIDA?</span>
            <span className="block font-body text-xs text-foreground/50 mt-1">clique aqui para falar conosco</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
