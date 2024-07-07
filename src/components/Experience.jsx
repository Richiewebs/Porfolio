import React from 'react';
import umat from '../assets/umat.png';
import aaenics from '../assets/aaenics.png';

const Experience = () => {
  return (
    <div className='w-full bg-exbg p-6 shadow-md'>
      <h1 className='text-btn2 font-bold text-2xl text-center pb-5'>Education & Experience</h1>
      <div className='p-10 flex'>
        <div className='flex items-start space-y-28'>
          <div className='flex h-54  space-y-20 flex-col items-center'>
            <div className='w-42 flex items-center mr-4'>
              <img src={umat} alt="Umat" className='mr-5'/>
              <p className='font-bold text-licol'>Umat</p>
            </div>
            
            <div className='w-42 flex items-center mr-4'>
              <img src={aaenics} alt="Aaenics" className='mr-2' />
              <p className='font-bold text-licol'>Aaenics</p>
            </div>
          </div>
          
        </div>
        
        <div className='h-54 flex flex-col mt-5'>
            
            <ul className="vertical-line-list list-disc space-y-40 ">
              <li className='text-xl text-licol '>Computer Science and Engineering</li>
          
              <li className='text-xl text-licol'>Tutor at Aaenics Robotics Club</li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Experience;
