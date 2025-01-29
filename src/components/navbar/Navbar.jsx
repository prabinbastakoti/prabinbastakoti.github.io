import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className='social'>
          <a
            href='https://www.facebook.com/people/Prabin-Bastakoti/pfbid024JwrPsCrJpScc4icNPR2vzMiQHjaAqX1zxYMtnxZYKhyFhFVTDKax6R4TZG6PZSfl/'
            target='_blank'
          >
            <img src='/facebook.png' alt='' />
          </a>
          <a href='https://www.instagram.com/prabinbastakotii/' target='_blank'>
            <img src='/instagram.png' alt='' />
          </a>
          <a
            href='https://www.linkedin.com/in/prabin-bastakoti-4561a62a9'
            target='_blank'
          >
            <img src='/linkedin.png' alt='' />
          </a>
          <a href='https://github.com/prabinbastakoti' target='_blank'>
            <img src='/github.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
