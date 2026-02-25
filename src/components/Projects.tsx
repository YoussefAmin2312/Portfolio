import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import multipwrCoverImg from '@/assets/multipwr-cover.webp';
import theraImg from '@/assets/thera-project.webp';
import teachlyImg from '@/assets/teachly-project.webp';
import sineaImg from '../../assets/sinea-project.jpg';
import archImg from '../../assets/arch-project.jpg';
import rayaImg from '../../assets/raya-agency-project.png';

type Page = 'websites' | 'case-studies';

const websiteProjects = [
  {
    id: 'sinea',
    title: 'Sinea',
    description: 'Elegant jewelry e-commerce experience — crafted for modern luxury brands',
    image: sineaImg,
    category: 'E-Commerce',
    link: 'https://youssefamin2312.github.io/lin/',
  },
  {
    id: 'arch',
    title: 'Minimal Architecture',
    description: 'Architecture & interior design company website with modern aesthetics',
    image: archImg,
    category: 'Architecture',
    link: 'https://youssefamin2312.github.io/ARCH/',
  },
  {
    id: 'raya',
    title: 'Raya Agency',
    description: 'Full-service photographic agency representing world-class photographers across fashion, editorial, and commercial disciplines',
    image: rayaImg,
    category: 'Photography',
    link: 'https://youssefamin2312.github.io/Photo/',
  },
];

const caseStudyProjects = [
  {
    id: 'teachly',
    title: 'Teachly',
    description: 'Language learning platform connecting students with tutors',
    image: teachlyImg,
    category: 'Education',
  },
  {
    id: 'multipwr',
    title: 'MultiPWR',
    description: 'AI-powered productivity platform combining email generation, grammar checking, and meeting notes',
    image: multipwrCoverImg,
    category: 'UI/UX Design',
  },
  {
    id: 'thera',
    title: 'Thera',
    description: 'Find your therapist - Mental health therapy app',
    image: theraImg,
    category: 'Healthcare',
  },
];

const Projects = () => {
  const [activePage, setActivePage] = useState<Page>('websites');
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">Work</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my design and development work — from live websites to in-depth case studies.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-14">
          <div className="relative flex items-center bg-muted rounded-full p-1 gap-1 shadow-inner">
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-foreground shadow-md"
              animate={{
                left: activePage === 'websites' ? '4px' : '50%',
                right: activePage === 'websites' ? '50%' : '4px',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />
            <button
              onClick={() => setActivePage('websites')}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${activePage === 'websites' ? 'text-background' : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActivePage('case-studies')}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${activePage === 'case-studies' ? 'text-background' : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              UI/UX
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          {activePage === 'websites' ? (
            <motion.div
              key="websites"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="space-y-16 max-w-7xl mx-auto"
            >
              {websiteProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex items-center gap-8 lg:gap-12 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Zigzag: button on left for odd */}
                  {index % 2 === 1 && (
                    <div className="hidden lg:flex flex-1 flex-col items-center gap-4">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-foreground px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-elegant hover:shadow-2xl"
                        >
                          Visit Website <ExternalLink size={18} />
                        </motion.button>
                      </a>
                    </div>
                  )}

                  {/* Card */}
                  <div
                    onClick={() => window.open(project.link, '_blank')}
                    className="group cursor-pointer flex-shrink-0 w-full lg:w-[55%] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="font-heading font-bold text-3xl text-white mb-1">{project.title}</h3>
                        <p className="text-white/90 text-base">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Button on right for even */}
                  {index % 2 === 0 && (
                    <div className="hidden lg:flex flex-1 justify-center">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-foreground px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-elegant hover:shadow-2xl"
                        >
                          Visit Website <ExternalLink size={18} />
                        </motion.button>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="case-studies"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="space-y-16 max-w-7xl mx-auto"
            >
              {caseStudyProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex items-center gap-8 lg:gap-12 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {index % 2 === 1 && (
                    <div className="hidden lg:flex flex-1 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate(`/project/${project.id}`)}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 text-foreground px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-elegant hover:shadow-2xl"
                      >
                        View Case Study
                      </motion.button>
                    </div>
                  )}

                  <div
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="group cursor-pointer flex-shrink-0 w-full lg:w-[55%] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-[400px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="font-heading font-bold text-3xl text-white mb-2">{project.title}</h3>
                        <p className="text-white/90 text-base">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {index % 2 === 0 && (
                    <div className="hidden lg:flex flex-1 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate(`/project/${project.id}`)}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 text-foreground px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-elegant hover:shadow-2xl"
                      >
                        View Case Study
                      </motion.button>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;