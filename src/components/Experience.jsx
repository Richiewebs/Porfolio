import React from 'react';
import umat from '../assets/umat.png';
import aaenics from '../assets/aaenics.png';

const Experience = () => {
  return (
    <div className='w-full bg-exbg p-6 shadow-md'>
      <h1 className='text-btn2 font-bold text-2xl text-center pb-5'>Education & Experience</h1>
      <div className='p-10'>
        <div className='flex items-start space-y-28 flex-col'>
          <div className='flex items-center mb-4'>
            <div className='w-42 flex items-center mr-4'>
              <img src={umat} alt="Umat" className='mr-2' />
              <p className='font-bold'>Umat</p>
            </div>
            <ul className="vertical-line-list list-disc space-y-2">
              <li className='text-xl text-licol'>Computer Science and Engineering</li>
            </ul>
          </div>
          <div className='flex items-center mb-4'>
            <div className='w-42 flex items-center mr-4'>
              <img src={aaenics} alt="Aaenics" className='mr-2' />
              <p className='font-bold'>Aaenics</p>
            </div>
            <ul className="vertical-line-list list-disc space-y-2">
              <li className='text-xl text-licol'>Tutor at Aaenics Robotics Club</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
