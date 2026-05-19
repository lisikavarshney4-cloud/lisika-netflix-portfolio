import React, { useState } from 'react'; // 🚀 Added useState for modal control

interface StrategicAsset {
  id: number;
  type: 'Image' | 'Video';
  src: string;
}

const VisualGallery: React.FC = () => {
  // 🍿 Active asset state for lightbox
  const [selectedAsset, setSelectedAsset] = useState<StrategicAsset | null>(null);

  const strategicAssets: StrategicAsset[] = [
    { id: 1, type: "Image", src: "/visual-gallery/monument.png" },
    { id: 2, type: "Video", src: "/visual-gallery/cafe-1.mp4" },
    { id: 3, type: "Video", src: "/visual-gallery/cafe-2.mp4" },
    { id: 4, type: "Video", src: "/visual-gallery/sunlight.mp4" },
    { id: 5, type: "Video", src: "/visual-gallery/shake.mp4" },
    { id: 6, type: "Image", src: "/visual-gallery/architect.png" },
    { id: 7, type: "Video", src: "/visual-gallery/rain.mp4" },
    { id: 8, type: "Image", src: "/visual-gallery/day.png" },
    { id: 9, type: "Video", src: "/visual-gallery/street.mp4" }
  ];

  return (
    <div style={{ padding: '60px 0 80px 0', backgroundColor: 'transparent', width: '100%', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1400px', width: '92%', margin: '0 auto' }}>
        
        {/* 🎬 CINEMATIC HEADING SECTION */}
        <div style={{ marginBottom: '45px', textAlign: 'left' }}>
          <h1 style={{ 
            color: '#fff', 
            fontSize: '2.4rem', 
            fontWeight: '800', 
            letterSpacing: '1.5px',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
          }}>
            NOW STREAMING
          </h1>
          <p style={{ 
            color: '#aaa', 
            fontSize: '1.1rem', 
            margin: '0',
            fontWeight: '400',
            letterSpacing: '0.5px'
          }}>
            Raw clips, quiet moments, and the world through my camera.
          </p>
        </div>
        
        {/* --- GRID --- */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', 
          gap: '24px' 
        }}>
          {strategicAssets.map((asset) => (
            <div 
              key={asset.id}
              onClick={() => setSelectedAsset(asset)} // 👈 Clicking opens full-screen mode
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease',
                cursor: 'pointer',
                height: '280px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04) translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.6)';
                
                const video = e.currentTarget.querySelector('video');
                if (video) video.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ width: '100%', height: '100%', backgroundColor: '#000' }}>
                {asset.type === 'Video' ? (
                  <video 
                    src={asset.src} 
                    loop 
                    muted 
                    playsInline
                    preload="auto" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
                  />
                ) : (
                  <img 
                    src={asset.src} 
                    loading="lazy" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
                    alt="Portfolio showcase asset"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🖥️ FULL SCREEN CINEMA LIGHTBOX MODAL */}
      {selectedAsset && (
        <div 
          onClick={() => setSelectedAsset(null)} // Clicking background overlay closes it
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(12px)', // Blurs the home layout behind the asset
            zIndex: 9999, // Floating safely above headers/navigation
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'zoom-out'
          }}
        >
          {/* Close Target Button (&times; creates an elegant X graphic) */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedAsset(null);
            }}
            style={{
              position: 'absolute',
              top: '25px',
              right: '35px',
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '2.8rem',
              cursor: 'pointer',
              transition: 'color 0.2s ease, transform 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#e50914'; // Netflix Red glow on hover
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            &times;
          </button>

          {/* Asset Container */}
          <div 
            onClick={(e) => e.stopPropagation()} // Prevents closing layout when clicking directly on image/video
            style={{
              maxWidth: '85%',
              maxHeight: '85vh',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
              borderRadius: '6px',
              overflow: 'hidden',
              backgroundColor: '#000',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            {selectedAsset.type === 'Video' ? (
              <video 
                src={selectedAsset.src} 
                controls // Adds manual volume, timeline scrubbing, and pause controls!
                autoPlay 
                loop 
                playsInline
                style={{ maxWidth: '100%', maxHeight: '85vh', display: 'block' }} 
              />
            ) : (
              <img 
                src={selectedAsset.src} 
                alt="Enlarged media view" 
                style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', display: 'block' }} 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualGallery;