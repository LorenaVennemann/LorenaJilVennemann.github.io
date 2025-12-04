
import React, { useEffect } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {


  useEffect(() => {
    // Fade out splash after 2.2s
    const fadeTimeout = setTimeout(() => {
      const splash = document.querySelector('.splash-screen');
      if (splash) {
        splash.classList.add('fade-out');
      }
    }, 2200);
    // Finish splash after 2.7s
    const finishTimeout = setTimeout(() => {
      onFinish();
    }, 2700);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div className="splash-screen stiff-style">
      <svg
        className="splash-logo-svg"
        width="600"
        height="200"
        viewBox="0 0 600 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Pacifico, cursive"
          fontSize="110"
          fontWeight="700"
          fontStyle="italic"
          fill="#23272b"
        >Lorena</text>
      </svg>
    </div>
  );
};

export default SplashScreen;
