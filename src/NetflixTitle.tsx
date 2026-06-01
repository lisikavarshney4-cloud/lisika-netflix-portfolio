import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';

const NetflixTitle: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const navigationTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Chain the timeouts to guarantee the sequence even if the browser lags during load
    animationTimerRef.current = setTimeout(() => {
      setIsAnimating(true);
      
      // Wait 1.5 seconds for the animation to play, then change the page
      navigationTimerRef.current = setTimeout(() => {
        navigate('/browse');
      }, 1500);

    }, 1000);

    // Cleanup timers
    return () => {
      if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
      if (navigationTimerRef.current) clearTimeout(navigationTimerRef.current);
    };
  }, [navigate]);

  return (
    <div className={`netflix-intro-container ${isAnimating ? 'animating' : ''}`}>
      <h1 className="netflix-logo-text">LV</h1>
    </div>
  );
};

export default NetflixTitle;