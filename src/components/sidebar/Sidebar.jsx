import { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links/Links';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <motion.div
      className='sidebar'
      initial={false}
      animate={open ? 'open' : 'closed'}
    >
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={toggleSidebar} />
    </motion.div>
  );
};

export default Sidebar;
