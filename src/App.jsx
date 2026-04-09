import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Process from './components/process/Process';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [showToTop, setShowToTop] = useState(false);
  const glowTopY = useTransform(scrollY, [0, 1500], [0, -280]);
  const glowBottomY = useTransform(scrollY, [0, 1500], [0, -130]);
  const gridY = useTransform(scrollY, [0, 1500], [0, -70]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setShowToTop(latest > 520);
  });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='app'>
      <motion.div className='scrollProgress' style={{ scaleX: scrollYProgress }} />
      <motion.div className='bgGlow bgGlow--top' style={{ y: glowTopY }} />
      <motion.div className='bgGlow bgGlow--bottom' style={{ y: glowBottomY }} />
      <motion.div className='bgGrid' style={{ y: gridY }} />
      <Navbar />

      <main>
        <section id='home' className='section section--hero'>
          <Hero />
        </section>

        <section id='about' className='section'>
          <About />
        </section>

        <section id='services' className='section'>
          <Services />
        </section>

        <section id='process' className='section'>
          <Process />
        </section>

        <section id='experience' className='section'>
          <Experience />
        </section>

        <section id='portfolio' className='section'>
          <Portfolio />
        </section>

        <section id='contact' className='section'>
          <Contact />
        </section>
      </main>

      <footer className='siteFooter'>
        <div className='container siteFooter__inner'>
          <p>&copy; {new Date().getFullYear()} Prabin Bastakoti. All rights reserved.</p>
        </div>
      </footer>

      <AnimatePresence>
        {showToTop && (
          <motion.button
            type='button'
            className='toTop'
            aria-label='Go to top'
            onClick={handleScrollTop}
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.9 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
