import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
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

const testimonials = [
  {
    quote:
      'O site novo gerou mais leads no primeiro mês do que o antigo fez em um ano inteiro. O design é absurdamente profissional e os clientes comentam toda hora.',
    name: 'Ricardo Alves',
    role: 'CEO, Grupo Alves Saúde',
  },
  {
    quote:
      'Conversões triplicaram em 60 dias. Não esperava esse retorno tão rápido. A Nexus entendeu o nosso negócio de verdade e entregou muito além do esperado.',
    name: 'Fernanda Lopes',
    role: 'Diretora Comercial, EduClass',
  },
  {
    quote:
      'Eles não entregaram só um site. Entregaram autoridade. Hoje cobramos o dobro e os clientes sentem que estão fazendo um ótimo negócio.',
    name: 'Bruno Castilho',
    role: 'Sócio-fundador, Castilho & Melo Advocacia',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView();

  return (
    <section id="depoimentos" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-4"
          style={{ background: 'rgba(255,184,0,0.1)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.25)' }}
        >
          O Que Dizem Nossos Clientes
        </div>
        <h2
          className="font-heading italic text-white tracking-tight leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <BlurText text="Resultados que falam por si." delay={120} />
        </h2>
      </div>

      {/* Cards */}
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, role }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="liquid-glass rounded-2xl p-8 flex flex-col gap-6"
          >
            <div
              className="w-8 h-0.5 rounded-full"
              style={{ background: '#FFB800' }}
            />
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed flex-1">
              "{quote}"
            </p>
            <div>
              <p className="font-body font-medium text-sm" style={{ color: '#FFB800' }}>{name}</p>
              <p className="text-white/50 font-body font-light text-xs mt-0.5">{role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
