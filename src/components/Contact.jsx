import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Phone, Mail, MessageCircle, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import IconInstagram from './IconInstagram';
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

const contacts = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(38) 98423-9377',
    href: 'https://wa.me/5538984239377',
    sub: 'Atendimento comercial',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(38) 98401-6441',
    href: 'tel:+5538984016441',
    sub: 'Linha direta',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'nexusprime.study@gmail.com',
    href: 'mailto:nexusprime.study@gmail.com',
    sub: 'Propostas e orçamentos',
  },
  {
    icon: IconInstagram,
    label: 'Instagram',
    value: '@nexus_prime.studio',
    href: 'https://instagram.com/nexus_prime.studio',
    sub: 'Cases e bastidores',
  },
];

const Contact = () => {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: 'Site Institucional',
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá Nexus Prime! Quero solicitar uma proposta.%0A%0A*Nome:* ${form.nome}%0A*E-mail:* ${form.email}%0A*Telefone:* ${form.telefone}%0A*Serviço:* ${form.servico}%0A*Mensagem:* ${form.mensagem}`;
    window.open(`https://wa.me/5538984239377?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-4"
          style={{ background: 'rgba(255,184,0,0.1)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.25)' }}
        >
          Vamos Conversar
        </div>
        <h2
          className="font-heading italic text-white tracking-tight leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <BlurText text="Entre em contato." delay={120} />
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
          Responda em poucos minutos. Atendimento humano, ágil e sem enrolação.
        </p>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Contact cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-3"
        >
          {contacts.map(({ icon: Icon, label, value, href, sub }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="liquid-glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/5 transition-all group"
            >
              <div
                className="rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,184,0,0.12)', border: '1px solid rgba(255,184,0,0.3)' }}
              >
                <Icon size={18} style={{ color: '#FFB800' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white/50 font-body text-[10px] uppercase tracking-wider mb-0.5">{label}</p>
                <p className="font-body font-medium text-white text-sm truncate">{value}</p>
                <p className="text-white/40 font-body font-light text-xs mt-0.5">{sub}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-white/40 group-hover:text-[#FFB800] transition-colors flex-shrink-0"
              />
            </a>
          ))}

          {/* Info card */}
          <div className="liquid-glass rounded-2xl p-5 flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2">
              <Clock size={14} style={{ color: '#FFB800' }} />
              <span className="font-body font-medium text-white text-xs">Horário de atendimento</span>
            </div>
            <p className="text-white/60 font-body font-light text-xs leading-relaxed">
              Segunda a sexta · 08h às 19h<br />
              Sábado · 09h às 13h
            </p>
            <div className="flex items-center gap-2 mt-2">
              <MapPin size={14} style={{ color: '#FFB800' }} />
              <span className="font-body font-medium text-white text-xs">Atendimento</span>
            </div>
            <p className="text-white/60 font-body font-light text-xs leading-relaxed">
              100% remoto · Brasil inteiro
            </p>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3 liquid-glass rounded-2xl p-6 md:p-10"
        >
          <h3 className="font-heading italic text-white text-2xl md:text-3xl mb-2">
            Solicite uma proposta gratuita
          </h3>
          <p className="text-white/60 font-body font-light text-sm mb-6">
            Preencha os dados e enviamos uma proposta personalizada em até 24h.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-white/70 font-body text-xs">Nome completo *</label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="liquid-glass rounded-full px-4 py-3 text-sm font-body text-white outline-none focus:ring-2 focus:ring-[#FFB800]/30"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/70 font-body text-xs">Telefone *</label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="liquid-glass rounded-full px-4 py-3 text-sm font-body text-white outline-none focus:ring-2 focus:ring-[#FFB800]/30"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/70 font-body text-xs">E-mail *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="liquid-glass rounded-full px-4 py-3 text-sm font-body text-white outline-none focus:ring-2 focus:ring-[#FFB800]/30"
                placeholder="seu@email.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/70 font-body text-xs">Serviço de interesse</label>
              <select
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                className="liquid-glass rounded-full px-4 py-3 text-sm font-body text-white outline-none focus:ring-2 focus:ring-[#FFB800]/30 appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23FFB800\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
              >
                <option style={{ background: '#0a0a0a' }}>Site Institucional</option>
                <option style={{ background: '#0a0a0a' }}>Landing Page</option>
                <option style={{ background: '#0a0a0a' }}>E-commerce</option>
                <option style={{ background: '#0a0a0a' }}>Identidade Visual</option>
                <option style={{ background: '#0a0a0a' }}>App Mobile</option>
                <option style={{ background: '#0a0a0a' }}>Outro</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/70 font-body text-xs">Mensagem</label>
              <textarea
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="liquid-glass rounded-2xl px-4 py-3 text-sm font-body text-white outline-none focus:ring-2 focus:ring-[#FFB800]/30 resize-none"
                placeholder="Conte um pouco sobre seu projeto..."
              />
            </div>

            <button
              type="submit"
              className="rounded-full px-6 py-3 font-body font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2"
              style={{ background: '#FFB800', color: '#000' }}
            >
              Enviar e abrir WhatsApp
              <ArrowUpRight size={16} />
            </button>

            <p className="text-white/40 font-body font-light text-[11px] text-center">
              Ao enviar, você será redirecionado para o WhatsApp com a mensagem preenchida.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
