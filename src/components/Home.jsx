import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Contact from './Contact';
import Back from './Back';
import {useInView} from 'framer-motion';

const Home = () => {
  // Create refs for each section
  const about2 = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null); // Reference to the top of the page
  const aboutRefInView = useInView(about2, {once: true});
  

  const [showBackButton, setShowBackButton] = useState(false);

  // Function to scroll to a specific section
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowBackButton(false);
      } else {
        setShowBackButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={topRef}> {/* Assign ref to the top of the page */}
      <Navbar
        text='Contact'
        scrollToRef={scrollToRef} // Pass scrollToRef function as prop
      />
      <Hero id="hero" /> {/* You can add id to each section for scrolling */}
      
      <About ref={aboutRef} id="about" /> {/* Assign ref to each section */}
      
      <div className='bg-backg-gradient'>
        <Experience ref={experienceRef} id="experience" />
        <Project ref={projectRef} id="projects" />
        <Skills ref={skillsRef} id="skills" />
        <Contact ref={contactRef} id='contact'></Contact>
        <Footer />
        {showBackButton && (
          <Back scrollToRef={scrollToRef} topRef={topRef} /> 
        )}
      </div>
    </div>
  );
}

export default Home;
