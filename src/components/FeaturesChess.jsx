import { ArrowUpRight, X, Zap, Monitor, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import BlurText from './BlurText';

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const ServiceModal = ({ open, onClose }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass-strong rounded-3xl p-8 max-w-2xl w-full relative"
            style={{ border: '1px solid rgba(0,212,255,0.2)', boxShadow: '0 0 60px rgba(0,212,255,0.12)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
            >
              <X size={16} />
            </button>

            {/* Badge */}
            <div
              className="rounded-full px-3 py-1 text-xs font-medium font-body inline-block mb-5"
              style={{ background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.25)' }}
            >
              Desenvolvimento Web
            </div>

            <h3 className="font-heading italic text-white text-2xl md:text-3xl leading-tight mb-4">
              Sites que vendem, não apenas existem.
            </h3>

            <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed mb-6">
              Na Nexus Prime Studio, nós não acreditamos em sites que servem apenas como "cartão de visitas"
              enfeitados e sem vida. O mercado está cheio de páginas lentas e genéricas que fazem as empresas
              perderem vendas todos os dias.
            </p>

            <p className="text-white/70 font-body font-light text-sm md:text-base leading-relaxed mb-8">
              Nosso método de desenvolvimento une engenharia de código avançada e design estratégico.
              Quando desenvolvemos a plataforma da sua empresa, aplicamos três pilares fundamentais:
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: Zap,
                  color: '#FFB800',
                  title: 'Velocidade Máxima',
                  desc: 'Sites otimizados para carregar instantaneamente no celular, garantindo que você não perca nenhum cliente por lentidão.',
                },
                {
                  icon: Monitor,
                  color: '#00D4FF',
                  title: 'Experiência do Usuário (UI/UX)',
                  desc: 'Um visual imponente nas cores da sua marca, feito para guiar o olhar do visitante direto para o que importa.',
                },
                {
                  icon: TrendingUp,
                  color: '#0066FF',
                  title: 'Engenharia de Conversão',
                  desc: 'Botões estratégicos, textos persuasivos e caminhos sem falhas que reduzem o trabalho da sua equipe comercial, automatizando o recebimento de leads.',
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex gap-4 items-start p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: `${color}18` }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-white text-sm mb-1">{title}</p>
                    <p className="font-body font-light text-white/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/60 font-body font-light text-sm leading-relaxed mb-6">
              Seja para uma clínica, uma grande marca ou um provedor de tecnologia, nós criamos a estrutura
              digital necessária para consolidar seu posicionamento premium e escalar suas vendas.
            </p>

            <a
              href="https://wa.me/5538984239377?text=Ol%C3%A1%20Nexus%20Prime!%20Quero%20saber%20mais%20sobre%20Desenvolvimento%20Web%20de%20Alta%20Convers%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3 font-body font-semibold text-sm flex items-center gap-2 w-fit hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #00D4FF, #0066FF)', color: '#fff', boxShadow: '0 0 24px rgba(0,212,255,0.35)' }}
            >
              Solicitar Proposta
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ChessRow = ({ reverse, title, body, btnText, imgSrc, imgAlt, index, onSaibaMais, isWhatsApp }) => {
  const [ref, inView] = useInView();

  const handleBtn = () => {
    if (isWhatsApp) {
      window.open(
        'https://wa.me/5538984239377?text=Ol%C3%A1%20Nexus%20Prime!%20Gostaria%20de%20saber%20como%20funciona%20o%20processo%20de%20voc%C3%AAs.',
        '_blank'
      );
    } else {
      onSaibaMais?.();
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}
    >
      {/* Text side */}
      <div className="flex-1 flex flex-col gap-6">
        <h3 className="font-heading italic text-white text-3xl md:text-4xl leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">
          {body}
        </p>
        <button
          onClick={handleBtn}
          className="rounded-full px-5 py-2.5 font-body font-semibold text-sm flex items-center gap-2 w-fit hover:opacity-90 transition-opacity"
          style={
            isWhatsApp
              ? { background: 'linear-gradient(135deg, #00D4FF, #0066FF)', color: '#fff', boxShadow: '0 0 20px rgba(0,212,255,0.3)' }
              : { background: '#FFB800', color: '#000' }
          }
        >
          {btnText}
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Image side */}
      <div className="flex-1 w-full">
        <div className="liquid-glass rounded-2xl overflow-hidden">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: '16/9' }}
            onError={e => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesChess = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ServiceModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section id="servicos" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-24">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div
            className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-4"
            style={{ background: 'rgba(0,212,255,0.08)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.2)' }}
          >
            Nossos Serviços
          </div>
          <h2
            className="font-heading italic text-white tracking-tight leading-[0.9]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            <BlurText text="Tecnologia. Design. Resultado." delay={120} />
          </h2>
        </div>

        {/* Chess rows */}
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          <ChessRow
            index={0}
            reverse={false}
            title="Desenvolvimento Web de Alta Conversão."
            body="Criamos plataformas digitais, sites institucionais e landing pages focadas em converter visitante em cliente. Cada detalhe da arquitetura é pensado para reduzir a fricção e levar o usuário à ação — seja fechar um pedido, agendar uma consulta ou realizar uma matrícula."
            btnText="Saiba mais"
            imgSrc="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
            imgAlt="Desenvolvimento web de alta conversão"
            onSaibaMais={() => setModalOpen(true)}
            isWhatsApp={false}
          />
          <ChessRow
            index={1}
            reverse={true}
            title="Design Gráfico Premium & Identidade Visual."
            body="Construímos a embalagem visual que condiz com o tamanho real do seu negócio. Utilizamos psicologia do consumo, tipografias imponentes e renderizações 3D para gerar autoridade instantânea — fazendo sua marca ser percebida como referência de mercado."
            btnText="Ver como funciona"
            imgSrc="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
            imgAlt="Design gráfico premium e identidade visual"
            isWhatsApp={true}
          />
        </div>
      </section>
    </>
  );
};

export default FeaturesChess;
