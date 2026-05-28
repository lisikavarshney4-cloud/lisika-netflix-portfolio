import React, { useState } from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import './VisionBoard.css';

// 🚀 IMPORT YOUR MASTER BACKGROUND IMAGE HERE
import visionBoardBg from '../images/vision-board.png';

// 🚀 CUSTOM DRAG ENGINE (Zero dependencies, perfectly stable)
interface DraggableCardProps {
  children: React.ReactNode;
  initialTop: string;
  initialLeft: string;
  initialZ: number;
  width: string;
  height: string;
  className: string;
  driftAnim: string;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ children, initialTop, initialLeft, initialZ, width, height, className, driftAnim }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    setRel({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPos({ x: e.clientX - rel.x, y: e.clientY - rel.y });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={className}
      style={{
        position: 'absolute',
        top: initialTop,
        left: initialLeft,
        width: width,
        height: height,
        zIndex: isDragging ? 1000 : initialZ,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'box-shadow 0.3s ease',
        animation: isDragging ? 'none' : driftAnim,
        touchAction: 'none',
        userSelect: 'none'
      }}
    >
      {children}
    </div>
  );
};

// 💡 FLOATING OVERLAYS: These are the interactive elements you can drag OVER your background
const OVERLAY_DATA = [
  { type: 'note', style: 'scattered-thoughts', text: "brain_rot.zip - do not open!!!", top: '15vh', left: '5vw', width: '180px', height: 'auto', layer: 50, drift: '0.1s' },
  { type: 'dm', user: 'self_aware_ai', text: "hesitation detected.", top: '65vh', left: '70vw', width: '200px', height: 'auto', layer: 51, drift: '0.3s' },
  { type: 'note', style: 'scattered-thoughts', text: "saved at 3:14 AM", top: '80vh', left: '25vw', width: '150px', height: 'auto', layer: 52, drift: '0.2s' }
];

const VisionBoardUniverse: React.FC = () => {
  return (
    // Set your master PNG as the fullscreen background image here!
    <div className="vision-board-root" style={{ backgroundImage: `url(${visionBoardBg})` }}>
      
      <div className="board-environment">
        
        {/* Render the draggable items floating on top of the image */}
        {OVERLAY_DATA.map((item, index) => (
          <DraggableCard 
            key={index} 
            initialTop={item.top} 
            initialLeft={item.left} 
            initialZ={item.layer} 
            width={item.width || 'auto'}
            height={item.height || 'auto'}
            className={`board-item ${item.type}`}
            driftAnim={item.drift ? `driftSlow ${10 + (index % 4)}s ease-in-out infinite alternate` : 'none'}
          >

              { item.type === 'note' && (
                  <div className={`sticky-note ${item.style}`}> {item.text} </div>
              )}

              { item.type === 'dm' && (
                  <div className="browser-window scattered-thoughts" style={{ padding: '12px', fontSize: '0.9rem', border: '1px solid #e50914' }}> 
                    <FaRegCommentDots style={{color: '#e50914', marginRight: '8px'}}/> {item.text} 
                  </div>
              )}

          </DraggableCard>
        ))}
        
      </div>
    </div>
  );
};

export default VisionBoardUniverse;