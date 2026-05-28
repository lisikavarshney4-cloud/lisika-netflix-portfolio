import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      const audioContext = new AudioContext();
      let sourceNode: AudioBufferSourceNode;

      const loadAndPlaySound = async () => {
        try {
          await audioContext.resume();
          const response = await fetch(netflixSound);
          const arrayBuffer = await response.arrayBuffer();
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

          sourceNode = audioContext.createBufferSource();
          sourceNode.buffer = audioBuffer;
          sourceNode.connect(audioContext.destination);
          sourceNode.start(0);
        } catch (err) {
          console.error("Sound error:", err);
        }
      };

      loadAndPlaySound();

      // Navigate after sound finishes
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  const handleStart = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  return (
    <div className="netflix-container" onClick={handleStart}>
      {/* Replaced the image with a giant "LV" text */}
      <h1 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        style={{ 
          fontSize: '25vw', 
          color: '#E50914', 
          margin: 0,
          lineHeight: 1,
          fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
          letterSpacing: '-1vw',
          cursor: 'pointer'
        }}
      >
        LV
      </h1>
    </div>
  );
};

export default NetflixTitle;