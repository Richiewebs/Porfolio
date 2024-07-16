import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import ContactUs from '../components/Contact'; // Correct path to Contact component
import Back from '../components/Back'; // Correct path to Back component

const Home = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: false, threshold: 0.2 });
  const isExperienceInView = useInView(experienceRef, { once: false, threshold: 0.2 });
  const isProjectInView = useInView(projectRef, { once: false, threshold: 0.2 });
  const isSkillsInView = useInView(skillsRef, { once: false, threshold: 0.2 });
  const isContactInView = useInView(contactRef, { once: false, threshold: 0.2 });

  const [showBackButton, setShowBackButton] = useState(false);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackButton(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div ref={topRef}>
      <Navbar
        text='Contact'
        scrollToRef={() => scrollToRef(contactRef)}
      />
      <Hero id="hero" />
      
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={isAboutInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <About id="about" />
      </motion.section>

      <div className='bg-backg-gradient'>
        <motion.section
          ref={experienceRef}
          initial="hidden"
          animate={isExperienceInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <Experience id="experience" />
        </motion.section>

        <motion.section
          ref={projectRef}
          initial="hidden"
          animate={isProjectInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <Project id="projects" />
        </motion.section>

        <motion.section
          ref={skillsRef}
          initial="hidden"
          animate={isSkillsInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <Skills id="skills" />
        </motion.section>

        <motion.section
          ref={contactRef}
          initial="hidden"
          animate={isContactInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <ContactUs id='contact' />
        </motion.section>

        <Footer />
        {showBackButton && (
          <Back scrollToRef={() => scrollToRef(topRef)} />
        )}
      </div>
    </div>
  );
}

export default Home;
