import React from 'react';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/js.jpeg';
import pythonIcon from '../assets/python.jpeg';
import reactIcon from '../assets/react.png';
import githubIcon from '../assets/github.png';
import flutterIcon from '../assets/flutter.jpeg';
import arduinoIcon from '../assets/arduino.jpeg';
import Skilbox from './Skilbox';

const Skills = () => {
  const images = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'React', icon: reactIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Flutter', icon: flutterIcon },
    { name: 'Arduino', icon: arduinoIcon }
  ];

  return (
    <div className='bg-slate shadow-md'>
      <h1 className='text-center p-6 text-btn2 font-bold text-2xl'>Skills</h1>
      <div className='m-auto  w-10/12 gap-10 place-content-around p-10 flex flex-wrap justify-around'>
        {images.map((image, index) => (
          <Skilbox key={index} icon={image.icon} name={image.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

