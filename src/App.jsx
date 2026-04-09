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
  return (
    <div className='app'>
      <div className='ambient ambient--one'></div>
      <div className='ambient ambient--two'></div>
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
