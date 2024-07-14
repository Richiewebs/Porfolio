import React from 'react';

const Back = ({ scrollToRef, topRef }) => {
  return (
    <button onClick={() => scrollToRef(topRef)} className='p-5 rounded-full fixed bottom-5 right-5 text-white bg-custom-gradient'>
       Top
    </button>
  );
};

export default Back;

