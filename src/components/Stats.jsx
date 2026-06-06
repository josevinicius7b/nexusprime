import HlsVideo from './HlsVideo';
import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const stats = [
  { value: '150+', label: 'Projetos entregues' },
  { value: '97%', label: 'Clientes satisfeitos' },
  { value: '3.8x', label: 'Aumento médio de conversão' },
  { value: '7 dias', label: 'Prazo médio de entrega' },
];

const Stats = () => {
  const [ref, inView] = useInView();

  return (
    <section className="relative overflow-hidden py-24">
      {/* Desaturated HLS video */}
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(0)' }}
      />

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-20 px-6 md:px-16 lg:px-24 py-16">
        <div
          ref={ref}
          className="liquid-glass rounded-3xl p-12 md:p-16 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col gap-2 text-center"
              >
                <span
                  className="font-heading italic"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FFB800' }}
                >
                  {value}
                </span>
                <span className="text-white/60 font-body font-light text-sm">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
