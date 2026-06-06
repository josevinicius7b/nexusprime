import { ArrowUpRight, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import IconInstagram from './IconInstagram';
import HlsVideo from './HlsVideo';
import BlurText from './BlurText';

const CtaFooter = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* HLS Video */}
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{ height: '300px', background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* CTA Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-32 pb-12">
        <h2
          className="font-heading italic text-white leading-[0.85] max-w-3xl mb-6"
          style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}
        >
          <BlurText text="Pronto para elevar sua marca ao próximo nível?" delay={120} />
        </h2>

        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-md mb-10">
          Agende uma conversa gratuita com nossos especialistas. Sem compromisso.
          Descubra como a Nexus Prime Studio pode transformar o digital da sua empresa
          em um motor de vendas.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center mb-24">
          <a
            href="#contato"
            onClick={(e) => handleClick(e, '#contato')}
            className="rounded-full px-6 py-3 font-body font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
            style={{ background: '#FFB800', color: '#000' }}
          >
            Agendar Reunião Gratuita
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#projetos"
            onClick={(e) => handleClick(e, '#projetos')}
            className="liquid-glass-strong rounded-full px-6 py-3 font-body font-medium text-sm hover:bg-white/5 transition-colors"
            style={{ color: '#fff', border: '1px solid rgba(0,102,255,0.4)' }}
          >
            Ver Nossos Projetos
          </a>
        </div>

        {/* Big footer grid */}
        <div className="w-full max-w-6xl mx-auto pt-12 border-t" style={{ borderColor: 'rgba(255,184,0,0.15)' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
            {/* Brand */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full liquid-glass flex items-center justify-center">
                  <span className="font-heading italic text-lg" style={{ color: '#FFB800' }}>N</span>
                </div>
                <span className="font-heading italic text-white text-base tracking-wide">
                  Nexus Prime<span style={{ color: '#FFB800' }}>.</span>
                </span>
              </div>
              <p className="text-white/50 font-body font-light text-xs leading-relaxed">
                Design premium e desenvolvimento de alta conversão para marcas que querem virar referência.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <a
                  href="https://instagram.com/nexus_prime.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Instagram"
                >
                  <IconInstagram size={14} color="#FFB800" />
                </a>
                <a
                  href="https://wa.me/5538984239377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={14} style={{ color: '#FFB800' }} />
                </a>
                <a
                  href="mailto:nexusprime.study@gmail.com"
                  className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="E-mail"
                >
                  <Mail size={14} style={{ color: '#FFB800' }} />
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div className="flex flex-col gap-3">
              <h4 className="font-body font-semibold text-white text-sm mb-1">Navegação</h4>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-xs font-body text-white/50 hover:text-[#FFB800] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Serviços */}
            <div className="flex flex-col gap-3">
              <h4 className="font-body font-semibold text-white text-sm mb-1">Serviços</h4>
              {['Sites Institucionais', 'Landing Pages', 'E-commerce', 'Identidade Visual', 'Apps Mobile', 'Branding 360°'].map((s) => (
                <a
                  key={s}
                  href="#servicos"
                  onClick={(e) => handleClick(e, '#servicos')}
                  className="text-xs font-body text-white/50 hover:text-[#FFB800] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>

            {/* Contato */}
            <div className="flex flex-col gap-3">
              <h4 className="font-body font-semibold text-white text-sm mb-1">Contato</h4>
              <a
                href="https://wa.me/5538984239377"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs font-body text-white/50 hover:text-[#FFB800] transition-colors"
              >
                <MessageCircle size={12} className="mt-0.5 flex-shrink-0" />
                <span>(38) 98423-9377</span>
              </a>
              <a
                href="tel:+5538984016441"
                className="flex items-start gap-2 text-xs font-body text-white/50 hover:text-[#FFB800] transition-colors"
              >
                <Phone size={12} className="mt-0.5 flex-shrink-0" />
                <span>(38) 98401-6441</span>
              </a>
              <a
                href="mailto:nexusprime.study@gmail.com"
                className="flex items-start gap-2 text-xs font-body text-white/50 hover:text-[#FFB800] transition-colors break-all"
              >
                <Mail size={12} className="mt-0.5 flex-shrink-0" />
                <span>nexusprime.study@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/nexus_prime.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs font-body text-white/50 hover:text-[#FFB800] transition-colors"
              >
                <IconInstagram size={12} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>@nexus_prime.studio</span>
              </a>
              <div className="flex items-start gap-2 text-xs font-body text-white/50">
                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                <span>Atendimento remoto · Brasil</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 pt-6 border-t flex items-center justify-between flex-wrap gap-4"
            style={{ borderColor: 'rgba(255,184,0,0.1)' }}
          >
            <span className="text-white/30 text-xs font-body">
              © 2026 Nexus Prime Studio. Todos os direitos reservados.
            </span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs font-body text-white/40 hover:text-[#FFB800] transition-colors">Privacidade</a>
              <a href="#" className="text-xs font-body text-white/40 hover:text-[#FFB800] transition-colors">Termos</a>
              <a
                href="#contato"
                onClick={(e) => handleClick(e, '#contato')}
                className="text-xs font-body text-white/40 hover:text-[#FFB800] transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFooter;
