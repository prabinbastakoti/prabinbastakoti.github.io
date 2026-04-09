import { motion } from 'framer-motion';
import './services.scss';

const services = [
  {
    title: 'Product Website Engineering',
    description:
      'High-converting websites with intentional design systems, strong performance, and mobile-first execution.',
  },
  {
    title: 'Full-Stack Application Development',
    description:
      'Robust React and Node.js applications with secure APIs, clean architecture, and long-term maintainability.',
  },
  {
    title: 'SaaS and Dashboard Interfaces',
    description:
      'Professional interfaces for analytics, workflows, and admin portals focused on usability and clarity.',
  },
  {
    title: 'E-Commerce and Payments',
    description:
      'End-to-end commerce flows with smooth checkout journeys, secure transactions, and trust-focused UX.',
  },
  {
    title: 'Performance Optimization',
    description:
      'Faster load times, improved Core Web Vitals, and better responsiveness across real-world devices.',
  },
  {
    title: 'Technical Consulting',
    description:
      'Architecture decisions, roadmap guidance, and implementation support for teams scaling products.',
  },
];

const Services = () => {
  return (
    <div className='services container'>
      <div className='services__header'>
        <p className='section-kicker'>Services</p>
        <h2 className='section-title'>What I can build for you</h2>
      </div>

      <div className='services__grid'>
        {services.map((service, index) => (
          <motion.article
            className='services__card surface'
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Services;
