import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className='navbar'
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className='container navbar__inner'>
        <a href='#home' className='navbar__brand'>
          <span>PRABIN</span>
          <span>BASTAKOTI</span>
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
            className='btn btn--outline navbar__resume'
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
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className='navbar__mobile'
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
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
