import React, { useState, useEffect } from 'react';
import img from '../assets/Rectangle.png';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hey there! I'm Richelle and I'm a ";
  const highlightedText = "FRONTEND DEVELOPER.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
      } else if (index < fullText.length + highlightedText.length) {
        setDisplayedText(prev => fullText + highlightedText.slice(0, index - fullText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayedText('');
          index = -1; // Reset to -1 because it will be incremented to 0 at the start of the next interval
        }, 1000); // Wait 2 seconds before restarting
      }
      index++;
    }, 100); // Adjust the interval speed as needed

    return () => clearInterval(intervalId);
  }, [fullText, highlightedText]);

  return (
    <div className="w-full h-screen relative">
      <img src={img} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-3xl">
          {displayedText.slice(0, fullText.length)}
          {displayedText.length > fullText.length && (
            <span className="block text-6xl font-bold">
              {displayedText.slice(fullText.length)}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Hero;
