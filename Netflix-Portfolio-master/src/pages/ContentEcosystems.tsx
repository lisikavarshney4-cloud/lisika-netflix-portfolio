import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. NEON-RED MINIMALIST LINE ART SVG ICONS
// ----------------------------------------------------------------------
const EcosystemIcon = ({ name, active = false }: { name: string; active?: boolean }) => {
  const strokeColor = active ? '#ffffff' : '#ff3333';
  const shadowFilter = active ? 'drop-shadow(0 0 12px rgba(255, 51, 51, 0.9))' : 'drop-shadow(0 0 4px rgba(255, 51, 51, 0.4))';

  const getPath = () => {
    switch (name) {
      case 'play': return <><polygon points="5 3 19 12 5 21 5 3"/></>;
      case 'heart': return <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>;
      case 'zap': return <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>;
      case 'camera': return <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>;
      case 'ghost': return <><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></>;
      case 'star': return <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>;
      case 'link': return <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>;
      case 'globe': return <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>;
      default: return <circle cx="12" cy="12" r="10"/>;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: shadowFilter, transition: 'all 0.3s ease' }}>
      {getPath()}
    </svg>
  );
};

// ----------------------------------------------------------------------
// 2. ECOSYSTEM ARCHITECTURE DATA
// ----------------------------------------------------------------------
const miniTaglines = [
  "One idea. Multiple platforms.",
  "Content works better when connected.",
  "Attention flows through systems.",
  "Every post should lead somewhere.",
  "Smart creators build ecosystems, not uploads."
];

const caseStudies = [
  { icon: "play", brand: "Netflix", category: "INTERNET-SPEED CONTENT", desc: "Built a global ecosystem where trailers, memes, fandoms, edits, and conversations constantly feed each other.", points: ["binge culture", "fandom communities", "meme virality", "interconnected storytelling"] },
  { icon: "heart", brand: "Paper Boat", category: "EMOTIONAL FMCG STORYTELLING", desc: "Turned nostalgia and emotional storytelling into a premium lifestyle ecosystem. The product became an emotional memory.", points: ["emotional branding", "storytelling-driven campaigns", "strong visual identity", "cultural familiarity"] },
  { icon: "zap", brand: "Zomato", category: "REAL-TIME CULTURE MARKETING", desc: "Built an ecosystem around humor, relatability, and trend participation. The audience engages even outside the app.", points: ["witty notifications", "meme marketing", "cultural timing", "relatable audience language"] },
  { icon: "camera", brand: "Instagram", category: "VISUAL IDENTITY ECOSYSTEM", desc: "Created a content universe where stories, reels, creators, trends, and communities constantly interact.", points: ["creator economy", "visual identity culture", "interconnected engagement", "trend acceleration"] },
  { icon: "ghost", brand: "Snapchat", category: "DAILY HABIT SYSTEMS", desc: "Designed an ecosystem around real-time interaction and habit psychology. The platform became part of everyday routine.", points: ["streak systems", "instant communication", "casual content behavior", "addictive engagement loops"] },
  { icon: "star", brand: "Amul", category: "COMMUNITY-FIRST BRANDING", desc: "Built one of India’s strongest cultural content ecosystems through topical storytelling and consistent identity.", points: ["real-time cultural marketing", "instantly recognizable visuals", "emotional familiarity", "multi-generational connection"] }
];

const modernFlow = [
  { step: "01", title: "ATTRACT", desc: "Capture attention." },
  { step: "02", title: "CONNECT", desc: "Create relatability." },
  { step: "03", title: "EXPAND", desc: "Multiply formats." },
  { step: "04", title: "RETAIN", desc: "Keep audiences." },
  { step: "05", title: "SCALE", desc: "Build identity." }
];

const ecosystemElements = [
  "short-form storytelling",
  "creator collaborations",
  "visual consistency",
  "community interaction",
  "emotional branding",
  "platform-native content",
  "scalable content systems",
  "internet culture awareness"
];

const cultureInsights = [
  "Consistency creates recognition.",
  "Recognition builds trust.",
  "Trust increases retention.",
  "Retention builds community.",
  "Community scales brands faster."
];

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT PLATFORM (NEURAL UI UPGRADE)
// ----------------------------------------------------------------------
const ContentEcosystems: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#030303', minHeight: '100vh', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif', padding: '40px 4% 100px 4%', boxSizing: 'border-box', overflowX: 'hidden', position: 'relative' }}>
      
      {/* 🔮 NEURAL NETWORK CSS & ANIMATIONS */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Deep Radar Background */
        .radar-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at 50% 10%, rgba(255, 51, 51, 0.05) 0%, transparent 50%);
          z-index: 1;
          pointer-events: none;
        }
        
        .pulse-ring {
          position: absolute;
          top: -200px; right: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          border: 1px solid rgba(255, 51, 51, 0.03);
          box-shadow: 0 0 100px rgba(255, 51, 51, 0.02) inset;
          animation: pulse-slow 8s infinite ease-in-out;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes pulse-slow {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }

        @keyframes data-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .universe-back-btn {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          padding: 10px 24px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.2, 1, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .universe-back-btn:hover {
          background-color: #ff3333;
          border-color: #ff3333;
          box-shadow: 0 0 20px rgba(255, 51, 51, 0.4);
        }

        /* Glassmorphic Neural Panels */
        .neural-panel {
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid #1a1a1a;
          border-radius: 16px;
          padding: 35px;
          position: relative;
          z-index: 5;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        
        .neon-glow-text {
          text-shadow: 0 0 20px rgba(255, 51, 51, 0.8);
        }

        .node-card {
          background: linear-gradient(180deg, #0a0a0a 0%, #050505 100%);
          border: 1px solid #1c1c1c;
          border-radius: 12px;
          padding: 28px;
          transition: all 0.4s cubic-bezier(0.2, 1, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .node-card::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 2px;
          background: transparent; transition: background 0.4s;
        }
        .node-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 51, 51, 0.3);
          box-shadow: 0 15px 40px rgba(255, 51, 51, 0.08);
        }
        .node-card:hover::before {
          background: #ff3333;
        }
      `}</style>

      {/* Abstract Background Elements */}
      <div className="radar-bg"></div>
      <div className="pulse-ring"></div>
      <div className="pulse-ring" style={{ top: 'auto', bottom: '-200px', right: 'auto', left: '-200px', animationDelay: '4s' }}></div>

      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* 🎬 HEADER CONTROLS BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '55px', marginTop: '10px' }}>
          <button onClick={() => navigate(-1)} className="universe-back-btn">
            ← Back to Universe
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)', border: '1px solid #2a2a2a', padding: '10px 24px', borderRadius: '30px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#ff3333', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 12px #ff3333', animation: 'pulse-slow 2s infinite' }}></span>
            <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '2.5px', textTransform: 'uppercase' }}>Network Intelligence Lab</span>
          </div>
        </div>

        {/* 🎬 HERO SECTION (FLOATING ARCHITECTURE) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <span style={{ color: '#ff3333', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }} className="neon-glow-text">
              SCALABLE DIGITAL ARCHITECTURE
            </span>
            <h1 style={{ fontSize: '4.5rem', fontWeight: '900', margin: '0 0 20px 0', letterSpacing: '-1.5px', lineHeight: '1', textTransform: 'uppercase' }}>
              CONTENT <br/><span style={{ color: '#ff3333' }} className="neon-glow-text">ECOSYSTEMS</span>
            </h1>
            <p style={{ color: '#aaa', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '300', margin: '0', maxWidth: '600px' }}>
              Building connected digital systems where every piece of content works together.
            </p>
          </div>

          {/* Floating Glass Quote Box */}
          <div style={{ flex: '1 1 350px', background: 'rgba(15,15,15,0.5)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,51,51,0.2)', padding: '30px', borderRadius: '16px', borderLeft: '4px solid #ff3333', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
              <EcosystemIcon name="globe" active={true} />
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#fff', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>System Paradigm</h3>
            </div>
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#ccc', lineHeight: '1.6', fontWeight: '300' }}>
              Modern content isn’t random anymore.<br/><br/>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>It’s interconnected, scalable, and designed like an ecosystem.</span>
            </p>
          </div>
        </div>

        {/* 🎬 HORIZONTAL RUNWAY TAGS */}
        <div className="hide-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '25px', marginBottom: '40px' }}>
          {miniTaglines.map((tag, i) => (
            <div key={i} style={{ whiteSpace: 'nowrap', backgroundColor: '#080808', border: '1px solid #1f1f1f', padding: '14px 28px', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.5px', color: '#999', textTransform: 'uppercase', transition: 'all 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff3333'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1f1f1f'; e.currentTarget.style.color = '#999'; }}>
              {tag}
            </div>
          ))}
        </div>

        {/* 🎬 3-COLUMN NETWORK NODES (THE ECOSYSTEM) */}
        <div className="neural-panel" style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ width: '40px', height: '2px', backgroundColor: '#ff3333' }}></span>
            <div>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Market Architectures</span>
              <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '900', margin: '2px 0 0 0', letterSpacing: '0.5px' }}>THE CONTENT ECOSYSTEM</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {caseStudies.map((study, i) => (
              <div 
                key={i}
                className="node-card"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ backgroundColor: hoveredCard === i ? 'rgba(255,51,51,0.1)' : '#111', border: `1px solid ${hoveredCard === i ? '#ff3333' : '#222'}`, padding: '12px', borderRadius: '8px', display: 'flex', transition: 'all 0.3s' }}>
                    <EcosystemIcon name={study.icon} active={hoveredCard === i} />
                  </div>
                  <div>
                    <span style={{ color: '#ff3333', fontSize: '0.65rem', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block' }}>{study.category}</span>
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', margin: '2px 0 0 0', fontWeight: '900' }}>{study.brand}</h3>
                  </div>
                </div>
                
                <p style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: '1.6', marginBottom: '25px' }}>{study.desc}</p>
                
                <div style={{ borderTop: '1px dashed #222', paddingTop: '20px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#666', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>Why It Worked:</span>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {study.points.map((point, idx) => (
                      <li key={idx} style={{ fontSize: '0.8rem', color: '#ddd', display: 'flex', alignItems: 'flex-start', fontWeight: '500' }}>
                        <span style={{ color: '#ff3333', marginRight: '10px', fontSize: '1.2rem', lineHeight: '0.8' }}>•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 ANIMATED PIPELINE: THE MODERN CONTENT FLOW */}
        <div className="neural-panel" style={{ marginBottom: '40px', overflow: 'hidden' }}>
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>System Pipeline</span>
            <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '900', margin: '4px 0 0 0', letterSpacing: '0.5px' }}>THE MODERN CONTENT FLOW</h2>
          </div>
          
          {/* Animated Connecting Line */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 20px' }}>
            
            {/* The Track */}
            <div style={{ position: 'absolute', top: '25px', left: '50px', right: '50px', height: '2px', background: '#1a1a1a', zIndex: 0 }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, transparent 0%, #ff3333 50%, transparent 100%)', backgroundSize: '200% 100%', animation: 'data-flow 3s linear infinite' }}></div>
            </div>

            {modernFlow.map((step, i) => (
              <div 
                key={i} 
                style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px', cursor: 'pointer' }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Flow Node */}
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: hoveredStep === i ? '#ff3333' : '#050505', border: `2px solid ${hoveredStep === i ? '#ff3333' : '#333'}`, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem', fontWeight: '900', color: hoveredStep === i ? '#000' : '#fff', marginBottom: '20px', transition: 'all 0.3s ease', boxShadow: hoveredStep === i ? '0 0 20px rgba(255,51,51,0.6)' : '0 0 0 rgba(0,0,0,0)' }}>
                  {step.step}
                </div>
                {/* Content */}
                <h3 style={{ fontSize: '1rem', color: hoveredStep === i ? '#fff' : '#aaa', fontWeight: '900', letterSpacing: '1px', margin: '0 0 8px 0', textAlign: 'center', transition: 'color 0.3s' }}>{step.title}</h3>
                <p style={{ fontSize: '0.75rem', color: '#666', margin: 0, lineHeight: '1.4', textAlign: 'center' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 2-COLUMN SPLIT: ECOSYSTEM ELEMENTS & INSIGHTS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
          
          {/* LEFT: Structural Integrity */}
          <div className="neural-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Structural Integrity</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '4px 0 0 0', letterSpacing: '0.5px' }}>ECOSYSTEM ELEMENTS</h2>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', flexGrow: 1, alignContent: 'flex-start' }}>
              {ecosystemElements.map((element, i) => (
                <span key={i} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid #222', padding: '12px 18px', borderRadius: '30px', fontSize: '0.85rem', color: '#ddd', fontWeight: '600', transition: 'all 0.3s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff3333'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,51,51,0.05)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#ddd'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                  {element}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Culture Insights */}
          <div className="neural-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Psychology & Action</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '4px 0 0 0', letterSpacing: '0.5px' }}>CULTURE INSIGHTS</h2>
            </div>

            <div style={{ flexGrow: 1, backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid #1c1c1c', borderRadius: '12px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cultureInsights.map((insight, idx) => (
                  <li key={idx} style={{ fontSize: '0.95rem', color: '#eee', display: 'flex', alignItems: 'center', lineHeight: '1.4', fontWeight: '500' }}>
                    <div style={{ width: '30px', height: '1px', backgroundColor: '#ff3333', marginRight: '15px' }}></div>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* 🎬 HIGH IMPACT COMPOSITION FOOTER */}
        <div style={{ textAlign: 'center', marginTop: '70px', paddingTop: '50px', borderTop: '1px solid #1a1a1a', position: 'relative' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 15px 0', textTransform: 'uppercase' }}>
            The strongest digital brands don’t create isolated content. <br/>
            <span style={{ color: '#ff3333' }} className="neon-glow-text">They build connected worlds.</span>
          </h2>
          <p style={{ color: '#888', fontSize: '0.95rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 40px 0' }}>
            Modern creators don’t post randomly. Every piece of content should strengthen the larger story.
          </p>

          <button 
            style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #ff3333', padding: '16px 40px', borderRadius: '6px', fontSize: '0.95rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#ff3333'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,51,51,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Enter The Content Ecosystem
          </button>
          <div style={{ color: '#444', fontSize: '0.75rem', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
            Exploring how content, culture, and community connect together.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentEcosystems;