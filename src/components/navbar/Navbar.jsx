import { useEffect, useState } from 'react';
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
  const [activeHref, setActiveHref] = useState('#home');

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

  useEffect(() => {
    const updateActiveSection = () => {
      let current = '#home';
      const probe = window.scrollY + window.innerHeight * 0.35;

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && probe >= section.offsetTop) {
          current = link.href;
        }
      });

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className='navbar'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <nav className='navbar__desktopRail' aria-label='Primary'>
        <div className='navbar__desktopTrack'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__desktopLink ${
                activeHref === link.href ? 'isActive' : ''
              }`}
            >
              {activeHref === link.href && (
                <motion.span
                  className='navbar__desktopActiveGlow'
                  layoutId='desktopNavActive'
                  transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                />
              )}
              <span className='navbar__desktopText'>{link.label}</span>
            </a>
          ))}
        </div>
      </nav>

      <button
        className='navbar__menuButton'
        aria-label='Toggle menu'
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={isOpen ? 'line line--one open' : 'line line--one'}></span>
        <span className={isOpen ? 'line line--two open' : 'line line--two'}></span>
      </button>

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
                  <span className='navbar__mobileArrow'>{'->'}</span>
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
