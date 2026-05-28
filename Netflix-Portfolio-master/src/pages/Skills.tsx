import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. DYNAMIC SVG ICON SYSTEM
// ----------------------------------------------------------------------
const DynamicIcon = ({ name, color = '#ffffff', size = 24 }: { name: string; color?: string; size?: number }) => {
  const shadow = `drop-shadow(0 0 8px ${color}80)`;

  const getPath = () => {
    switch (name) {
      case 'chess': return <><path d="M18 3L6 3 6 5 18 5 18 3zM12 22L12 12M9 12L15 12M8 22L16 22M10 5L14 5 13 12 11 12 10 5z"/></>;
      case 'brush': return <><path d="M21.17 3.22c-.27-.27-.65-.43-1.06-.43-.4 0-.78.15-1.06.43l-13 13c-.2.2-.33.46-.38.74l-1.42 5.68c-.08.31 0 .64.22.86.18.18.43.28.68.28.06 0 .12-.01.18-.02l5.68-1.42c.28-.05.54-.18.74-.38l13-13c.59-.59.59-1.54 0-2.12l-3.58-3.62zM7.5 19.5L5 20l.5-2.5L15 8l2 2-9.5 9.5z"/></>;
      case 'arrows': return <><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></>;
      case 'globe': return <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>;
      case 'target': return <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></>;
      case 'nodes': return <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>;
      case 'layers': return <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></>;
      case 'play': return <><polygon points="5 3 19 12 5 21 5 3"/></>;
      case 'eye': return <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>;
      case 'terminal': return <><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></>;
      case 'sparkle': return <><path d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/></>;
      case 'star': return <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>;
      case 'chart': return <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>;
      case 'box': return <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></>;
      default: return <circle cx="12" cy="12" r="8"/>;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: shadow }}>
      {getPath()}
    </svg>
  );
};

// ----------------------------------------------------------------------
// 2. DATA (QUICK-READ EDITORIAL COPY)
// ----------------------------------------------------------------------
const skillRows = [
  {
    category: "STRATEGY SUITE",
    themeColor: "#ef4444", // Red
    icon: "chess",
    desc: "The foundation for scalable brand growth.",
    skills: [
      { icon: "target", name: "Audience Psychology", desc: "Decoding triggers and behavior." },
      { icon: "nodes", name: "Brand Storytelling", desc: "Narratives that build trust." },
      { icon: "layers", name: "Social Strategy", desc: "Platform-native growth." },
      { icon: "star", name: "Viral Mechanics", desc: "Engineering attention and hooks." },
      { icon: "eye", name: "Trend Forecasting", desc: "Tracking cultural shifts." },
      { icon: "nodes", name: "Content Ecosystems", desc: "Scalable multi-platform systems." }
    ]
  },
  {
    category: "CREATIVE ARSENAL",
    themeColor: "#a855f7", // Purple
    icon: "brush",
    desc: "Visuals and premium content execution.",
    skills: [
      { icon: "layers", name: "Creative Direction", desc: "Cinematic visual systems." },
      { icon: "play", name: "Cinematic Editing", desc: "Retention-focused pacing." },
      { icon: "eye", name: "Visual Branding", desc: "Identity and design systems." },
      { icon: "box", name: "Content Production", desc: "End-to-end execution." },
      { icon: "globe", name: "Digital Presence", desc: "Managing brand reputation." },
      { icon: "chart", name: "Marketing Analytics", desc: "Data-driven optimization." }
    ]
  },
  {
    category: "AI CREATIVE SYSTEMS",
    themeColor: "#3b82f6", // Blue
    icon: "arrows",
    desc: "Accelerating execution with AI technology.",
    skills: [
      { icon: "terminal", name: "Prompt Engineering", desc: "Advanced prompt design." },
      { icon: "nodes", name: "Workflow Design", desc: "Scalable automated systems." },
      { icon: "box", name: "Multimodal AI", desc: "Text, visual and video AI." },
      { icon: "sparkle", name: "Automation", desc: "High-speed workflows." },
      { icon: "play", name: "Rapid Prototyping", desc: "High-speed concepting." },
      { icon: "nodes", name: "AI Storytelling", desc: "Human emotion + AI." }
    ]
  },
  {
    category: "DIGITAL CULTURE LAB",
    themeColor: "#eab308", // Yellow
    icon: "globe",
    desc: "Mastering internet behavior and communities.",
    skills: [
      { icon: "target", name: "Culture Research", desc: "Memes, trends & communities." },
      { icon: "sparkle", name: "Attention Engineering", desc: "Capturing user attention." },
      { icon: "nodes", name: "Community Building", desc: "Driving audience loyalty." },
      { icon: "box", name: "Creator Economy", desc: "Creator and influence dynamics." },
      { icon: "chart", name: "Platform Behavior", desc: "Cross-platform analytics." },
      { icon: "eye", name: "Digital Identity", desc: "Brand and creator positioning." }
    ]
  }
];

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------------------------
const Skills: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', overflowX: 'hidden' }}>
      
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        .skill-row {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 0;
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          border-radius: 12px;
          margin-bottom: 20px;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .skill-row { grid-template-columns: 1fr; }
          .inner-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .inner-grid { grid-template-columns: 1fr !important; }
        }

        .inner-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #1a1a1a;
        }
        .grid-item {
          background: #0a0a0a;
          padding: 24px 30px;
          transition: background 0.3s ease;
        }
        .grid-item:hover {
          background: #111111;
        }

        .radar-container {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .radar-circle {
          position: absolute;
          border: 1px solid rgba(255, 51, 51, 0.15);
          border-radius: 50%;
        }
        .radar-core {
          width: 20px; height: 20px;
          background: #ff3333;
          border-radius: 50%;
          box-shadow: 0 0 30px 10px rgba(255, 51, 51, 0.6);
          z-index: 5;
        }
        .radar-line {
          position: absolute;
          height: 1px;
          background: repeating-linear-gradient(90deg, #ff3333 0, #ff3333 2px, transparent 2px, transparent 6px);
          opacity: 0.3;
        }
        .radar-label {
          position: absolute;
          font-size: 0.65rem;
          color: #888;
          letter-spacing: 2px;
        }

        .footer-cta {
          border-top: 1px solid #1a1a1a;
          background: rgba(5,5,5,0.9);
          backdrop-filter: blur(10px);
          padding: 20px 4%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>

      {/* 🎬 HEADER */}
      <div style={{ padding: '60px 4% 40px 4%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ maxWidth: '600px', marginBottom: '40px' }}>
          <span style={{ color: '#ff3333', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '2px', display: 'block', marginBottom: '20px' }}>
            01 / SKILLS OVERVIEW
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: '-1.5px', lineHeight: '1.1' }}>
            Strategy. Creativity.<br/>Technology.
          </h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>
            Strategy meets creativity. <span style={{ color: '#ff3333' }}>Creativity meets culture.</span>
          </h2>
          <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '400', maxWidth: '450px' }}>
            Strategic thinking, creative execution, and AI systems driving modern brand growth.
          </p>
        </div>

        {/* Radar Graphic */}
        <div className="radar-container">
          <div className="radar-circle" style={{ width: '100%', height: '100%' }}></div>
          <div className="radar-circle" style={{ width: '70%', height: '70%' }}></div>
          <div className="radar-circle" style={{ width: '40%', height: '40%' }}></div>
          <div className="radar-core"></div>
          
          <div className="radar-line" style={{ width: '140px', top: '25%', left: '50%' }}></div>
          <div className="radar-label" style={{ top: '23%', right: '-30px' }}>STRATEGY</div>

          <div className="radar-line" style={{ width: '120px', top: '42%', left: '50%' }}></div>
          <div className="radar-label" style={{ top: '40%', right: '-30px' }}>CREATIVE</div>

          <div className="radar-line" style={{ width: '120px', top: '58%', left: '50%' }}></div>
          <div className="radar-label" style={{ top: '56%', right: '-45px' }}>AI SYSTEMS</div>

          <div className="radar-line" style={{ width: '140px', top: '75%', left: '50%' }}></div>
          <div className="radar-label" style={{ top: '73%', right: '-20px' }}>CULTURE</div>
        </div>
      </div>

      {/* 🎬 MAIN CONTENT */}
      <div style={{ padding: '0 4%', maxWidth: '1400px', margin: '0 auto', paddingBottom: '40px' }}>
        {skillRows.map((row, rIdx) => (
          <div key={rIdx} className="skill-row">
            
            <div style={{ padding: '40px 30px', borderRight: '1px solid #1a1a1a', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                width: '45px', height: '45px', 
                border: `1px solid ${row.themeColor}50`, 
                borderRadius: '10px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                marginBottom: '30px',
                boxShadow: `inset 0 0 15px ${row.themeColor}20, 0 0 15px ${row.themeColor}10`,
                background: `linear-gradient(135deg, ${row.themeColor}10 0%, transparent 100%)`
              }}>
                <DynamicIcon name={row.icon} color={row.themeColor} size={20} />
              </div>
              <h2 style={{ color: row.themeColor, fontSize: '0.9rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 15px 0', textShadow: `0 0 15px ${row.themeColor}60` }}>
                {row.category}
              </h2>
              <p style={{ color: '#777', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
                {row.desc}
              </p>
            </div>

            <div className="inner-grid">
              {row.skills.map((skill, sIdx) => (
                <div key={sIdx} className="grid-item">
                  <div style={{ marginBottom: '12px' }}>
                    <DynamicIcon name={skill.icon} color={row.themeColor} size={18} />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '700', margin: '0 0 6px 0' }}>
                    {skill.name}
                  </h3>
                  <p style={{ color: '#888', fontSize: '0.8rem', margin: 0, lineHeight: '1.4' }}>
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* 🎬 BOTTOM STICKY CTA */}
      <div className="footer-cta">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <DynamicIcon name="star" color="#ff3333" size={24} />
            <div style={{ position: 'absolute', width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #ff3333, transparent)' }}></div>
            <div style={{ position: 'absolute', width: '1px', height: '40px', background: 'linear-gradient(180deg, transparent, #ff3333, transparent)' }}></div>
          </div>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 4px 0' }}>
              Strategy meets creativity. Creativity meets culture.
            </h3>
            <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>
              That's where powerful brands are built.
            </p>
          </div>
        </div>

        <button 
          onClick={() => navigate('/profile/Brand & Content Strategist')}
          style={{ 
            background: 'transparent', 
            border: '1px solid #ff3333', 
            color: '#fff', 
            padding: '12px 24px', 
            borderRadius: '6px', 
            fontSize: '0.85rem', 
            fontWeight: '600', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#ff3333'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,51,51,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Explore Strategist Profile
          <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>↗</span>
        </button>
      </div>

    </div>
  );
};

export default Skills;