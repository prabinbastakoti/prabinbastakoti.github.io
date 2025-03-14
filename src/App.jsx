import './app.scss';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

const App = () => {
  return (
    <>
      <div className='desktop'>
        <Cursor />
        <section id='Homepage'>
          <Navbar />
          <Hero />
        </section>
        <section id='Services'>
          <Parallax type='services' />
        </section>
        <section>
          <Services />
        </section>
        <section id='Portfolio'>
          <Parallax type='portfolio' />
        </section>
        <Portfolio />
        <section id='Contact'>
          <Contact />
        </section>
      </div>
      <div className='mobile'>
        <div className='mobile__container'>
          <img src='/mobile.png' alt='' />
          <h1>Please access this site on a PC</h1>
        </div>
      </div>
    </>
  );
};

export default App;
