import { motion, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import BlurText from './BlurText';

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const faqs = [
  {
    q: 'Quanto tempo leva para entregar um projeto?',
    a: 'Sites institucionais e landing pages são entregues em até 7 dias úteis. Projetos mais complexos (e-commerce, plataformas, apps) variam de 3 a 8 semanas dependendo do escopo. Tudo é alinhado no diagnóstico inicial.',
  },
  {
    q: 'Quais tecnologias vocês usam?',
    a: 'Trabalhamos com as melhores stacks do mercado: React, Next.js, Vite, Tailwind CSS, Node.js, Framer Motion, além de integrações com WhatsApp, gateways de pagamento, CRMs e ferramentas de marketing.',
  },
  {
    q: 'Vocês oferecem manutenção pós-entrega?',
    a: 'Sim. Todos os planos incluem suporte técnico e pequenas alterações por 30 dias. Para acompanhamento contínuo, oferecemos planos mensais de manutenção, otimização e evolução do projeto.',
  },
  {
    q: 'Como é feito o pagamento?',
    a: 'Trabalhamos com entrada + parcelas durante o desenvolvimento. Aceitamos PIX, transferência e cartão. Tudo formalizado em contrato com prazos e entregas claras.',
  },
  {
    q: 'Posso ver projetos anteriores antes de fechar?',
    a: 'Claro! Veja a seção de Projetos acima ou agende uma reunião — apresentamos cases completos com métricas reais de cada cliente.',
  },
  {
    q: 'Atendem em todo o Brasil?',
    a: 'Sim. Toda a operação é remota, com reuniões por Google Meet e comunicação fluida via WhatsApp. Já atendemos clientes em mais de 12 estados.',
  },
  {
    q: 'O que diferencia a Nexus Prime de outras agências?',
    a: 'Unimos engenharia de código de alto nível com design premium e foco obsessivo em conversão. Não entregamos só "um site bonito" — entregamos um ativo comercial que gera resultado mensurável.',
  },
];

const FAQ = () => {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-4"
          style={{ background: 'rgba(255,184,0,0.1)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.25)' }}
        >
          Perguntas Frequentes
        </div>
        <h2
          className="font-heading italic text-white tracking-tight leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <BlurText text="Tirando suas dúvidas." delay={120} />
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
          As respostas mais comuns dos nossos clientes. Algo a mais? Fale com a gente.
        </p>
      </div>

      <div ref={ref} className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="liquid-glass rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-body font-medium text-white text-sm md:text-base flex-1">
                {item.q}
              </span>
              <div
                className="rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,184,0,0.12)', border: '1px solid rgba(255,184,0,0.25)' }}
              >
                {open === i ? (
                  <Minus size={14} style={{ color: '#FFB800' }} />
                ) : (
                  <Plus size={14} style={{ color: '#FFB800' }} />
                )}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-5 pt-0 text-white/60 font-body font-light text-sm leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
