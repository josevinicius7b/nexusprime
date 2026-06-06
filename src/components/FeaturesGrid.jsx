import { Zap, Palette, BarChart3, Globe } from 'lucide-react';
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

const features = [
  {
    icon: Zap,
    title: 'Velocidade Extrema',
    body: 'Sites otimizados para carregamento instantâneo em smartphones e computadores. Performance que converte.',
    color: '#FFB800',
  },
  {
    icon: Palette,
    title: 'Design de Elite',
    body: 'Projetos visuais modernos e dinâmicos focados em UI/UX. Estética premium que prende a atenção e gera desejo imediato.',
    color: '#0066FF',
  },
  {
    icon: BarChart3,
    title: 'Foco em Conversão',
    body: 'Estruturas digitais projetadas para escalar faturamento. Cada elemento da página trabalha a favor do seu resultado.',
    color: '#FFB800',
  },
  {
    icon: Globe,
    title: 'Posicionamento Digital',
    body: 'Transformamos seu ecossistema digital em um ativo comercial de alto valor, posicionando sua marca como referência de mercado.',
    color: '#0066FF',
  },
];

const FeaturesGrid = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-4"
          style={{ background: 'rgba(255,184,0,0.1)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.25)' }}
        >
          Por Que a Nexus Prime
        </div>
        <h2
          className="font-heading italic text-white tracking-tight leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <BlurText text="O diferencial que muda tudo." delay={120} />
        </h2>
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map(({ icon: Icon, title, body, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
          >
            <div
              className="rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}18`, border: `1px solid ${color}30` }}
            >
              <Icon size={18} style={{ color }} />
            </div>
            <h3 className="font-body font-semibold text-white text-base">{title}</h3>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">{body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
