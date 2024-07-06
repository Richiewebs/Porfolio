import React from 'react';
import project1 from '../assets/project1.png';

const Cards = (props) => {
  return (
    <div className=' bg-white shadow-md rounded-md flex flex-col' style={{ height: 400, width: 400 }}>
      <div className='w-full h-3/5'>
        <img src={project1} alt="Project 1" className='w-full h-full object-cover rounded-md' />
      </div>
      <div className='w-full p-10 flex flex-col '>
        <h1 className='font-bold text-xl pb-5'>{props.title}</h1>
        <p>{props.detail}</p>
      </div>
    </div>
  );
}

export default Cards;
