import React from 'react';

const Skilbox = ({ icon, name }) => {
  return (
    <div className=' bg-white shadow-xl p-12 flex  items-center justify-center' style={{height: 200, width:200}}>
      <img src={icon} alt={name} className='' />
    </div>
  );
};

export default Skilbox;
