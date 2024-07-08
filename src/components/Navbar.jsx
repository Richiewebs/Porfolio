import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../assets/logo.png'


const Navbar = (props) => {
  return (
    <div className='sticky'>
      <nav className='w-full h-20 bg-white sticky font-sans shadow-md pt-6 h-10'>
        <div className='flex space-x-28 place-content-around'>
          <div className='w-16'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='w-84'>
          <ul className='flex space-x-24 pt-5 cursor-pointer'>
            {/* Use Link from react-scroll for smooth scrolling */}
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About me</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          </ul>
          </div>
          <div className='flex'>
            <button className='btn w-28 h-10 bg-custom-gradient rounded-md text-white'>
              <a href=''><Link to='contact' smooth={true} duration={500}>{props.text}</Link></a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

