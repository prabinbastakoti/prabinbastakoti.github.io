import { motion } from 'framer-motion';
import './services.scss';

const services = [
  {
    title: 'Product Website Engineering',
    description:
      'High-converting websites with intentional design systems, strong performance, and mobile-first execution.',
  },
  {
    title: 'Software Application Development',
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
        <p className='eyebrow'>Services</p>
        <h2 className='sectionTitle'>Built for outcomes, not just features.</h2>
        <p className='sectionLead'>
          End-to-end product work from design systems to modern software builds,
          with a focus on quality, clarity, and measurable business impact.
        </p>
      </div>

      <div className='services__grid'>
        {services.map((service, index) => (
          <motion.article
            className='services__card panel'
            key={service.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <span className='services__index'>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Services;
