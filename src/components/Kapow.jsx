import React, { useEffect } from 'react';
import './Kapow.css'; // Import the CSS file for Kapow animation

const Kapow = ({ onAnimationEnd }) => {
  useEffect(() => {
    const kapowElement = document.querySelector('.kapow');
    kapowElement.addEventListener('animationend', onAnimationEnd);

    return () => {
      kapowElement.removeEventListener('animationend', onAnimationEnd);
    };
  }, [onAnimationEnd]);

  return <div className="kapow" style={{ backgroundImage: `url('./gameimg/kapow.png')` }} />;
};

export default Kapow;
