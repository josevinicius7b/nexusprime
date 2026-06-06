import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

const Hero = () => {
  const clients = ['Varejo', 'Saúde', 'Educação', 'Finanças', 'Moda'];

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24" style={{ height: '1000px' }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay with blue tint */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(0,10,30,0.15)' }} />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '300px',
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: '150px' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold font-body"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #0066FF)', color: '#fff', boxShadow: '0 0 12px rgba(0,212,255,0.5)' }}
          >
            Novo
          </span>
          <span className="text-white/90 text-sm font-body pr-3">
            Design de alta conversão para marcas de elite.
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          className="font-heading italic text-white leading-[0.88] max-w-3xl mb-6"
          style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            letterSpacing: '-4px',
          }}
        >
          <BlurText
            text="O Digital que Sua Empresa Merece"
            delay={100}
            direction="bottom"
            animateBy="words"
          />
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm md:text-base text-white/80 font-body font-light leading-tight max-w-md mb-8"
        >
          Design premium. Performance máxima. Engenharia de código unida à arte do design
          para impulsionar seu faturamento e elevar sua marca ao próximo nível.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-4"
        >
          <button
            className="rounded-full px-5 py-2.5 font-body font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
            style={{ background: '#FFB800', color: '#000' }}
          >
            Solicitar Proposta
            <ArrowUpRight size={16} />
          </button>
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/5 transition-colors">
            <Play size={16} fill="white" />
            Ver Nosso Trabalho
          </button>
        </motion.div>

        {/* Partners bar */}
        <div className="mt-auto pt-20 pb-8 flex flex-col items-center gap-6">
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white/60 font-body">
            Atendemos empresas em diversos segmentos
          </span>
          <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center">
            {clients.map((p, i) => (
              <span
                key={p}
                className="text-2xl md:text-3xl font-heading italic"
                style={{ color: i % 2 === 0 ? '#FFB800' : '#00D4FF' }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
