    import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MoodboardUniverse: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#020202', minHeight: '100vh', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* 🔮 CINEMATIC CSS INJECTIONS & ANIMATIONS */}
      <style>{`
        /* CRT/Film Grain Overlay */
        .film-grain {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none;
          z-index: 50;
          background-image: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E');
        }

        .universe-back-btn {
          background: transparent;
          border: 1px solid #333;
          color: #fff;
          padding: 10px 24px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 1, 0.2, 1);
          z-index: 100;
          position: relative;
        }
        
        .universe-back-btn:hover {
          border-color: #ff3333;
          color: #ff3333;
          box-shadow: 0 0 15px rgba(255, 51, 51, 0.3);
          background: rgba(255, 51, 51, 0.05);
        }

        /* The Breathing AI Core */
        .processing-core {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,51,51,0.8) 0%, rgba(255,51,51,0) 70%);
          box-shadow: 0 0 40px rgba(255, 51, 51, 0.4);
          animation: breathe 4s infinite ease-in-out;
          margin-bottom: 40px;
          position: relative;
        }

        .processing-core::after {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 2px solid #ff3333;
          animation: spin-pulse 3s infinite linear;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(0.85); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 80px rgba(255, 51, 51, 0.7); }
        }

        @keyframes spin-pulse {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.5); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 1; }
        }

        .neon-text {
          text-shadow: 0 0 20px rgba(255, 51, 51, 0.6);
        }

        .scanline {
          width: 100%;
          height: 2px;
          background: rgba(255, 51, 51, 0.3);
          position: absolute;
          top: 0; left: 0;
          animation: scan 6s linear infinite;
          z-index: 40;
          box-shadow: 0 0 10px rgba(255, 51, 51, 0.5);
          pointer-events: none;
        }

        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>

      {/* Global Cinematic Elements */}
      <div className="film-grain"></div>
      <div className="scanline"></div>

      {/* Navigation Header */}
      <div style={{ padding: '40px 4%', position: 'relative', zIndex: 100 }}>
        <button onClick={() => navigate(-1)} className="universe-back-btn">
          ← Back to Universe
        </button>
      </div>

      {/* Centered Processing Screen */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        
        {/* Animated Processing Core */}
        <div className="processing-core"></div>

        <span style={{ color: '#ff3333', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '6px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>
          A Portfolio Original
        </span>

        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 15px 0', letterSpacing: '-1px', textTransform: 'uppercase' }}>
          BUFFERING <span style={{ color: '#ff3333' }} className="neon-text">ATMOSPHERE</span>
        </h1>
        
        <p style={{ color: '#666', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '70px', fontWeight: '500' }}>
          This collection is currently in post-production. Add it to your list and check back soon.
        </p>

        {/* Cinematic Quote Box */}
        <div style={{ borderLeft: '3px solid #ff3333', backgroundColor: 'rgba(15, 15, 15, 0.8)', padding: '30px 40px', borderRadius: '0 8px 8px 0', maxWidth: '650px', backdropFilter: 'blur(10px)', borderTop: '1px solid #1a1a1a', borderRight: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.25rem', color: '#eaeaea', lineHeight: '1.6', fontWeight: '300' }}>
            "World-building cannot be rushed. A true visual universe is meticulously curated, frame by frame. Stay connected."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px', justifyContent: 'center' }}>
            <span style={{ height: '1px', width: '30px', backgroundColor: '#ff3333' }}></span>
            <span style={{ color: '#ff3333', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px' }}>
              Visual Architecture
            </span>
            <span style={{ height: '1px', width: '30px', backgroundColor: '#ff3333' }}></span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MoodboardUniverse;