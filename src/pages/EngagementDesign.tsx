import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. NEON-RED MINIMALIST LINE ART SVG ICONS
// ----------------------------------------------------------------------
const EngagementIcon = ({ name, active = false }: { name: string; active?: boolean }) => {
  const strokeColor = active ? '#ffffff' : '#ff3333';
  const shadowFilter = active ? 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))' : 'drop-shadow(0 0 6px rgba(255, 51, 51, 0.5))';

  const getPath = () => {
    switch (name) {
      case 'zap': return <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>;
      case 'heart': return <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>;
      case 'users': return <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>;
      case 'camera': return <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>;
      case 'ghost': return <><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></>;
      case 'rewind': return <><polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/></>;
      case 'star': return <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>;
      case 'message': return <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>;
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
// 2. STRATEGIC ARCHITECTURE DATA
// ----------------------------------------------------------------------
const miniTaglines = [
  "Engagement is engineered.",
  "Communities grow through emotion.",
  "The internet rewards interaction.",
  "People remember what involves them.",
  "The strongest brands feel human."
];

const engagementSystem = [
  { icon: "zap", brand: "Blinkit", category: "ATTENTION ENGINEERING", desc: "Turned fast delivery into entertaining internet culture. Even delivery updates became shareable content.", points: ["witty notifications", "meme marketing", "trend participation", "relatable daily-life humor"] },
  { icon: "users", brand: "SUGAR Cosmetics", category: "PERSONALITY-LED BRANDING", desc: "Built a bold Gen Z identity through internet-native storytelling. The brand feels like a personality, not a company.", points: ["strong visual identity", "influencer-driven content", "confident communication", "relatable beauty culture"] },
  { icon: "heart", brand: "Mamaearth", category: "EMOTIONAL TRUST BUILDING", desc: "Scaled using emotionally relatable family-focused storytelling. People connected with the feeling before the product.", points: ["trust-based branding", "relatable parenting content", "creator collaborations", "emotional positioning"] },
  { icon: "rewind", brand: "Lahori Zeera", category: "NOSTALGIA MARKETING", desc: "Used desi nostalgia and cultural familiarity to stand out digitally. Nostalgia creates instant emotional retention.", points: ["emotional memory", "local identity", "cultural connection", "recognizable brand tone"] },
  { icon: "camera", brand: "Instagram", category: "SOCIAL IDENTITY DESIGN", desc: "Built engagement around self-expression and visual identity. People don’t just post content. They post identity.", points: ["creator culture", "aesthetic storytelling", "social validation loops", "identity sharing"] },
  { icon: "ghost", brand: "Snapchat", category: "REAL-TIME INTERACTION", desc: "Made communication feel instant, personal, and addictive. Engagement increases when interaction feels natural.", points: ["streak systems", "disappearing content", "habit psychology", "effortless interaction"] }
];

const modernFormula = [
  { title: "RELATABILITY", desc: "People engage with what feels familiar." },
  { title: "PERSONALITY", desc: "Brands with character grow faster online." },
  { title: "CULTURE", desc: "Content spreads when it feels socially relevant." },
  { title: "COMMUNITY", desc: "Audiences stay where they feel understood." }
];

const cultureInsights = [
  "Humor increases shareability.",
  "Identity builds stronger communities.",
  "Emotion drives interaction.",
  "Nostalgia improves retention.",
  "Human brands outperform corporate brands."
];

const engagementContent = [
  "conversational storytelling",
  "relatable humor",
  "creator-led branding",
  "emotional hooks",
  "audience participation",
  "community-first content",
  "shareable experiences"
];

// ----------------------------------------------------------------------
// 3. MAIN DASHBOARD COMPONENT
// ----------------------------------------------------------------------
const EngagementDesign: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#020202', minHeight: '100vh', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif', padding: '40px 4% 100px 4%', boxSizing: 'border-box', overflowX: 'hidden', position: 'relative' }}>
      
      {/* 🔮 CINEMATIC CSS & GRID BACKGROUND */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
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
          border: 1px solid #1a1a1a;
          border-radius: 12px;
          padding: 30px;
          position: relative;
          z-index: 5;
          transition: all 0.4s ease;
        }
        
        .neon-glow-text {
          text-shadow: 0 0 20px rgba(255, 51, 51, 0.6);
        }
      `}</style>

      <div className="grid-bg"></div>

      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* 🎬 HEADER CONTROLS BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px', marginTop: '10px' }}>
          <button onClick={() => navigate(-1)} className="universe-back-btn">
            ← Back to Universe
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#0f0f0f', border: '1px solid #1a1a1a', padding: '8px 20px', borderRadius: '30px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#ff3333', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #ff3333' }}></span>
            <span style={{ color: '#e5e5e5', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Community Intelligence Lab</span>
          </div>
        </div>

        {/* 🎬 HERO SECTION */}
        <div style={{ maxWidth: '900px', marginBottom: '50px' }}>
          <span style={{ color: '#ff3333', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }} className="neon-glow-text">
            ARCHITECTING CONNECTION
          </span>
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', margin: '0 0 15px 0', letterSpacing: '-1.5px', lineHeight: '1.05', textTransform: 'uppercase' }}>
            ENGAGEMENT <span style={{ color: '#ff3333' }} className="neon-glow-text">DESIGN</span>
          </h1>
          <p style={{ color: '#e1e1e1', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '300', margin: '0 0 35px 0', maxWidth: '750px' }}>
            Designing content experiences people don’t just watch — they interact with.
          </p>

          <div style={{ borderLeft: '3px solid #ff3333', backgroundColor: '#0b0b0b', padding: '20px 24px', borderRadius: '0 8px 8px 0', maxWidth: '600px', border: '1px solid #1a1a1a', borderLeftColor: '#ff3333' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#fff', fontWeight: 'bold' }}>OPENING STATEMENT</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6' }}>
              Attention gets views.<br/>
              <span style={{ color: '#fff' }}>Connection builds communities.</span><br/>
              <span style={{ color: '#ff3333', fontWeight: 'bold' }}>Culture builds loyalty.</span>
            </p>
          </div>
        </div>

        {/* 🎬 HORIZONTAL RUNWAY TAGS */}
        <div className="hide-scroll" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '20px', marginBottom: '40px' }}>
          {miniTaglines.map((tag, i) => (
            <div key={i} style={{ whiteSpace: 'nowrap', backgroundColor: '#0f0f0f', border: '1px solid #2a2a2a', padding: '12px 24px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.5px', color: '#b3b3b3', textTransform: 'uppercase' }}>
              {tag}
            </div>
          ))}
        </div>

        {/* 🎬 3-COLUMN CASE STUDY GRID (THE ENGAGEMENT SYSTEM) */}
        <div className="studio-panel" style={{ marginBottom: '30px' }}>
          <div style={{ marginBottom: '30px' }}>
            <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Market Architectures</span>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '900', margin: '4px 0 0 0', letterSpacing: '0.5px' }}>THE ENGAGEMENT SYSTEM</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {engagementSystem.map((study, i) => (
              <div 
                key={i}
                style={{ backgroundColor: '#000', border: '1px solid #1a1a1a', borderRadius: '8px', padding: '25px', transition: 'all 0.3s', borderColor: hoveredCard === i ? '#ff3333' : '#1a1a1a', boxShadow: hoveredCard === i ? '0 10px 30px rgba(255,51,51,0.1)' : 'none' }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{ backgroundColor: hoveredCard === i ? '#ff3333' : '#111', padding: '10px', borderRadius: '6px', display: 'flex', transition: 'all 0.3s' }}>
                    <EngagementIcon name={study.icon} active={hoveredCard === i} />
                  </div>
                  <div>
                    <span style={{ color: '#ff3333', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', display: 'block' }}>{study.category}</span>
                    <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: 0, fontWeight: '900' }}>{study.brand}</h3>
                  </div>
                </div>
                
                <p style={{ fontSize: '0.85rem', color: '#aaa', lineHeight: '1.5', marginBottom: '20px' }}>{study.desc}</p>
                
                <div style={{ borderTop: '1px solid #111', paddingTop: '15px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#555', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>Why It Worked:</span>
                  <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {study.points.map((point, idx) => (
                      <li key={idx} style={{ fontSize: '0.75rem', color: '#888', display: 'flex', alignItems: 'flex-start' }}>
                        <span style={{ color: '#ff3333', marginRight: '8px', fontWeight: 'bold' }}>▪</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 2-COLUMN SPLIT: THE FORMULA & INSIGHTS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px' }}>
          
          {/* LEFT: The Modern Engagement Formula */}
          <div className="studio-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Strategic Blueprint</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '4px 0 0 0', letterSpacing: '0.5px' }}>THE MODERN FORMULA</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', flexGrow: 1 }}>
              {modernFormula.map((item, i) => (
                <div key={i} style={{ backgroundColor: '#000', border: '1px solid #1a1a1a', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 8px 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.75rem', color: '#777', margin: 0, lineHeight: '1.4' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Culture Insights & Content Types */}
          <div className="studio-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Psychology & Action</span>
              <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '900', margin: '4px 0 0 0', letterSpacing: '0.5px' }}>CULTURE & CONTENT</h2>
            </div>

            <div style={{ display: 'flex', gap: '25px', flexGrow: 1 }}>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.7rem', color: '#555', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>Internet Insights</span>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cultureInsights.map((insight, idx) => (
                    <li key={idx} style={{ fontSize: '0.8rem', color: '#ccc', display: 'flex', alignItems: 'flex-start', lineHeight: '1.4' }}>
                      <span style={{ color: '#ff3333', marginRight: '8px', fontWeight: 'bold' }}>▪</span> {insight}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ width: '1px', backgroundColor: '#1a1a1a' }}></div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.7rem', color: '#555', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>Content That Builds</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {engagementContent.map((content, idx) => (
                    <span key={idx} style={{ backgroundColor: '#090909', border: '1px solid #1a1a1a', padding: '6px 10px', borderRadius: '4px', fontSize: '0.75rem', color: '#888', textTransform: 'lowercase' }}>
                      {content}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 🎬 HIGH IMPACT COMPOSITION FOOTER */}
        <div style={{ textAlign: 'center', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #222' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 15px 0', textTransform: 'uppercase' }}>
            The internet no longer rewards brands that sell. <br/>
            <span style={{ color: '#ff3333' }} className="neon-glow-text">It rewards brands that connect.</span>
          </h2>
          <p style={{ color: '#777', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 30px 0' }}>
            The strongest brands don’t interrupt culture. They become part of it.
          </p>

          <button 
            style={{ backgroundColor: '#ff3333', color: '#000', border: 'none', padding: '16px 40px', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 0 20px rgba(255,51,51,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ff3333'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,51,51,0.4)'; }}
          >
            Explore The Engagement System
          </button>
          <div style={{ color: '#555', fontSize: '0.7rem', marginTop: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Designing experiences people want to be part of.
          </div>
        </div>

      </div>
    </div>
  );
};

export default EngagementDesign;