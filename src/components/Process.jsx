import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { MessageCircle, Compass, Code2, Rocket } from 'lucide-react';
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

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Diagnóstico Estratégico',
    body: 'Conversamos com você para entender o negócio, o público e os objetivos comerciais. Nada de achismo — tudo é mapeado e validado.',
    duration: '1-2 dias',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Design & Direção',
    body: 'Desenvolvemos a identidade visual e a arquitetura da informação. Você aprova cada etapa com previews navegáveis antes de irmos para o código.',
    duration: '3-5 dias',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Desenvolvimento Premium',
    body: 'Código limpo, performático e otimizado para SEO. Tecnologias modernas (React, Next.js, Vite) para entregar velocidade absoluta.',
    duration: '5-10 dias',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Lançamento & Otimização',
    body: 'Publicamos, monitoramos métricas e otimizamos continuamente. Suporte total no pós-entrega para garantir resultado real.',
    duration: 'Contínuo',
  },
];

const Process = () => {
  const [ref, inView] = useInView();

  return (
    <section id="processo" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-4"
          style={{ background: 'rgba(255,184,0,0.1)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.25)' }}
        >
          Nosso Processo
        </div>
        <h2
          className="font-heading italic text-white tracking-tight leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <BlurText text="Do briefing ao lançamento." delay={120} />
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
          Um método validado em mais de 150 projetos. Previsível, rápido e focado em resultado.
        </p>
      </div>

      {/* Timeline */}
      <div ref={ref} className="max-w-5xl mx-auto relative">
        {/* Vertical connector line (desktop only) */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,184,0,0.3), transparent)' }}
        />

        <div className="flex flex-col gap-8">
          {steps.map(({ icon: Icon, number, title, body, duration }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Card */}
              <div className="flex-1 w-full liquid-glass rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,184,0,0.12)', border: '1px solid rgba(255,184,0,0.3)' }}
                  >
                    <Icon size={20} style={{ color: '#FFB800' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-body font-semibold text-white text-lg">{title}</h3>
                      <span
                        className="text-[10px] font-body px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(0,102,255,0.12)', color: '#5e9eff', border: '1px solid rgba(0,102,255,0.3)' }}
                      >
                        {duration}
                      </span>
                    </div>
                    <p className="text-white/60 font-body font-light text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>

              {/* Big number */}
              <div className="hidden md:flex flex-shrink-0 w-24 h-24 rounded-full liquid-glass-strong items-center justify-center relative z-10">
                <span
                  className="font-heading italic"
                  style={{ fontSize: '2.5rem', color: '#FFB800' }}
                >
                  {number}
                </span>
              </div>

              {/* Empty spacer */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
