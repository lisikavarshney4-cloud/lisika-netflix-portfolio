import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NeonMatrix: React.FC = () => {
  const navigate = useNavigate();
  
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [activePad, setActivePad] = useState<number | null>(null);
  const [level, setLevel] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // The 9 grid pads with their specific neon glow colors
  const pads = [
    { id: 0, color: '#ff0055' }, { id: 1, color: '#00f3ff' }, { id: 2, color: '#bc13fe' },
    { id: 3, color: '#00ff66' }, { id: 4, color: '#ffaa00' }, { id: 5, color: '#ff0055' },
    { id: 6, color: '#bc13fe' }, { id: 7, color: '#00ff66' }, { id: 8, color: '#00f3ff' }
  ];

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setLevel(1);
    setGameOver(false);
    setIsPlaying(true);
    addNewStep([]);
  };

  const addNewStep = (currentSeq: number[]) => {
    const nextPad = Math.floor(Math.random() * 9);
    const newSeq = [...currentSeq, nextPad];
    setSequence(newSeq);
    playSequence(newSeq);
  };

  const playSequence = (seq: number[]) => {
    setIsShowingSequence(true);
    let i = 0;
    
    const interval = setInterval(() => {
      setActivePad(seq[i]);
      
      setTimeout(() => {
        setActivePad(null);
      }, 400); // Pad stays lit for 400ms

      i++;
      if (i >= seq.length) {
        clearInterval(interval);
        setTimeout(() => setIsShowingSequence(false), 400);
      }
    }, 800); // 800ms between each pad light up
  };

  const handlePadClick = (id: number) => {
    if (!isPlaying || isShowingSequence || gameOver) return;

    // Light up pad on click
    setActivePad(id);
    setTimeout(() => setActivePad(null), 200);

    const newPlayerSeq = [...playerSequence, id];
    setPlayerSequence(newPlayerSeq);

    // Check if the current click is correct
    const currentIndex = newPlayerSeq.length - 1;
    if (newPlayerSeq[currentIndex] !== sequence[currentIndex]) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    // Check if the sequence is complete
    if (newPlayerSeq.length === sequence.length) {
      setLevel(prev => prev + 1);
      setPlayerSequence([]);
      setTimeout(() => addNewStep(sequence), 1000);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', overflow: 'hidden', position: 'relative' }}>
      
      {/* Background Grid */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none' }}></div>

      {/* Header */}
      <div style={{ position: 'absolute', top: '30px', left: '30px', zIndex: 10, width: 'calc(100% - 60px)', display: 'flex', justifyContent: 'space-between' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ background: 'rgba(20,20,20,0.8)', border: '1px solid #333', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', backdropFilter: 'blur(5px)', fontSize: '0.85rem', letterSpacing: '1px' }}
        >
          ← Exit Simulator
        </button>
        <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#00f3ff', letterSpacing: '2px', textShadow: '0 0 10px rgba(0,243,255,0.5)' }}>
          LEVEL : {level}
        </div>
      </div>

      <div style={{ zIndex: 5, textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '4px', textTransform: 'uppercase' }}>
          NEON <span style={{ color: '#bc13fe', textShadow: '0 0 20px rgba(188, 19, 254, 0.6)' }}>MATRIX</span>
        </h1>
        <p style={{ color: '#888', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
          {isShowingSequence ? 'Memorize the sequence...' : (isPlaying ? 'Your turn. Replicate it.' : 'Memory Hack Simulator')}
        </p>
      </div>

      {/* The 3x3 Game Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '15px', zIndex: 5, perspective: '1000px' }}>
        {pads.map((pad) => (
          <div
            key={pad.id}
            onClick={() => handlePadClick(pad.id)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: activePad === pad.id ? pad.color : 'rgba(20, 20, 20, 0.6)',
              border: `2px solid ${activePad === pad.id ? '#fff' : 'rgba(255,255,255,0.1)'}`,
              borderRadius: '12px',
              cursor: (!isPlaying || isShowingSequence) ? 'default' : 'pointer',
              boxShadow: activePad === pad.id ? `0 0 30px ${pad.color}` : 'none',
              transform: activePad === pad.id ? 'scale(0.95)' : 'scale(1)',
              transition: 'all 0.15s ease-out',
              backdropFilter: 'blur(10px)'
            }}
          />
        ))}
      </div>

      {/* Game Over / Start Overlay */}
      {(!isPlaying || gameOver) && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {gameOver && (
            <h2 style={{ color: '#ff0055', fontSize: '2.5rem', letterSpacing: '4px', marginBottom: '10px', textShadow: '0 0 20px #ff0055' }}>
              HACK FAILED
            </h2>
          )}
          {gameOver && <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '30px' }}>You reached Level {level}</p>}
          
          <button 
            onClick={startGame}
            style={{ backgroundColor: '#bc13fe', color: '#fff', border: 'none', padding: '15px 40px', borderRadius: '4px', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer', boxShadow: '0 0 30px rgba(188, 19, 254, 0.4)', transition: 'all 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {gameOver ? 'RETRY SEQUENCE' : 'INITIATE HACK'}
          </button>
        </div>
      )}
    </div>
  );
};

export default NeonMatrix;