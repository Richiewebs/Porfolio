import React from 'react'
import img from '../assets/woman.png'
import Button from './Button'


const About = () => {
  return (
    <div className='flex  p-24 space-x-20'>
      <div className='w-2/5 '>
            <img src={img} alt="" srcset="" className='w-full'/>
      </div>
      <div className='w-3/5 place-content-between'>
        <h1 className='text-xl font-bold'>About Me</h1>

        <p className='pt-10 leading-6'>Hi there! I'm Richelle Abakah Asmah, 
            a passionate Frontend Developer dedicated to crafting beautiful and functional web experiences.
            With a keen eye for detail and a strong foundation in modern web technologies, I strive to bring 
            innovative designs to life while ensuring an exceptional user experience. My journey in web development
            is fueled by a love for continuous learning and a commitment to 
            staying at the forefront of industry trends. Let's create something amazing together!
        
        </p>

        <div className='w-42 flex space-x-20 pt-20'>
        <Button text='Hire me'></Button>
        <button className='w-32 h-10 bg-btn2 rounded-md text-white'>Resume</button>
        </div>
      </div>

    </div>
  )
}

export default About
