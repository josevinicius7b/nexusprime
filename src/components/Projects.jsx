import { ArrowUpRight, ExternalLink } from 'lucide-react';
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

const projects = [
  {
    title: 'Seven Foto Studio',
    category: 'Fotografia',
    description: 'Site institucional premium para estúdio de fotografia. Visual imersivo, galeria de projetos e experiência de marca de alto padrão.',
    tags: ['Site Institucional', 'UI/UX', 'Fotografia'],
    color: '#00D4FF',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(0,102,255,0.15))',
    url: 'https://sevenfoto-studio.netlify.app/',
    preview: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80',
  },
  {
    title: 'i9 Mídia Visual',
    category: 'Marketing Digital',
    description: 'Plataforma digital para agência de marketing. Apresentação de serviços, cases e captação de leads com foco em conversão.',
    tags: ['Marketing', 'Landing Page', 'Conversão'],
    color: '#FFB800',
    gradient: 'linear-gradient(135deg, rgba(255,184,0,0.25), rgba(0,212,255,0.1))',
    url: 'https://i9midia-visual.netlify.app',
    preview: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80',
  },
  {
    title: 'CodeMaster',
    category: 'Comunidade',
    description: 'Comunidade de desenvolvedores para iniciantes. Plataforma com recursos de aprendizado, mentoria e networking para quem está começando na programação.',
    tags: ['Comunidade', 'Tech', 'Educação'],
    color: '#0066FF',
    gradient: 'linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,212,255,0.1))',
    url: 'https://codemaster20.netlify.app/',
    preview: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
  },
];

const Projects = () => {
  const [ref, inView] = useInView();

  return (
    <section id="projetos" className="py-24 px-6 md:px-16 lg:px-24 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div
          className="rounded-full px-3.5 py-1 text-xs font-medium font-body mb-4"
          style={{ background: 'rgba(0,212,255,0.08)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.2)' }}
        >
          Portfólio Selecionado
        </div>
        <h2
          className="font-heading italic text-white tracking-tight leading-[0.9] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <BlurText text="Projetos que viraram autoridade." delay={120} />
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl">
          Cada projeto é construído com obsessão por detalhes. Veja como transformamos marcas em referência.
        </p>
      </div>

      {/* Grid */}
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:scale-[1.02] transition-transform"
            style={{ textDecoration: 'none' }}
          >
            {/* Thumbnail */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '16/9', background: project.gradient }}
            >
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6))' }} />

              <div
                className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-medium font-body"
                style={{ background: 'rgba(0,0,0,0.5)', color: project.color, border: `1px solid ${project.color}40`, backdropFilter: 'blur(8px)' }}
              >
                {project.category}
              </div>
              <div
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: project.color, color: '#000' }}
              >
                <ExternalLink size={14} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="font-heading italic text-white text-2xl leading-tight">
                {project.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-body px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="rounded-full px-6 py-3 font-body font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #00D4FF, #0066FF)', color: '#fff', boxShadow: '0 0 24px rgba(0,212,255,0.3)' }}
        >
          Quero um projeto assim
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
