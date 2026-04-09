import { motion } from 'framer-motion';
import './about.scss';

const strengths = [
  {
    title: 'Architecture First',
    detail:
      'Scalable foundations with clear boundaries, so products stay healthy as features grow.',
  },
  {
    title: 'Interface Precision',
    detail:
      'Polished interactions and visual hierarchy designed for confidence, trust, and conversion.',
  },
  {
    title: 'Execution Speed',
    detail:
      'Practical workflows that keep momentum high without sacrificing reliability or quality.',
  },
];

const stack = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'Framer Motion',
  'REST + GraphQL',
  'AWS',
  'CI/CD',
];

const About = () => {
  return (
    <div className='about container'>
      <motion.div
        className='about__intro'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <p className='eyebrow'>About</p>
        <h2 className='sectionTitle'>A product partner, not just a coder.</h2>
        <p>
          I blend engineering discipline with a design-led mindset. The goal is
          simple: build software that feels premium to users and predictable to
          teams.
        </p>
      </motion.div>

      <div className='about__details'>
        <div className='about__grid'>
          {strengths.map((item, index) => (
            <motion.article
              key={item.title}
              className='about__card panel'
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.48, delay: index * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className='about__stack panel'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Current stack</h3>
          <div className='about__chips'>
            {stack.map((item) => (
              <span className='chip' key={item}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
