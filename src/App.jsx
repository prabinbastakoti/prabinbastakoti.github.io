import { motion, useScroll, useTransform } from 'framer-motion';
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
  const glowTopY = useTransform(scrollY, [0, 1500], [0, -280]);
  const glowBottomY = useTransform(scrollY, [0, 1500], [0, -130]);
  const gridY = useTransform(scrollY, [0, 1500], [0, -70]);

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
    </div>
  );
};

export default App;
