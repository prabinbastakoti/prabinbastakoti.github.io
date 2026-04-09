import { useEffect, useState } from 'react';
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

const menuListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isElevated, setIsElevated] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${Math.max(scrollbarWidth, 0)}px`;

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsElevated((previous) => {
      if (!previous && latest > 64) {
        return true;
      }
      if (previous && latest < 24) {
        return false;
      }
      return previous;
    });
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
        <nav className='navbar__desktop' aria-label='Primary'>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className='navbar__actions'>
          <button
            className='navbar__menuButton'
            aria-label='Toggle menu'
            aria-expanded={isOpen}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label='Mobile'
          >
            <button
              className='navbar__mobileClose'
              type='button'
              aria-label='Close menu'
              onClick={closeMenu}
            >
              <span className='line line--one'></span>
              <span className='line line--two'></span>
            </button>

            <motion.div
              className='navbar__mobileBody'
              variants={menuListVariants}
              initial='hidden'
              animate='show'
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className='navbar__mobileLink'
                  variants={menuItemVariants}
                >
                  <span className='navbar__mobileIndex'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className='navbar__mobileLabel'>{link.label}</span>
                  <span className='navbar__mobileArrow'>→</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
