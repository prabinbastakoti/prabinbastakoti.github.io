import { motion } from 'framer-motion';
import './hero.scss';

const metrics = [
  { value: '4+', label: 'Years building products' },
  { value: '18+', label: 'Projects delivered' },
  { value: '99%', label: 'Client satisfaction focus' },
];

const Hero = () => {
  return (
    <div className='hero container'>
      <motion.div
        className='hero__content'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.65 }}
      >
        <p className='section-kicker'>Full-Stack Developer | Kathmandu, Nepal</p>
        <h1>
          I craft premium digital experiences that feel elegant, fast, and
          human.
        </h1>
        <p className='hero__lead'>
          I help founders and teams turn product ideas into high-quality web
          applications with clean architecture, intentional UI, and reliable
          performance.
        </p>

        <div className='hero__actions'>
          <a href='#portfolio' className='btn'>
            View Projects
          </a>
          <a href='#contact' className='btn btn--outline'>
            Let&apos;s Talk
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
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className='hero__imageWrap'>
          <img src='/hero.png' alt='Portrait of Prabin Bastakoti' />
          <div className='hero__badge'>
            <span>Available for new projects</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
