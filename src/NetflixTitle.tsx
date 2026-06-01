import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isClicked) {
      const audioContext = new AudioContext();
      let sourceNode: AudioBufferSourceNode | undefined;
      let isMounted = true;

      const loadAndPlaySound = async () => {
        try {
          await audioContext.resume();
          const response = await fetch(netflixSound);
          const arrayBuffer = await response.arrayBuffer();
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

          if (!isMounted) return;

          sourceNode = audioContext.createBufferSource();
          sourceNode.buffer = audioBuffer;
          sourceNode.connect(audioContext.destination);
          sourceNode.start(0);
        } catch (err) {
          console.error("Sound error:", err);
        }
      };

      loadAndPlaySound();

      const timer = setTimeout(() => {
        navigate('/browse');
      }, 1100);

      return () => {
        isMounted = false;
        clearTimeout(timer);
        try {
          sourceNode?.stop();
        } catch {
          // The source may have already finished before the route unmounts.
        }
        audioContext.close().catch(() => undefined);
      };
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container">
      {/* Replaced the image with a giant "LV" text */}
      <h1 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        style={{ 
          color: '#E50914', 
          margin: 0,
          lineHeight: 1,
          fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
          letterSpacing: '-1vw'
        }}
      >
        LV
      </h1>
    </div>
  );
};

export default NetflixTitle;
