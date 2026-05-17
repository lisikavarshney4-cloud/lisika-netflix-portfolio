import React from 'react';

interface StrategicAsset {
  id: number;
  type: 'Image' | 'Video';
  src: string;
}

const VisualGallery: React.FC = () => {
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
    <div style={{ padding: '80px 0', backgroundColor: 'transparent', width: '100%', position: 'relative', zIndex: 10 }}>
      <div style={{ maxWidth: '1400px', width: '92%', margin: '0 auto' }}>
        
        {/* --- GRID --- */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', 
          gap: '24px' 
        }}>
          {strategicAssets.map((asset) => (
            <div 
              key={asset.id}
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
    </div>
  );
};

export default VisualGallery;