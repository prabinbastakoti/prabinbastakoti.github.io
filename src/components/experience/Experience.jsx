import { motion } from 'framer-motion';
import './experience.scss';

const timeline = [
  {
    period: '2024 - Present',
    role: 'Full-Stack Developer',
    company: 'Independent and Client Projects',
    details:
      'Designing and shipping production-ready web apps with React, Node.js, and modern cloud workflows.',
  },
  {
    period: '2023 - 2024',
    role: 'MERN Stack Project Lead',
    company: 'Product Development Initiatives',
    details:
      'Led architecture and implementation for education and marketplace products with focus on scalability.',
  },
  {
    period: '2021 - 2023',
    role: 'Frontend Developer',
    company: 'Freelance and Collaborative Teams',
    details:
      'Built responsive interfaces, component systems, and interactive experiences across diverse projects.',
  },
];

const Experience = () => {
  return (
    <div className='experience container'>
      <div className='experience__header'>
        <p className='section-kicker'>Experience</p>
        <h2 className='section-title'>Timeline of impact</h2>
      </div>

      <div className='experience__timeline'>
        {timeline.map((item, index) => (
          <motion.article
            className='experience__item surface'
            key={item.period + item.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <p className='experience__period'>{item.period}</p>
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <p>{item.details}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
