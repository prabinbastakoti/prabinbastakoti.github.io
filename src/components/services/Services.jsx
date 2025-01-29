import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px', once: true });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      whileInView='animate'
      ref={ref}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Custom Web Development</h2>
          <ul>
            <li>
              Develop modern, fully responsive websites tailored to your
              organization.
            </li>
            <li>Ensure fast performance, mobile-friendliness, and security.</li>
            <li>
              Create landing pages, corporate sites, and dynamic web apps.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Full-Stack Web Applications</h2>
          <ul>
            <li>Build powerful web applications with the MERN stack.</li>
            <li>Handle both front-end design and back-end functionality.</li>
            <li>Develop SaaS platforms, CRM systems, and custom dashboards.</li>
          </ul>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>E-commerce Solutions</h2>
          <ul>
            <li>Build custom online stores with seamless user experiences</li>
            <li>Integrate secure payment gateways.</li>
            <li>
              Optimize checkout, product pages, and shopping cart functionality.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h2>Performance Optimization</h2>
          <ul>
            <li>Improve page load speed for better user experience.</li>
            <li>Optimize images, and code for faster performance.</li>
            <li>Enhance website security and mobile responsiveness.</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
