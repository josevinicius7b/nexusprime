import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const BlurText = ({
  text = '',
  className = '',
  delay = 200,
  direction = 'bottom',
  animateBy = 'words',
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const variants = {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      y: direction === 'bottom' ? 50 : -50,
    },
    mid: {
      filter: 'blur(5px)',
      opacity: 0.5,
      y: direction === 'bottom' ? -5 : 5,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
    },
  };

  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.7,
            ease: 'easeOut',
            times: [0, 0.5, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {el}{animateBy === 'words' && i < elements.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
