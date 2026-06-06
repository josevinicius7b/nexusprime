import { ArrowUpRight } from 'lucide-react';
import HlsVideo from './HlsVideo';
import BlurText from './BlurText';

const StartSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
      {/* HLS Video Background */}
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '200px',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '200px',
          background: 'linear-gradient(to top, black, transparent)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-20 flex flex-col items-center text-center px-6 py-32"
        style={{ minHeight: '500px', justifyContent: 'center' }}
      >
        {/* Badge */}
        <div
          className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-6"
          style={{ background: 'rgba(255,184,0,0.12)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.3)' }}
        >
          Como Trabalhamos
        </div>

        {/* Heading */}
        <h2
          className="font-heading italic text-white tracking-tight leading-[0.9] max-w-xl mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <BlurText text="Você imagina. Nós construímos." delay={150} />
        </h2>

        {/* Subtext */}
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md mb-8">
          Compartilhe sua visão. Nossa equipe une engenharia de código e design de alta
          performance para entregar resultados reais — rápido, sem abrir mão da excelência.
        </p>

        {/* CTA */}
        <button
          className="rounded-full px-6 py-3 font-body font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
          style={{ background: '#FFB800', color: '#000' }}
        >
          Iniciar Projeto
          <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default StartSection;
