import React from 'react';

const Skilbox = ({ icon, name }) => {
  return (
    <div className=' bg-white shadow-md p-12 flex flex-col items-center justify-center' style={{height: 200, width:200}}>
      <img src={icon} alt={name} className='' />
      <div className='pt-4'>
        <p className='text-lg '>{name}</p>

      </div>
    </div>
  );
};

export default Skilbox;
