import { useNavigate } from 'react-router-dom';
import bookHeavenImg from '@/assets/book-heaven-project.jpg';
import mendAiImg from '@/assets/mend-ai-project.jpg';
import yogaSkincareImg from '@/assets/yoga-skincare-project.jpg';
import cyberPhysicalImg from '@/assets/cyber-physical-project.jpg';
import temperatureSensorImg from '@/assets/temperature-sensor-project.jpg';
import portfolioWebsiteImg from '@/assets/portfolio-website-project.jpg';
const Projects = () => {
  const navigate = useNavigate();
  const projects = [{
    id: 'book-heaven',
    title: 'Book Heaven',
    description: 'Flutter bookstore app developed during internship',
    image: bookHeavenImg,
    category: 'Mobile App'
  }, {
    id: 'mend-ai',
    title: 'Mend - AI Couples Therapy',
    description: 'MVP for a voice-based AI couples therapy app',
    image: mendAiImg,
    category: 'AI/Healthcare'
  }, {
    id: 'yoga-skincare',
    title: 'Yoga Face & Skin Care',
    description: 'Wellness app focusing on facial yoga exercises',
    image: yogaSkincareImg,
    category: 'Wellness'
  }, {
    id: 'cyber-physical',
    title: 'Cyber-Physical Systems',
    description: 'Advanced autonomous vehicle simulation project',
    image: cyberPhysicalImg,
    category: 'Engineering'
  }, {
    id: 'temperature-sensor',
    title: 'Digital Temperature Sensor',
    description: 'IoT project using Arduino and DS18B20 sensor',
    image: temperatureSensorImg,
    category: 'IoT'
  }, {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website',
    image: portfolioWebsiteImg,
    category: 'Web Development'
  }];
  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };
  return <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">Work</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning mobile development, AI integration, IoT systems, and user experience design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <div key={index} onClick={() => handleProjectClick(project.id)} className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-80 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                {/* Gradient overlay - always visible but intensifies on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <h3 className="font-heading font-bold text-2xl text-white mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;