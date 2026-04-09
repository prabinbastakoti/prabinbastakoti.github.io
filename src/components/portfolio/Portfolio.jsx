import { motion } from 'framer-motion';
import './portfolio.scss';

const projects = [
  {
    title: 'PrepWise',
    image: '/prepwise.png',
    description:
      'AI-assisted interview preparation platform with guided practice flows and actionable feedback loops.',
    tags: ['React', 'Node.js', 'AI UX'],
    live: 'https://prep-wise-ruddy.vercel.app/',
    source: 'https://github.com/prabinbastakoti/PrepWise',
  },
  {
    title: 'Pahuna',
    image: '/pahuna.png',
    description:
      'Homestay marketplace platform connecting travelers and local hosts through a reliable booking workflow.',
    tags: ['MERN', 'Marketplace', 'Authentication'],
    live: 'https://pahuna.onrender.com/',
    source: 'https://github.com/prabinbastakoti/Pahuna',
  },
  {
    title: 'ShikshyaLaya',
    image: '/shikshyalaya.png',
    description:
      'Learning platform focused on democratizing educational access with structured student-first experiences.',
    tags: ['Education', 'Dashboard', 'API'],
    live: 'https://shikshyalaya.onrender.com/',
    source: 'https://github.com/prabinbastakoti/Learning-Management-System',
  },
  {
    title: 'Portfolio Platform',
    image: '/hero.png',
    description:
      'Personal brand website designed with premium visual language and responsive interactions across all devices.',
    tags: ['Branding', 'UI Engineering', 'Framer Motion'],
    live: 'https://prabinbastakoti.github.io/',
    source: 'https://github.com/prabinbastakoti/prabinbastakoti.github.io',
  },
];

const Portfolio = () => {
  return (
    <div className='portfolio container'>
      <div className='portfolio__header'>
        <p className='section-kicker'>Portfolio</p>
        <h2 className='section-title'>Featured projects</h2>
      </div>

      <div className='portfolio__grid'>
        {projects.map((project, index) => (
          <motion.article
            className='portfolio__card surface'
            key={project.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className='portfolio__imageWrap'>
              <img src={project.image} alt={project.title} />
            </div>

            <div className='portfolio__content'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className='portfolio__tags'>
                {project.tags.map((tag) => (
                  <span className='chip' key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='portfolio__actions'>
                <a href={project.live} target='_blank' rel='noreferrer' className='btn'>
                  Live Demo
                </a>
                <a
                  href={project.source}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn--outline'
                >
                  Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
