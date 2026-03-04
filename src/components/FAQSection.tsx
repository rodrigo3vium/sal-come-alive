import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é personal branding?",
    answer: "Personal branding é o processo estratégico de construir e gerenciar a percepção que o mundo tem de você. Vai além da estética — envolve posicionamento, comunicação, valores e a forma como você se apresenta em todos os pontos de contato.",
  },
  {
    question: "Para quem são os serviços do Studio SAL?",
    answer: "Nossos serviços são voltados para mulheres que desejam se posicionar com autenticidade e estratégia no mercado — empreendedoras, profissionais liberais, executivas e criadoras de conteúdo que querem ser reconhecidas pelo seu valor.",
  },
  {
    question: "Qual a diferença entre a Consultoria Voo e a Mentoria SALto?",
    answer: "A Consultoria Voo é uma imersão pontual para clareza e direcionamento estratégico. Já a Mentoria SALto é um acompanhamento contínuo, ideal para quem busca construir e fortalecer seu posicionamento ao longo do tempo.",
  },
  {
    question: "Como posso começar?",
    answer: "Você pode entrar em contato conosco pelo WhatsApp ou preencher o formulário de interesse. Faremos uma conversa inicial para entender suas necessidades e indicar o melhor caminho para você.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-cream py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 font-body">Dúvidas</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Perguntas Frequentes</h2>
          <div className="mt-6 w-12 h-px bg-gold mx-auto" />
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-forest/10">
              <AccordionTrigger className="font-serif text-left text-base text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="font-body text-sm text-muted-foreground mb-3">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-forest text-sm tracking-[0.1em] uppercase font-body border-b border-forest/30 pb-1 hover:border-forest transition-colors"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
