import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. NEON-RED MINIMALIST LINE ART SVG ICONS
// ----------------------------------------------------------------------
const TrendIcon = ({ name, active = false }: { name: string; active?: boolean }) => {
  const strokeColor = active ? '#ffffff' : '#ff3333';
  const shadowFilter = active ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))' : 'drop-shadow(0 0 6px rgba(255, 51, 51, 0.6))';

  const getPath = () => {
    switch (name) {
      case 'zap': return <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>;
      case 'music': return <><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></>;
      case 'cpu': return <><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/></>;
      case 'smartphone': return <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>;
      case 'activity': return <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>;
      case 'arrow': return <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>;
      case 'star': return <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>;
      case 'chart': return <><path d="M3 3v18h18"/><path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"/></>;
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
// 2. RAW ARCHITECTURE DATA DATASET
// ----------------------------------------------------------------------
const topTaglines = [
  "Culture moves before algorithms notice.",
  "Trends start as small signals.",
  "The internet changes every week.",
  "Attention shifts faster than brands react.",
  "Today’s niche becomes tomorrow’s mainstream."
];

const trendSignals = [
  { icon: "zap", title: "AESTHETIC SHIFTS", desc: "Visual styles evolve through mood and culture.", brand: "Pinterest", brandDesc: "Predicted 'coquette' and 'cybercore' before they exploded." },
  { icon: "music", title: "AUDIO CULTURE", desc: "Sounds shape online behavior faster than visuals.", brand: "TikTok", brandDesc: "One trending audio creates millions of videos overnight." },
  { icon: "cpu", title: "AI CREATIVITY", desc: "AI is completely redefining content creation speeds.", brand: "OpenAI", brandDesc: "Generative visuals are rewriting narrative building loops." },
  { icon: "smartphone", title: "MICRO TRENDS", desc: "Small internet moments spread into global movements.", brand: "Instagram", brandDesc: "Photo dumps replaced curated grids for pure authenticity." },
  { icon: "activity", title: "EMOTIONAL TRENDS", desc: "Audiences are aggressively moving toward raw reality.", brand: "BeReal", brandDesc: "Built an entire platform framework around unfiltered moments." }
];

const changingOnline = [
  { category: "STORYTELLING", before: "Fast edits", after: "Cinematic storytelling", stat: "+148% Volume" },
  { category: "VISUALS", before: "Perfect visuals", after: "Authentic moments", stat: "82% Preference" },
  { category: "ARCHITECTURE", before: "Single posts", after: "Content universes", stat: "3.4x Retention" },
  { category: "TALENT", before: "Influencers", after: "Personality creators", stat: "+210% Trust" },
  { category: "DISTRIBUTION", before: "Content", after: "Community ecosystems", stat: "89% Engagement" }
];

const futurePatterns = [
  { title: "Cinematic Content", desc: "Film-style framing performs stronger emotionally." },
  { title: "AI + Human Creativity", desc: "AI-partnered creators scale distribution faster." },
  { title: "Interactive Communities", desc: "Audiences want deep participation over passive watching." },
  { title: "Story Universes", desc: "Brands are transforming into entertainment ecosystems." },
  { title: "Personality-Led Branding", desc: "People connect with raw faces rather than clean corporate logos." }
];

const cultureShifts = [
  { brand: "Netflix", desc: "Turned binge-watching into global behavior.", img: "/brand-assets/hero.jpg", signal: "BEHAVIORAL" },
  { brand: "Spotify", desc: "Made highly personalized data feel social and shareable.", img: "/brand-assets/artisanal.jpg", signal: "DATA LOGIC" },
  { brand: "Duolingo", desc: "Used chaotic meme humor to become an internet-native icon.", img: "/brand-assets/pixar.jpg", signal: "NATIVE HUMOR" },
  { brand: "Adobe", desc: "Shifted from corporate tools to creator-focused storytelling.", img: "/brand-assets/hero.jpg", signal: "CREATOR FIRST" }
];

const cultureInsights = [
  "Trends spread through emotion.",
  "Communities accelerate attention.",
  "Visual identity creates recognition.",
  "Nostalgia keeps returning in cycles.",
  "AI is speeding up creative evolution."
];

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT (HIGH FIDELITY UI/UX EDITION)
// ----------------------------------------------------------------------
const TrendForecasting: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSignal, setHoveredSignal] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#030303', minHeight: '100vh', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', padding: '40px 3% 100px 3%', boxSizing: 'border-box' }}>
      
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        .universe-back-btn {
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          padding: 10px 24px;
          border-radius: 4px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .universe-back-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .interactive-card {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid #161616;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .interactive-card:hover {
          transform: translateY(-4px);
          border-color: #ff3333;
          box-shadow: 0 10px 30px rgba(255, 51, 51, 0.08);
        }
      `}</style>

      {/* 🎬 NAVBAR CONTROLS FRAME (Fixed spacing and exact Image 2 outline layout) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', marginTop: '20px' }}>
        <button 
          onClick={() => navigate(-1)} 
          className="universe-back-btn"
        >
          ← Back to Universe
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#0a0a0a', border: '1px solid #161616', padding: '8px 16px', borderRadius: '30px' }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#ff3333', borderRadius: '50%', display: 'inline-block' }}></span>
          <span style={{ color: '#666', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Live Signal Indexer</span>
        </div>
      </div>

      {/* 🎬 TOP HORIZONTAL SCROLLING RUNWAY */}
      <div className="hide-scroll" style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '20px', marginBottom: '15px' }}>
        {topTaglines.map((tag, i) => (
          <div key={i} style={{ whiteSpace: 'nowrap', backgroundColor: '#0a0a0a', border: '1px solid #141414', padding: '12px 24px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '600', color: '#777', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {tag}
          </div>
        ))}
      </div>

      {/* 🎬 MAIN COMMAND GRID PLATFORM */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))', gap: '24px' }}>

        {/* 🟥 QUADRANT 01: THE ACTIVE TREND SIGNALS LIST */}
        <div style={{ backgroundColor: '#070707', border: '1px solid #121212', borderRadius: '16px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Ecosystem Microdata</span>
            <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', letterSpacing: '-0.3px' }}>THE TREND SIGNALS</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
            {trendSignals.map((item, i) => (
              <div 
                key={i}
                className="interactive-card"
                style={{ borderRadius: '10px', padding: '20px', display: 'flex', gap: '20px', alignItems: 'center', borderColor: hoveredSignal === i ? '#ff3333' : '#161616' }}
                onMouseEnter={() => setHoveredSignal(i)}
                onMouseLeave={() => setHoveredSignal(null)}
              >
                <div style={{ backgroundColor: hoveredSignal === i ? '#ff3333' : '#101010', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', transition: 'background-color 0.3s' }}>
                  <TrendIcon name={item.icon} active={hoveredSignal === i} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#fff', margin: '0 0 4px 0', letterSpacing: '0.5px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#666', margin: '0 0 10px 0', lineHeight: '1.4' }}>{item.desc}</p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#020202', padding: '6px 12px', borderRadius: '4px', borderLeft: '2px solid #ff3333' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#ff3333' }}>{item.brand}</span>
                    <span style={{ fontSize: '0.7rem', color: '#555' }}>— {item.brandDesc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🟥 QUADRANT 02: WHAT'S CHANGING INTERACTIVE TAB SWITCHER */}
        <div style={{ backgroundColor: '#070707', border: '1px solid #121212', borderRadius: '16px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '25px' }}>
            <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Structural Pivot Blueprint</span>
            <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', letterSpacing: '-0.3px' }}>WHAT'S CHANGING ONLINE</h2>
          </div>

          {/* Interactive Switch Tab Row */}
          <div className="hide-scroll" style={{ display: 'flex', gap: '6px', overflowX: 'auto', backgroundColor: '#000', padding: '4px', borderRadius: '8px', border: '1px solid #141414', marginBottom: '30px' }}>
            {changingOnline.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{ flexGrow: 1, border: 'none', backgroundColor: activeTab === idx ? '#111' : 'transparent', color: activeTab === idx ? '#fff' : '#555', padding: '10px 15px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap' }}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Dynamic Vector Data Display Board */}
          <div style={{ flexGrow: 1, backgroundColor: '#000', border: '1px solid #141414', borderRadius: '12px', padding: '35px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.03 }}><TrendIcon name="chart" /></div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
              <div>
                <span style={{ fontSize: '0.65rem', color: '#555', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>Legacy Standard</span>
                <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#444', textTransform: 'uppercase', textDecoration: 'line-through' }}>{changingOnline[activeTab].before}</div>
              </div>
              <div style={{ padding: '10px', backgroundColor: 'rgba(255,51,51,0.05)', borderRadius: '50%' }}>
                <TrendIcon name="arrow" />
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.65rem', color: '#ff3333', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>Evolving Paradigm</span>
                <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{changingOnline[activeTab].after}</div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #121212', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: '400' }}>Verified Network Growth Metric Index:</span>
              <span style={{ backgroundColor: 'rgba(255,51,51,0.1)', color: '#ff3333', padding: '6px 14px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>{changingOnline[activeTab].stat}</span>
            </div>
          </div>
        </div>

        {/* 🟥 QUADRANT 03: CULTURE SHIFTS HOVER CARD GRID */}
        <div style={{ backgroundColor: '#070707', border: '1px solid #121212', borderRadius: '16px', padding: '30px' }}>
          <div style={{ marginBottom: '25px' }}>
            <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Market Adaptation Targets</span>
            <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', letterSpacing: '-0.3px' }}>CULTURE SHIFTS IN ACTION</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
            {cultureShifts.map((moment, i) => (
              <div 
                key={i} 
                style={{ height: '170px', borderRadius: '10px', overflow: 'hidden', position: 'relative', border: '1px solid #161616', cursor: 'pointer' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${moment.img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #000 25%, transparent 100%)' }}></div>
                
                <div style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'rgba(255,51,51,0.1)', border: '1px solid rgba(255,51,51,0.2)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.6rem', color: '#ff3333', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                  {moment.signal}
                </div>

                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 4px 0', fontWeight: '900', letterSpacing: '0.5px' }}>{moment.brand}</h3>
                  <p style={{ color: '#555', fontSize: '0.7rem', margin: 0, lineHeight: '1.3' }}>{moment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🟥 QUADRANT 04: SPLIT PANEL BLUEPRINT ENGINE */}
        <div style={{ backgroundColor: '#070707', border: '1px solid #121212', borderRadius: '16px', padding: '30px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '25px' }}>
            <span style={{ color: '#ff3333', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Predictive Roadmap Indexes</span>
            <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', letterSpacing: '-0.3px' }}>FUTURE INTERNET PATTERNS</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', flexGrow: 1 }}>
            
            {/* Split A: Dense List Engine */}
            <div className="hide-scroll" style={{ gridColumn: 'span 1', display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto', maxHeight: '360px', paddingRight: '5px' }}>
              {futurePatterns.map((pattern, i) => (
                <div key={i} style={{ borderBottom: '1px solid #141414', paddingBottom: '12px' }}>
                  <h4 style={{ fontSize: '0.8rem', color: '#eee', margin: '0 0 4px 0', fontWeight: 'bold', letterSpacing: '0.3px' }}>{pattern.title}</h4>
                  <p style={{ fontSize: '0.7rem', color: '#555', margin: 0, lineHeight: '1.4' }}>{pattern.desc}</p>
                </div>
              ))}
            </div>

            {/* Split B: Premium Highlight Terminal Block */}
            <div style={{ gridColumn: 'span 1', backgroundColor: '#000', border: '1px solid #141414', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px', color: '#ff3333' }}>
                <TrendIcon name="star" />
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>CORE METRICS</span>
              </div>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cultureInsights.map((insight, idx) => (
                  <li key={idx} style={{ fontSize: '0.75rem', color: '#777', display: 'flex', alignItems: 'flex-start', lineHeight: '1.3' }}>
                    <span style={{ color: '#ff3333', marginRight: '8px', fontWeight: 'bold', fontSize: '0.8rem', lineHeight: '1' }}>▪</span>
                    {insight}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>

      {/* 🎬 HIGH IMPACT COMPOSITION FOOTER */}
      <div style={{ textAlign: 'center', marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #101010' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: '900', color: '#3c3c3c', letterSpacing: '4px', textTransform: 'uppercase', margin: '0 0 5px 0' }}>
          The future of content starts as a pattern nobody notices yet.
        </h2>
        <div style={{ color: '#ff3333', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '10px' }}>
          I study the signals before they become trends.
        </div>
      </div>

    </div>
  );
};

export default TrendForecasting;