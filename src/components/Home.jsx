import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Contact from './Contact';

const Home = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
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
        
      </div>
    </div>
  );
}

export default Home;
