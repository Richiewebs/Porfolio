import React from 'react';
import img from '../assets/woman.png';
import Button from './Button';
import Tab from './Tab';

const About = () => {
  return (
    <div id = 'about' className='flex flex-col'>
    <div className='flex p-24 space-x-20'>
      <div className='w-2/5 relative'>
        <div className='absolute -top-5 left-32 w-4/5  h-full'>
          <div className='w-full h-full bg-piccol border-8 border-bocol' style={{ height: '115%' }}></div>
        </div>
        <img src={img} alt="Profile" className='w-full relative z-10' />
      </div>
      <div className='w-3/5'>
        <h1 className='text-xl font-bold'>About Me</h1>
        <p className='pt-10 leading-6'>
          Hi there! I'm Richelle Abakah Asmah, a passionate Frontend Developer dedicated to crafting beautiful and functional web experiences.
          With a keen eye for detail and a strong foundation in modern web technologies, I strive to bring innovative designs to life while ensuring an exceptional user experience.
          My journey in web development is fueled by a love for continuous learning and a commitment to staying at the forefront of industry trends. Let's create something amazing together!
        </p>
        <div className='flex space-x-20 pt-20'>
          <Button text='Hire me' />
          <button className='w-32 h-10 bg-btn2 rounded-md text-white'>Resume</button>
        </div>
      </div>
    </div>

    <div className='mt-10'>
    <Tab></Tab>
    </div>
    </div>
  );
}

export default About;
