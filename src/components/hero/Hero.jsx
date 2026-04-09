import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './hero.scss';

const metrics = [
  { value: '4+', label: 'Years' },
  { value: '18+', label: 'Products launched' },
  { value: '99%', label: 'Delivery reliability' },
];

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [38, -42]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [70, -55]);
  const statusY = useTransform(scrollYProgress, [0, 1], [22, -20]);
  const haloY = useTransform(scrollYProgress, [0, 1], [16, -36]);

  return (
    <div className='hero container' ref={heroRef}>
      <motion.div
        className='hero__content'
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7 }}
      >
        <p className='eyebrow'>Software Developer | Kathmandu, Nepal</p>
        <h1 className='hero__title'>
          Digital products with
          <span> clean architecture and luxury-level UI craft.</span>
        </h1>
        <p className='hero__lead'>
          I partner with founders and teams to design and ship premium web
          platforms that are fast, elegant, and engineered for long-term scale.
        </p>

        <div className='hero__actions'>
          <a href='#portfolio' className='btn btn--primary'>
            View case studies
          </a>
          <a href='#contact' className='btn btn--ghost'>
            Start a project
          </a>
        </div>

        <ul className='hero__metrics'>
          {metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className='hero__visual'
        style={{ y: portraitY }}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div className='hero__halo' style={{ y: haloY }} />
        <div className='hero__imageWrap panel'>
          <div className='hero__imageBack'></div>
          <img src='/hero.png' alt='Portrait of Prabin Bastakoti' />

          <motion.div className='hero__badge' style={{ y: statusY }}>
            Available for new projects
          </motion.div>

          <div className='hero__floating hero__floating--one'>
            Premium UX
          </div>
          <div className='hero__floating hero__floating--two'>React + Node</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
