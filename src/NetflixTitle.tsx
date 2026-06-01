import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';

const NetflixTitle: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Wait exactly 2 seconds, then trigger the zoom animation
    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    // 2. Wait 1.5 seconds for the animation to play, then change the page
    const navigationTimer = setTimeout(() => {
      navigate('/browse');
    }, 3500);

    // Cleanup timers
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className={`netflix-intro-container ${isAnimating ? 'animating' : ''}`}>
      <h1 className="netflix-logo-text">LV</h1>
    </div>
  );
};

export default NetflixTitle;