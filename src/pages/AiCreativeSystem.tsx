import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. FUTURISTIC NEON LINE-ART SVG ICONS
// ----------------------------------------------------------------------
const HologramIcon = ({ name, active = false }: { name: string; active?: boolean }) => {
  const strokeColor = active ? '#ffffff' : '#ff3333';
  const shadowFilter = active ? 'drop-shadow(0 0 12px rgba(255, 51, 51, 0.9))' : 'drop-shadow(0 0 4px rgba(255, 51, 51, 0.4))';

  const getPath = () => {
    switch (name) {
      case 'terminal': return <><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></>;
      case 'cpu': return <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></>;
      case 'code': return <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>;
      case 'eye': return <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>;
      case 'star': return <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>;
      case 'layers': return <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></>;
      default: return <circle cx="12" cy="12" r="10"/>;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: shadowFilter, transition: 'all 0.3s ease' }}>
      {getPath()}
    </svg>
  );
};

// ----------------------------------------------------------------------
// 2. CONFIGURATION STRATEGIC BLUEPRINTS DATA
// ----------------------------------------------------------------------
const miniTags = [
  "AI Workflows", "Cinematic Storytelling", "Prompt Engineering", 
  "Frontend Experimentation", "Internet Culture", "Creative Automation", "Visual Systems"
];

const creativeStack = [
  { icon: "cpu", title: "INTELLIGENT WORKFLOWS", tools: ["Claude", "Google AI Studio", "Gemini", "Codex", "AI Agents", "Prompt Systems"] },
  { icon: "code", title: "CREATIVE DEVELOPMENT", tools: ["VS Code ecosystems", "AI-assisted development", "Rapid prototyping", "Cinematic UI systems", "Interactive experiences"] },
  { icon: "eye", title: "VISUAL STORYTELLING", tools: ["AI visuals", "Motion concepts", "Cinematic branding", "Digital atmospheres", "Immersive content systems"] }
];

const paradigmShifts = [
  { brand: "REFIK ANADOL", subtitle: "CINEMATIC ART", desc: "Turned AI into immersive cinematic art installations shown globally. His work proves that AI can translate pure emotion, atmosphere, memory, and storytelling." },
  { brand: "OPENAI", subtitle: "RAPID PROTOTYPING", desc: "Redefined how premium creators prototype complex concepts, visuals, and narratives at absolute internet network speed." },
  { brand: "RUNWAY", subtitle: "PRODUCTION ENGINE", desc: "Fundamentally rewrote cinematic production and adaptive motion graphics workflows for the modern creator economy." }
];

const systemApproach = [
  { label: "NORMAL USERS", points: ["Use AI exclusively for quick shortcuts", "Copy-paste generic prompt scripts", "Generate flat, disjointed content pieces", "Follow casual trends without data insight"], isPremium: false },
  { label: "MY APPROACH", points: ["Architect integrated creative systems", "Design immersive premium experiences", "Engineer intelligent automated workflows", "Create deeply emotional cinematic storytelling", "Merge cutting-edge tools with internet culture"], isPremium: true }
];

// ----------------------------------------------------------------------
// 3. LEGIBILITY & MOTION SYSTEM COMPONENT
// ----------------------------------------------------------------------
const AiCreativeSystem: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#020202', minHeight: '100vh', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif', padding: '40px 4% 100px 4%', boxSizing: 'border-box', overflowX: 'hidden', position: 'relative' }}>
      
      {/* 🔮 ADVANCED INTERACTIVE AND HIGH-CONTRAST CSS INJECTIONS */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Moving subtle dashboard scale pattern */
        .grid-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: linear-gradient(rgba(255, 51, 51, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 51, 51, 0.02) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
          pointer-events: none;
        }

        .universe-back-btn {
          background: rgba(20, 20, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          padding: 10px 24px;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 1, 0.2, 1);
          white-space: nowrap;
        }
        .universe-back-btn:hover {
          background-color: #fff;
          color: #000;
          border-color: #fff;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
        }

        .studio-panel {
          background: linear-gradient(135deg, rgba(14, 14, 14, 0.9) 0%, rgba(8, 8, 8, 0.95) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid #222222; /* High contrast card borders */
          border-radius: 12px;
          padding: 32px;
          position: relative;
          z-index: 5;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .studio-panel:hover {
          border-color: #ff3333;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255, 51, 51, 0.12);
        }

        /* Highly readable list style alignment */
        .custom-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }

        .neon-glow-text {
          text-shadow: 0 0 20px rgba(255, 51, 51, 0.6);
        }
      `}</style>

      {/* Dynamic Background Shader Layout */}
      <div className="grid-bg"></div>

      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* 🎬 HEADER CONTROLS BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', marginTop: '10px' }}>
          <button onClick={() => navigate(-1)} className="universe-back-btn">
            ← Back to Universe
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#0f0f0f', border: '1px solid #262626', padding: '8px 20px', borderRadius: '30px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#ff3333', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #ff3333' }}></span>
            <span style={{ color: '#e5e5e5', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>System Engine Engaged</span>
          </div>
        </div>

        {/* 🎬 MAIN TITLE HERO GRAPHIC */}
        <div style={{ maxWidth: '900px', marginBottom: '60px' }}>
          <span style={{ color: '#ff3333', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }} className="neon-glow-text">
            SYSTEM CORE OPERATIONAL
          </span>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', margin: '0 0 20px 0', letterSpacing: '-1.5px', lineHeight: '1.05', textTransform: 'uppercase' }}>
            AI CREATIVE <span style={{ color: '#ff3333' }} className="neon-glow-text">SYSTEMS</span>
          </h1>
          <p style={{ color: '#e1e1e1', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '300', margin: '0 0 35px 0', maxWidth: '750px' }}>
            Building digital worlds where human imagination meets machine intelligence. Blending creative automation into deeply immersive, emotional digital experiences.
          </p>

          {/* Glowing Terminal Quote Overlay Frame */}
          <div style={{ borderLeft: '3px solid #ff3333', backgroundColor: '#0b0b0b', padding: '20px 24px', borderRadius: '0 8px 8px 0', maxWidth: '680px', border: '1px solid #1a1a1a', borderLeftColor: '#ff3333', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.6)' }}>
            <span style={{ color: '#ff3333', fontSize: '0.75rem', fontFamily: 'monospace', display: 'block', marginBottom: '6px', fontWeight: 'bold', letterSpacing: '1px' }}>{'// EXECUTIVE PERSPECTIVE REGISTRY'}</span>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.05rem', color: '#ffffff', lineHeight: '1.5', fontWeight: '400' }}>
              “People don’t care about what you say. They care about what you build.” <span style={{ color: '#ff3333', fontSize: '0.85rem', fontStyle: 'normal', fontWeight: 'bold', marginLeft: '5px' }}>— Mark Zuckerberg</span>
            </p>
          </div>
        </div>

        {/* 🎬 HORIZONTAL CHASSIS TAG RUNWAY */}
        <div className="hide-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '20px', marginBottom: '35px' }}>
          {miniTags.map((tag, i) => (
            <div key={i} style={{ whiteSpace: 'nowrap', backgroundColor: '#0f0f0f', border: '1px solid #2a2a2a', padding: '12px 24px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.5px', color: '#b3b3b3', textTransform: 'uppercase', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff3333'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#b3b3b3'; }}>
              {tag}
            </div>
          ))}
        </div>

        {/* 🎬 MASTER 4-QUADRANT LAYOUT PARADIGM CONTAINER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))', gap: '28px' }}>

          {/* 🎛️ QUADRANT 01: THE CREATIVE INFRASTRUCTURE STACK */}
          <div className="studio-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Pipeline Registries</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '2px 0 0 0', letterSpacing: '0.5px' }}>THE CREATIVE STACK</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
              {creativeStack.map((stack, i) => (
                <div 
                  key={i}
                  style={{ backgroundColor: '#000', border: '1px solid #262626', borderRadius: '8px', padding: '24px 20px', transition: 'all 0.3s ease', borderColor: hoveredRow === i ? '#ff3333' : '#262626', boxShadow: hoveredRow === i ? '0 4px 20px rgba(255,51,51,0.05)' : 'none' }}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '16px' }}>
                    <HologramIcon name={stack.icon} active={hoveredRow === i} />
                    <h3 style={{ fontSize: '0.95rem', color: '#fff', margin: 0, letterSpacing: '0.5px', fontWeight: 'bold' }}>{stack.title}</h3>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {stack.tools.map((tool, idx) => (
                      <span key={idx} style={{ backgroundColor: '#0f0f0f', border: '1px solid #333333', padding: '6px 14px', borderRadius: '4px', fontSize: '0.8rem', color: '#ffffff', fontWeight: '600', letterSpacing: '0.3px' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🎛️ QUADRANT 02: WHAT MAKES ME DIFFERENT (LEGIBILITY FOCUS) */}
          <div className="studio-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Execution System Differential</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '2px 0 0 0', letterSpacing: '0.5px' }}>WHAT MAKES ME DIFFERENT</h2>
            </div>

            {/* Toggle Switch Selector Buttons */}
            <div style={{ display: 'flex', gap: '6px', backgroundColor: '#000', padding: '6px', borderRadius: '8px', border: '1px solid #262626', marginBottom: '24px' }}>
              {systemApproach.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{ flexGrow: 1, border: 'none', backgroundColor: activeTab === idx ? '#1a1a1a' : 'transparent', color: activeTab === idx ? (idx === 1 ? '#ff3333' : '#fff') : '#888', padding: '14px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1.5px', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.2, 1, 0.2, 1)', textShadow: activeTab === idx && idx === 1 ? '0 0 10px rgba(255,51,51,0.3)' : 'none' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* View Terminal Frame with Maximum Text Legibility */}
            <div style={{ flexGrow: 1, backgroundColor: '#000', border: '1px solid #262626', borderRadius: '8px', padding: '30px 25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {systemApproach[activeTab].points.map((point, idx) => (
                  <div key={idx} className="custom-bullet-item" style={{ color: systemApproach[activeTab].isPremium ? '#ffffff' : '#aaaaaa', fontWeight: systemApproach[activeTab].isPremium ? '600' : '400' }}>
                    <span style={{ color: systemApproach[activeTab].isPremium ? '#ff3333' : '#555555', fontSize: '1.2rem', marginTop: '-2px', textShadow: systemApproach[activeTab].isPremium ? '0 0 8px #ff3333' : 'none' }}>
                      {systemApproach[activeTab].isPremium ? '▪' : '▫'}
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🎛️ QUADRANT 03: REAL WORLD CREATIVE SHIFTS */}
          <div className="studio-panel">
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Industry Creative Accelerations</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '2px 0 0 0', letterSpacing: '0.5px' }}>REAL-WORLD CREATIVE SHIFT</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '16px' }}>
              {paradigmShifts.map((shift, i) => (
                <div key={i} style={{ height: '260px', backgroundColor: '#000', border: '1px solid #262626', borderRadius: '8px', padding: '24px 18px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', position: 'relative', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#444'} onMouseLeave={e => e.currentTarget.style.borderColor = '#262626'}>
                  <div style={{ position: 'absolute', top: '-15px', right: '-10px', opacity: 0.03 }}><HologramIcon name="terminal" /></div>
                  <span style={{ color: '#ff3333', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>{shift.subtitle}</span>
                  <h3 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '900', margin: '0 0 12px 0', letterSpacing: '0.5px', borderBottom: '1px solid #1f1f1f', paddingBottom: '8px' }}>{shift.brand}</h3>
                  <p style={{ color: '#b3b3b3', fontSize: '0.8rem', margin: 0, lineHeight: '1.5', flexGrow: 1, fontWeight: '400' }}>{shift.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🎛️ QUADRANT 04: EMPIRICAL PERFORMANCE ANALYSIS */}
          <div className="studio-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Empirical Performance Analysis</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '2px 0 0 0', letterSpacing: '0.5px' }}>RESEARCH & FUTURE</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', flexGrow: 1 }}>
              
              {/* Split Column 1: Academic Summary Tracks */}
              <div className="hide-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto', maxHeight: '260px', paddingRight: '5px' }}>
                <div style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '12px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#cccccc', margin: 0, lineHeight: '1.5', fontWeight: '400' }}>A 2023 creativity study found that generative AI systems can perform at human-level creativity across several creative tasks.</p>
                </div>
                <div style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '12px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#cccccc', margin: 0, lineHeight: '1.5', fontWeight: '400' }}>Another storytelling study showed AI-generated visual systems helped humans create more original and immersive narratives.</p>
                </div>
                <div style={{ paddingBottom: '5px' }}>
                  <p style={{ fontSize: '0.85rem', color: '#ff3333', fontWeight: 'bold', margin: 0, lineHeight: '1.5' }}>The next generation of creators won’t just edit content. They’ll build intelligent creative ecosystems.</p>
                </div>
              </div>

              {/* Split Column 2: Big Takeaway Block */}
              <div style={{ backgroundColor: '#000', border: '1px solid #262626', borderRadius: '8px', padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', boxShadow: 'inset 0 0 20px rgba(255,51,51,0.02)' }}>
                <div style={{ position: 'absolute', top: '15px', right: '15px', opacity: 0.1 }}><HologramIcon name="layers" /></div>
                <div style={{ display: 'flex', justifyContent: 'center', color: '#ff3333', marginBottom: '12px' }}><HologramIcon name="star" active={true} /></div>
                <div style={{ fontSize: '0.7rem', color: '#ff3333', fontWeight: '900', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }} className="neon-glow-text">BIG TAKEAWAY</div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 'bold', lineHeight: '1.4' }}>AI works best when paired with human imagination.</div>
              </div>

            </div>
          </div>

        </div>

        {/* 🎬 FUTURISTIC CREATIVE LAB TERMINAL FOOTER */}
        <div style={{ textAlign: 'center', marginTop: '70px', paddingTop: '40px', borderTop: '1px solid #222222' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '900', color: '#888888', letterSpacing: '4px', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
            AI IS NOT REPLACING CREATIVITY. <span style={{ color: '#ff3333' }} className="neon-glow-text">IT’S AMPLIFYING IMAGINATION.</span>
          </h3>
          <p style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '2.5px', textTransform: 'uppercase', margin: 0 }}>
            Future creators won’t compete with AI. &nbsp;<span style={{ color: '#ff3333' }}>They’ll collaborate with it.</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default AiCreativeSystem;
