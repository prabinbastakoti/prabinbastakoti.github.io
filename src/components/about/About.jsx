import { motion } from 'framer-motion';
import './about.scss';

const skills = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'TypeScript',
  'PostgreSQL',
  'REST APIs',
  'UI Engineering',
  'Performance Tuning',
  'System Design',
];

const About = () => {
  return (
    <div className='about container'>
      <motion.div
        className='about__intro surface'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <p className='section-kicker'>About Me</p>
        <h2 className='section-title'>Building products with clarity and craft</h2>
        <p>
          I am a full-stack developer focused on delivering dependable software
          with a premium user experience. My approach balances business goals,
          technical quality, and visual polish so products feel both meaningful
          and delightful.
        </p>
      </motion.div>

      <motion.div
        className='about__details'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <div className='about__facts surface'>
          <h3>Quick Highlights</h3>
          <ul>
            <li>Based in Kathmandu, working globally with remote teams.</li>
            <li>Strong focus on scalable architecture and clean code.</li>
            <li>Experience across startups, educational products, and SaaS.</li>
            <li>Comfortable owning projects from idea to launch.</li>
          </ul>
        </div>

        <div className='about__skills surface'>
          <h3>Core Stack</h3>
          <div className='about__chips'>
            {skills.map((skill) => (
              <span className='chip' key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
