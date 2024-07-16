import React from 'react';
import { FiArrowUp } from "react-icons/fi";

const Back = ({ scrollToRef, topRef }) => {
  return (
    <button onClick={() => scrollToRef(topRef)} className='p-2 rounded-full fixed bottom-5 right-5 text-white bg-custom-gradient'>
      <FiArrowUp className='w-10 h-10'/>
    </button>
  );
};

export default Back;

