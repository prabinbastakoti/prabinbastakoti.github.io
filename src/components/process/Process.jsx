import { motion } from 'framer-motion';
import './process.scss';

const steps = [
  {
    id: '01',
    title: 'Discovery and strategy',
    description:
      'We define goals, users, and product direction so every design and engineering decision is aligned.',
  },
  {
    id: '02',
    title: 'Design and implementation',
    description:
      'I design polished interfaces and build scalable systems with clean, testable code.',
  },
  {
    id: '03',
    title: 'Launch and iterate',
    description:
      'After launch, I monitor, optimize, and improve based on user behavior and business outcomes.',
  },
];

const Process = () => {
  return (
    <div className='process container'>
      <div className='process__header'>
        <p className='section-kicker'>Process</p>
        <h2 className='section-title'>A simple framework for high-quality delivery</h2>
      </div>

      <div className='process__list'>
        {steps.map((step, index) => (
          <motion.article
            className='process__item surface'
            key={step.id}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className='process__id'>{step.id}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Process;
