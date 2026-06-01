import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';

const NetflixTitle: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(netflixSound);
    audioRef.current = audio;
    audio.volume = 0.5;
    audio.play().catch(() => {});

    const animationTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    const navigationTimer = setTimeout(() => {
      navigate('/browse');
    }, 3500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigationTimer);
      audio.pause();
      audioRef.current = null;
    };
  }, [navigate]);

  return (
    <div className={`netflix-intro-container ${isAnimating ? 'animating' : ''}`}>
      <h1 className="netflix-logo-text">LV</h1>
    </div>
  );
};

export default NetflixTitle;