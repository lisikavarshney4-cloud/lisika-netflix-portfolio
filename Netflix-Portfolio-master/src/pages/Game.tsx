import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Game: React.FC = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // React State for UI overlays
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Mutable Game State (refs avoid React re-render lag during the game loop)
  const gameRef = useRef({
    player: { x: 0, y: 0, size: 15, speed: 0.1 },
    obstacles: [] as { x: number; y: number; size: number; speed: number; color: string }[],
    particles: [] as { x: number; y: number; vx: number; vy: number; life: number; color: string }[],
    stars: [] as { x: number; y: number; speed: number; size: number }[],
    score: 0,
    frames: 0,
    animationId: 0,
    mouseX: 0,
    mouseY: 0
  });

  // Initialize Game & Stars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Full screen canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const state = gameRef.current;
    state.player.x = canvas.width / 2;
    state.player.y = canvas.height - 100;
    state.mouseX = canvas.width / 2;
    state.mouseY = canvas.height - 100;

    // Create background stars
    for (let i = 0; i < 100; i++) {
      state.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 0.5,
        size: Math.random() * 2
      });
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Controls (Mouse & Touch)
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const state = gameRef.current;
      if (e instanceof MouseEvent) {
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
      } else if (e.touches.length > 0) {
        state.mouseX = e.touches[0].clientX;
        state.mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: false });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  // Main Game Loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const loop = () => {
      const state = gameRef.current;
      state.frames++;
      state.score++;
      
      // Update React score every 10 frames to avoid render lag
      if (state.frames % 10 === 0) setScore(Math.floor(state.score / 10));

      // Clear Canvas with motion blur effect
      ctx.fillStyle = 'rgba(2, 2, 2, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Parallax Stars
      ctx.fillStyle = '#ffffff';
      state.stars.forEach(star => {
        star.y += star.speed + (state.score / 5000); // Speed up over time
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Smooth Player Movement (Lerp)
      state.player.x += (state.mouseX - state.player.x) * 0.15;
      state.player.y += (state.mouseY - state.player.y) * 0.15;

      // Draw Player (Neon Triangle)
      ctx.save();
      ctx.translate(state.player.x, state.player.y);
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#00f3ff';
      ctx.fillStyle = '#00f3ff';
      ctx.beginPath();
      ctx.moveTo(0, -state.player.size);
      ctx.lineTo(state.player.size, state.player.size);
      ctx.lineTo(-state.player.size, state.player.size);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Spawn Obstacles (Increases difficulty over time)
      if (state.frames % Math.max(10, 40 - Math.floor(state.score / 500)) === 0) {
        state.obstacles.push({
          x: Math.random() * canvas.width,
          y: -50,
          size: Math.random() * 20 + 15,
          speed: Math.random() * 4 + 3 + (state.score / 2000),
          color: '#ff3333'
        });
      }

      // Update & Draw Obstacles
      for (let i = state.obstacles.length - 1; i >= 0; i--) {
        const obs = state.obstacles[i];
        obs.y += obs.speed;

        ctx.shadowBlur = 15;
        ctx.shadowColor = obs.color;
        ctx.fillStyle = obs.color;
        ctx.fillRect(obs.x - obs.size, obs.y - obs.size, obs.size * 2, obs.size * 2);

        // Collision Detection (Circle vs Square approximation)
        const dist = Math.hypot(state.player.x - obs.x, state.player.y - obs.y);
        if (dist < state.player.size + obs.size - 5) {
          // CREATE EXPLOSION PARTICLES
          for(let p = 0; p < 30; p++) {
            state.particles.push({
              x: state.player.x, y: state.player.y,
              vx: (Math.random() - 0.5) * 15,
              vy: (Math.random() - 0.5) * 15,
              life: 1.0, color: '#00f3ff'
            });
          }
          endGame();
        }

        // Remove off-screen obstacles
        if (obs.y > canvas.height + 50) state.obstacles.splice(i, 1);
      }

      // Update & Draw Particles (Explosion effect)
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        
        if (p.life <= 0) {
          state.particles.splice(i, 1);
        } else {
          ctx.globalAlpha = p.life;
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1.0;
        }
      }

      state.animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(gameRef.current.animationId);
  }, [gameState]);

  const startGame = () => {
    const canvas = canvasRef.current;
    gameRef.current.obstacles = [];
    gameRef.current.particles = [];
    gameRef.current.score = 0;
    gameRef.current.frames = 0;
    if (canvas) {
      gameRef.current.player.x = canvas.width / 2;
      gameRef.current.player.y = canvas.height - 100;
    }
    setScore(0);
    setGameState('playing');
  };

  const endGame = () => {
    cancelAnimationFrame(gameRef.current.animationId);
    setGameState('gameover');
    setHighScore(prev => Math.max(prev, Math.floor(gameRef.current.score / 10)));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#020202', overflow: 'hidden', position: 'relative', touchAction: 'none' }}>
      
      {/* HUD & Navigation */}
      <div style={{ position: 'absolute', top: '30px', left: '30px', zIndex: 50, display: 'flex', justifyContent: 'space-between', width: 'calc(100% - 60px)', pointerEvents: 'none' }}>
        <button 
          onClick={() => navigate('/browse')} 
          style={{ pointerEvents: 'auto', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', backdropFilter: 'blur(5px)' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          ← Exit Simulator
        </button>
        
        {gameState === 'playing' && (
          <div style={{ color: '#00f3ff', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '2px', textShadow: '0 0 10px #00f3ff' }}>
            {score}
          </div>
        )}
      </div>

      {/* The Game Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', cursor: gameState === 'playing' ? 'none' : 'default' }} 
      />

      {/* UI Overlays */}
      {gameState !== 'playing' && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
          
          <h1 style={{ color: '#fff', fontSize: '5rem', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-2px', textTransform: 'uppercase', textShadow: '0 0 30px rgba(0, 243, 255, 0.6)' }}>
            VOID <span style={{ color: '#00f3ff' }}>RUNNER</span>
          </h1>
          
          {gameState === 'gameover' ? (
            <>
              <p style={{ color: '#ff3333', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>SYSTEM FAILURE</p>
              <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Score</div>
                  <div style={{ color: '#fff', fontSize: '2rem', fontWeight: '900' }}>{score}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>High Score</div>
                  <div style={{ color: '#00f3ff', fontSize: '2rem', fontWeight: '900', textShadow: '0 0 15px #00f3ff' }}>{highScore}</div>
                </div>
              </div>
            </>
          ) : (
            <p style={{ color: '#aaa', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px', textAlign: 'center', maxWidth: '400px', lineHeight: '1.6' }}>
              Navigate the void. Dodge the red anomalies. Survive as long as you can.
            </p>
          )}

          <button 
            onClick={startGame}
            style={{ backgroundColor: '#00f3ff', color: '#000', border: 'none', padding: '16px 50px', borderRadius: '4px', fontSize: '1.1rem', fontWeight: '900', letterSpacing: '3px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 0 30px rgba(0, 243, 255, 0.5)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.boxShadow = '0 0 40px rgba(255,255,255,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#00f3ff'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.5)'; }}
          >
            {gameState === 'start' ? 'INITIATE' : 'REBOOT SYSTEM'}
          </button>
        </div>
      )}

    </div>
  );
};

export default Game;