import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'PrepWise',
    img: '/prepwise.png',
    desc: 'Get Interview-Ready with AI-Powered Practice & Feedback',
    link: 'https://github.com/prabinbastakoti/PrepWise',
    live: 'https://prep-wise-ruddy.vercel.app/',
  },
  {
    id: 2,
    title: 'Pahuna',
    img: '/pahuna.png',
    desc: 'An innovative online homestay marketplace application, designed to revolutionize the way individuals explore, book, and experience homestays nationwide.',
    link: 'https://github.com/prabinbastakoti/Pahuna',
    live: 'https://pahuna.onrender.com/',
  },
  {
    id: 3,
    title: 'ShikshyaLaya',
    img: '/shikshyalaya.png',
    desc: 'ShikshyaLaya is an online Platform trying to Democratize access to data & information every student needs.',
    link: 'https://github.com/prabinbastakoti/Learning-Management-System',
    live: 'https://shikshyalaya.onrender.com/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
              }}
            >
              <a href={item.live} target='_blank'>
                <button>See Live</button>
              </a>
              <a href={item.link} target='_blank'>
                <button>See Github</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
