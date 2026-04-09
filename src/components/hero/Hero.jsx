import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import './hero.scss';

const metrics = [
  { value: '4+', label: 'Years' },
  { value: '18+', label: 'Products launched' },
  { value: '99%', label: 'Delivery reliability' },
];

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const { scrollY } = useScroll();

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const glowX = useMotionValue(16);
  const glowY = useMotionValue(14);

  const smoothTiltX = useSpring(tiltX, { stiffness: 180, damping: 22, mass: 0.45 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 180, damping: 22, mass: 0.45 });
  const smoothGlowX = useSpring(glowX, { stiffness: 120, damping: 20 });
  const smoothGlowY = useSpring(glowY, { stiffness: 120, damping: 20 });
  const dynamicShine = useMotionTemplate`radial-gradient(circle at ${smoothGlowX}% ${smoothGlowY}%, rgba(255, 255, 255, 0.54) 0%, rgba(255, 255, 255, 0) 24%)`;

  const contentY = useTransform(scrollY, [0, 900], [0, -42]);
  const portraitY = useTransform(scrollY, [0, 900], [0, -55]);
  const statusY = useTransform(scrollY, [0, 900], [0, -20]);
  const haloY = useTransform(scrollY, [0, 900], [0, -36]);
  const imageY = useTransform(scrollY, [0, 900], [0, -20]);

  const handleImageMove = (event) => {
    if (!cardRef.current || window.innerWidth < 900) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    tiltY.set((x - 0.5) * 11);
    tiltX.set((0.5 - y) * 10);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const resetImageTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
    glowX.set(16);
    glowY.set(14);
  };

  return (
    <div className='hero container' ref={heroRef}>
      <motion.div
        className='hero__content'
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7 }}
      >
        <p className='eyebrow'>Software Developer | Kathmandu, Nepal</p>
        <h1 className='hero__title'>
          Digital products with
          <span> clean architecture and luxury-level UI craft.</span>
        </h1>
        <p className='hero__lead'>
          I partner with founders and teams to design and ship premium web
          platforms that are fast, elegant, and engineered for long-term scale.
        </p>

        <div className='hero__actions'>
          <a
            href='/prabinbastakoti.pdf'
            target='_blank'
            rel='noreferrer'
            className='btn btn--primary'
          >
            View resume
          </a>
          <a href='#contact' className='btn btn--ghost'>
            Start a project
          </a>
        </div>

        <ul className='hero__metrics'>
          {metrics.map((metric) => (
            <li key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className='hero__visual'
        style={{ y: portraitY }}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div className='hero__halo' style={{ y: haloY }} />
        <motion.div
          className='hero__imageWrap panel'
          ref={cardRef}
          style={{
            rotateX: smoothTiltX,
            rotateY: smoothTiltY,
          }}
          onMouseMove={handleImageMove}
          onMouseLeave={resetImageTilt}
        >
          <div className='hero__imageBack'></div>
          <motion.div className='hero__shine' style={{ background: dynamicShine }} />
          <div className='hero__ring hero__ring--one'></div>
          <div className='hero__ring hero__ring--two'></div>

          <motion.img
            className='hero__portrait'
            src='/hero.png'
            alt='Portrait of Prabin Bastakoti'
            style={{ y: imageY }}
          />

          <motion.div className='hero__badge' style={{ y: statusY }}>
            Available for new projects
          </motion.div>

          <div className='hero__floating hero__floating--one'>
            Premium UX
          </div>
          <div className='hero__floating hero__floating--two'>React + Node</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
