import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';

const NetflixTitle: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Wait exactly 1 second when the website loads
    const initialWait = setTimeout(() => {
      // 2. Play the initial animation
      setIsAnimating(true);
      
      // Try to play sound (may be blocked by browser autoplay policies, but will silently fail)
      try {
        const audio = new Audio(netflixSound);
        audio.play().catch(e => console.warn("Autoplay blocked:", e));
      } catch (err) {
        console.warn("Audio error:", err);
      }
      
      // 3. Wait for the animation to finish (1.5 seconds) then load the homepage
      setTimeout(() => {
        setShowLogo(false);
        navigate('/browse');
      }, 1500);
      
    }, 1000);

    return () => {
      clearTimeout(initialWait);
    };
  }, [navigate]);

  if (!showLogo) return null;

  return (
    <div className={`netflix-intro-container ${isAnimating ? 'animating' : ''}`}>
      <h1 className="netflix-logo-text">LV</h1>
    </div>
  );
};

export default NetflixTitle;