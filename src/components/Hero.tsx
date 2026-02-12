import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

declare global {
  interface Window {
    VANTA: any;
  }
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && vantaRef.current && window.VANTA) {
        try {
          setVantaEffect(
            window.VANTA.BIRDS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              backgroundColor: 0xffffff,
              birdSize: 0.50,
              wingSpan: 10.00,
              separation: 79.00,
              alignment: 26.00,
              cohesion: 31.00,
            })
          );
        } catch (e) {
          console.error('Vanta BIRDS init error:', e);
        }
      }
    };

    // Wait for CDN scripts to load
    if (window.VANTA) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA) {
          clearInterval(interval);
          initVanta();
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Vanta.js HALO Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-10"
      />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        style={{ y, opacity }}
      >
        <div className="flex justify-center lg:justify-start">
          <motion.div
            className="space-y-6 text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main heading - one line */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight whitespace-nowrap"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span style={{ color: '#1F2937' }}>Hi, I am </span>
                <span style={{ color: '#000000' }}>
                  Youssef Yasser
                </span>
              </h1>

              {/* Type animation */}
              <div className="h-10 text-sm md:text-base tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <TypeAnimation
                  sequence={[
                    'UI/UX Designer',
                    2000,
                    'Mobile App Developer',
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={Infinity}
                  className="min-h-[2.5rem] flex items-center lg:justify-start justify-center"
                  style={{ color: '#6B7280', fontWeight: 500, letterSpacing: '0.05em' }}
                />
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed max-w-sm"
                style={{
                  color: '#9CA3AF',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                A computer engineer passionate about crafting beautiful interfaces and building seamless mobile experiences.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex lg:justify-start justify-center gap-3 pt-1 flex-wrap"
            >
              <a href="#projects">
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-2.5 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-sm hover:shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #E07A5F, #D4615A)',
                    color: '#FFFFFF',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                  }}
                >
                  <ArrowDown size={14} strokeWidth={1.5} />
                  <span>View My Work</span>
                </motion.button>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=youssef.yasser.1408@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-2.5 rounded-full transition-all duration-300"
                  style={{
                    border: '1.5px solid #D1D5DB',
                    color: '#374151',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Contact Me
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          href="#projects"
          className="flex flex-col items-center gap-1.5 transition-colors"
          style={{ color: '#9CA3AF' }}
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Scroll
          </span>
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
