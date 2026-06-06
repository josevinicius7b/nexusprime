import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Perguntas frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-3 transition-all`}
      >
        {/* Logo - only image */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="flex items-center"
        >
          <img src="/logo.png" alt="Nexus Prime Studio" className="h-16 w-auto object-contain" />
        </a>

        {/* Center nav links */}
        <div className="hidden lg:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-0">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium font-body transition-colors"
              style={{ color: 'rgba(255,255,255,0.9)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={(e) => handleClick(e, '#contato')}
            className="rounded-full px-3.5 py-1.5 text-sm font-medium font-body flex items-center gap-1 hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #0066FF)', color: '#fff', boxShadow: '0 0 18px rgba(0,212,255,0.4)' }}
          >
            Falar com um Especialista
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile CTA + Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#contato"
            onClick={(e) => handleClick(e, '#contato')}
            className="rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #0066FF)', color: '#fff' }}
          >
            Contato
            <ArrowUpRight size={14} />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="liquid-glass rounded-full h-10 w-10 flex items-center justify-center text-white"
            aria-label="Abrir menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-20 left-4 right-4 liquid-glass-strong rounded-3xl p-6 flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-3 text-base font-medium font-body transition-colors border-b border-white/5 last:border-none"
                style={{ color: 'rgba(255,255,255,0.9)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#00D4FF'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
