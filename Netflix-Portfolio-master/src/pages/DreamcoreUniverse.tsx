import React, { useState, useEffect } from 'react';
import './DreamcoreUniverse.css';

// Using your existing images as surreal memory fragments
import caseStudyImg from '../images/case-study.png';
import visualGalleryImg from '../images/visual-gallery.png';
import skillsImg from '../images/skills.png';
import contactMeImg from '../images/contact-me.png';
import writeupsImg from '../images/writeups.png';

// Define the fragments of the universe
const FRAGMENTS = [
  { id: 1, type: 'image', src: caseStudyImg, caption: "Archived_Strategy_01.png", top: '15%', left: '10%', width: '300px', height: '200px', unlockLevel: 1 },
  { id: 2, type: 'image', src: visualGalleryImg, caption: "Moodboard // 03:00 AM", top: '25%', left: '60%', width: '250px', height: '350px', unlockLevel: 2 },
  { id: 3, type: 'text', content: "drifting through the feed...", top: '60%', left: '15%', width: '200px', height: 'auto', unlockLevel: 3 },
  { id: 4, type: 'image', src: writeupsImg, caption: "Thoughts left unspoken.", top: '65%', left: '45%', width: '320px', height: '180px', unlockLevel: 4 },
  { id: 5, type: 'text', content: "the algorithm remembers.", top: '20%', left: '40%', width: '250px', height: 'auto', unlockLevel: 5 },
  { id: 6, type: 'image', src: skillsImg, caption: "System_Architecture_V2", top: '50%', left: '75%', width: '200px', height: '280px', unlockLevel: 6 },
  { id: 7, type: 'image', src: contactMeImg, caption: "Digital Footprint.", top: '75%', left: '25%', width: '280px', height: '160px', unlockLevel: 7 },
  { id: 8, type: 'text', content: "a beautiful chaos.", top: '40%', left: '80%', width: '150px', height: 'auto', unlockLevel: 8 },
];

const DreamcoreUniverse: React.FC = () => {
  const [immersionLevel, setImmersionLevel] = useState(0);

  // Slowly pull the user deeper into the experience over time
  useEffect(() => {
    const driftTimer = setInterval(() => {
      setImmersionLevel(prev => {
        if (prev < 10) return prev + 1;
        return prev;
      });
    }, 3500); // Increases immersion every 3.5 seconds

    return () => clearInterval(driftTimer);
  }, []);

  // Accelerate immersion when they actively explore
  const handleInteraction = () => {
    setImmersionLevel(prev => Math.min(prev + 1, 10));
  };

  // Determine the atmospheric depth for CSS targeting
  const getDepthState = () => {
    if (immersionLevel < 3) return "surface";
    if (immersionLevel < 7) return "drifting";
    return "deep";
  };

  return (
    <div className="dreamcore-root" data-depth={getDepthState()}>
      <div className="ambient-glow" />

      <div className="universe-viewport">
        
        {/* The Initial Anchor */}
        <div className="cinematic-header">
          <h1 className="dream-title">The Archive</h1>
          <p className="dream-subtitle">Explore the fragments</p>
        </div>

        {/* The Evolving Digital Memories */}
        {FRAGMENTS.map((fragment) => {
          const isVisible = immersionLevel >= fragment.unlockLevel;
          
          return (
            <div
              key={fragment.id}
              className={`memory-fragment ${fragment.type}-fragment ${isVisible ? 'visible' : ''}`}
              onMouseEnter={handleInteraction}
              style={{
                top: fragment.top,
                left: fragment.left,
                width: fragment.width,
                height: fragment.height,
                zIndex: fragment.unlockLevel,
                animation: isVisible ? `driftSlow ${8 + (fragment.id % 4)}s ease-in-out infinite alternate` : 'none',
                animationDelay: `${fragment.id * 0.5}s`
              }}
            >
              {fragment.type === 'image' ? (
                <>
                  <img src={fragment.src} alt="Memory Fragment" className="fragment-image" />
                  <div className="fragment-caption">{fragment.caption}</div>
                </>
              ) : (
                <div>{fragment.content}</div>
              )}
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default DreamcoreUniverse;