"use client"
//  Basic usage with default end value (50)
// <SpeedCounter />

//  Custom end value
// <SpeedCounter endValue={100} />

//  Custom end value and duration (in milliseconds)
// <SpeedCounter endValue={75} duration={2000} />




import PropTypes from 'prop-types';
import  { useState, useEffect } from 'react';

const SpeedCounter = ({ endValue = 50, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      
      // Easing function to start slow and speed up
      const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);
      
      if (progress < duration) {
        const timeProgress = progress / duration;
        const easedProgress = easeOutQuart(timeProgress);
        setCount(Math.floor(easedProgress * endValue));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration]);
  
  return (
    <div className="text-lg text-accentText text-pink-600 font-bold md:text-3xl">
      {count}+
    </div>
  );
};

SpeedCounter.propTypes = {
  endValue : PropTypes.number,
  duration : PropTypes.number
}

export default SpeedCounter;