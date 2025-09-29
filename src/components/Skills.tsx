import { useState, useEffect, useRef } from 'react';
import { Palette, Code2, Figma, Pencil, Image, Users, FileText, TestTube, Split, LayoutGrid, Map, UserCircle, CheckCircle, Github, Smartphone, Flame, Database, Code, Terminal } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const designSkills = [
    { name: 'Figma', icon: Figma },
    { name: 'Adobe XD', icon: Pencil },
    { name: 'Canva', icon: Image },
    { name: 'User Interviews', icon: Users },
    { name: 'Surveys & Questionnaires', icon: FileText },
    { name: 'Usability Testing', icon: TestTube },
    { name: 'A/B Testing', icon: Split },
    { name: 'Card Sorting', icon: LayoutGrid },
    { name: 'Affinity Mapping', icon: Map },
    { name: 'Personas & Journey Mapping', icon: UserCircle },
    { name: 'Heuristic Evaluation', icon: CheckCircle }
  ];

  const techSkills = [
    { name: 'Github', icon: Github },
    { name: 'Flutter', icon: Smartphone },
    { name: 'Firebase', icon: Flame },
    { name: 'SQLite', icon: Database },
    { name: 'Python', icon: Code },
    { name: 'Matlab', icon: Terminal }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Design and Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to create exceptional digital experiences.
          </p>
        </div>

        {/* Design Stack */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Palette className="text-primary mr-3" size={32} />
            <h3 className="font-heading font-semibold text-2xl text-foreground">
              Design & User Research Stack
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <div className={`flex gap-6 ${isVisible ? 'animate-scroll' : ''}`}>
              {[...designSkills, ...designSkills].map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 bg-background/50 backdrop-blur-sm border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover-scale transition-all duration-300"
                >
                  <skill.icon className="text-primary" size={24} />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Code2 className="text-primary mr-3" size={32} />
            <h3 className="font-heading font-semibold text-2xl text-foreground">
              Tech Stack
            </h3>
          </div>
          <div className="relative overflow-hidden">
            <div className={`flex gap-6 ${isVisible ? 'animate-scroll-reverse' : ''}`}>
              {[...techSkills, ...techSkills, ...techSkills].map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 bg-background/50 backdrop-blur-sm border border-border rounded-xl px-6 py-4 flex items-center gap-3 hover-scale transition-all duration-300"
                >
                  <skill.icon className="text-primary" size={24} />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;