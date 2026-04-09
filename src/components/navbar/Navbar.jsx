import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import './navbar.scss';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isElevated, setIsElevated] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsElevated(latest > 40);
  });

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`navbar ${isElevated ? 'isElevated' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className='container navbar__inner'>
        <a href='#home' className='navbar__brand'>
          <strong>Prabin Bastakoti</strong>
        </a>

        <nav className='navbar__desktop' aria-label='Primary'>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className='navbar__actions'>
          <a
            className='btn btn--ghost navbar__resume'
            href='/prabinbastakoti.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>
          <button
            className='navbar__menuButton'
            aria-label='Toggle menu'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={isOpen ? 'line line--one open' : 'line line--one'}></span>
            <span className={isOpen ? 'line line--two open' : 'line line--two'}></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className='navbar__mobile'
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            aria-label='Mobile'
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
