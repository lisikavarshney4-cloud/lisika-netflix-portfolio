import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. CUSTOM NEON ICONS (For Viral Mechanics)
// ----------------------------------------------------------------------
const NeonIcon = ({ name }: { name: string }) => {
  const getPath = () => {
    switch (name) {
      case 'lightning': return <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></>;
      case 'eye': return <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>;
      case 'heart': return <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>;
      case 'fire': return <><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 .6-1.4l3.8-3.8A2 2 0 0 1 8.8 3h6.4z"/><path d="M9 16v-4"/><path d="M12 16v-6"/><path d="M15 16v-2"/></>;
      case 'chart': return <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>;
      case 'stop': return <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></>;
      case 'play': return <><polygon points="5 3 19 12 5 21 5 3"/></>;
      case 'share': return <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>;
      default: return <circle cx="12" cy="12" r="10"/>;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(229, 9, 20, 0.6))' }}>
      {getPath()}
    </svg>
  );
};

// ----------------------------------------------------------------------
// 2. CONTENT DATA
// ----------------------------------------------------------------------
const topTaglines = [
  "Attention is designed.",
  "Emotion travels faster.",
  "People share feelings, not posts.",
  "Virality starts with psychology.",
  "Trends are human behavior in motion."
];

const viralCode = [
  { icon: "lightning", title: "EMOTION", desc: "Content people feel spreads faster.", brand: "Nike", brandDesc: "Didn’t sell shoes. Sold ambition, struggle, identity." },
  { icon: "eye", title: "CURIOSITY", desc: "People stay when information feels unfinished.", brand: "Netflix", brandDesc: "Every trailer ends before the answer. That tension creates retention." },
  { icon: "heart", title: "RELATABILITY", desc: "People share content that feels personal.", brand: "Duolingo", brandDesc: "Turned a mascot into a chaotic internet personality. People connected emotionally." },
  { icon: "fire", title: "CONTROVERSY", desc: "Strong opinions create conversations.", brand: "Apple", brandDesc: "Minimal messaging. Bold positioning. Creates endless discussion online." },
  { icon: "chart", title: "SOCIAL PROOF", desc: "People trust what others already engage with.", brand: "Spotify", brandDesc: "Wrapped became viral because users became the marketers." }
];

const contentWins = [
  { title: "Short-form hooks", desc: "Fast emotion. Instant curiosity." },
  { title: "Cinematic storytelling", desc: "Feels immersive instead of promotional." },
  { title: "“This is so me” moments", desc: "Relatability creates shares." },
  { title: "Strong visual identity", desc: "Recognition builds retention." },
  { title: "Series-based content", desc: "One post becomes a universe." }
];

const viralFormula = [
  { phase: "STOP", desc: "Catch attention instantly.", icon: "stop" },
  { phase: "FEEL", desc: "Create emotional connection.", icon: "heart" },
  { phase: "STAY", desc: "Build curiosity loops.", icon: "eye" },
  { phase: "SHARE", desc: "Give social value.", icon: "share" },
  { phase: "REPEAT", desc: "Turn content into habit.", icon: "play" }
];

const cultureMoments = [
  { brand: "Barbie", desc: "Turned an entire movie into a pink internet movement.", img: "/brand-assets/artisanal.png" },
  { brand: "Red Bull", desc: "Doesn’t market drinks. Markets adrenaline.", img: "/brand-assets/hero.png" },
  { brand: "Zomato", desc: "Uses memes + timing + relatable humor to dominate engagement.", img: "/brand-assets/pixar.png" },
  { brand: "Glossier", desc: "Built community-first branding instead of traditional ads.", img: "/brand-assets/artisanal.png" }
];

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------------------------
const ViralMechanics: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#020202', minHeight: '100vh', color: '#fff', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', paddingBottom: '100px' }}>
      
      {/* Hide Scrollbars */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .neon-text-glow { text-shadow: 0 0 20px rgba(229, 9, 20, 0.5); }
      `}</style>

      {/* 🎬 1. HERO SECTION */}
      <div style={{ 
        position: 'relative', 
        height: '85vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 5%',
        zIndex: 10,
        backgroundImage: 'linear-gradient(to bottom, rgba(2,2,2,0.4) 0%, #020202 100%), url("/brand-assets/pixar.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* BACK BUTTON */}
        <button 
          onClick={() => navigate(-1)} 
          style={{ position: 'absolute', top: '40px', left: '4%', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', zIndex: 20, fontSize: '1rem' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ← Back to Universe
        </button>

        <h1 style={{ fontSize: '6rem', fontWeight: '900', margin: '0 0 15px 0', lineHeight: '1.05', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 10px 40px rgba(0,0,0,0.9)' }}>
          VIRAL <span style={{ color: '#e50914' }} className="neon-text-glow">MECHANICS</span>
        </h1>
        
        <p style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '3px', borderRight: '2px solid #e50914', paddingRight: '15px', display: 'inline-block' }}>
          Why some content disappears... <br/>
          <span style={{ color: '#aaa', fontSize: '1.2rem' }}>and some becomes internet culture.</span>
          <span style={{ position: 'relative', display: 'inline-block', width: '2px', height: '1.2rem', backgroundColor: '#e50914', top: '4px', left: '10px', animation: 'typing-blink 1s step-end infinite' }}></span>
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4%' }}>

        {/* 🎬 2. TOP MINI TAGLINES (Scrolling Pills) */}
        <div className="hide-scroll" style={{ display: 'flex', gap: '15px', overflowX: 'auto', padding: '20px 0', marginTop: '-30px', marginBottom: '80px', position: 'relative', zIndex: 20 }}>
          {topTaglines.map((tag, i) => (
            <div key={i} style={{ whiteSpace: 'nowrap', backgroundColor: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)', border: '1px solid #333', padding: '15px 30px', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', color: '#ccc' }}>
              {tag}
            </div>
          ))}
        </div>

        {/* 🎬 3. THE VIRAL CODE (Glassmorphism Cards) */}
        <div style={{ marginBottom: '120px' }}>
          <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.5rem', margin: '0 0 10px 0', letterSpacing: '2px', fontWeight: '900' }}>THE VIRAL CODE</h2>
          <p style={{ color: '#aaa', fontSize: '1.1rem', margin: '0 0 40px 0', fontWeight: '300' }}>Decoding the psychology behind content that spreads.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {viralCode.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#080808', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '40px 30px', display: 'flex', flexDirection: 'column', position: 'relative', transition: 'transform 0.3s ease, border-color 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#e50914'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#1a1a1a'; }}>
                <div style={{ marginBottom: '25px' }}><NeonIcon name={item.icon} /></div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: '0 0 10px 0', letterSpacing: '2px', fontWeight: '900' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#888', margin: '0 0 25px 0', lineHeight: '1.5' }}>{item.desc}</p>
                
                <div style={{ marginTop: 'auto', backgroundColor: '#111', padding: '20px', borderRadius: '8px', borderLeft: '3px solid #e50914' }}>
                  <div style={{ fontSize: '0.7rem', color: '#e50914', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>Real Example: {item.brand}</div>
                  <div style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: '1.5' }}>{item.brandDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 4. SPLIT SECTION: BEHAVIOR PATTERNS & CONTENT THAT WINS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '120px' }}>
          
          {/* Left: Internet Behavior */}
          <div style={{ flex: '1', minWidth: '300px', backgroundColor: '#050505', padding: '50px', borderRadius: '12px', border: '1px solid #111' }}>
            <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.3rem', margin: '0 0 30px 0', letterSpacing: '2px', fontWeight: '900' }}>INTERNET BEHAVIOR PATTERNS</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {["People stop for emotion.", "People stay for curiosity.", "People share identity.", "People remember stories.", "People trust communities."].map((pattern, i) => (
                <li key={i} style={{ fontSize: '1.8rem', fontWeight: '800', color: i === 0 ? '#fff' : `rgba(255,255,255, ${1 - (i * 0.15)})`, margin: '0 0 20px 0', letterSpacing: '-0.5px' }}>
                  {pattern}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Content That Wins */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.3rem', margin: '0 0 30px 0', letterSpacing: '2px', fontWeight: '900' }}>CONTENT THAT WINS</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {contentWins.map((win, i) => (
                <div key={i} style={{ borderBottom: '1px solid #1a1a1a', paddingBottom: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0 0 5px 0', fontWeight: 'bold' }}>{win.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#888', margin: 0 }}>{win.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 🎬 5. VIRAL CONTENT FORMULA (Vertical Pipeline) */}
        <div style={{ marginBottom: '120px', textAlign: 'center' }}>
          <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '2rem', margin: '0 0 10px 0', letterSpacing: '3px', fontWeight: '900' }}>THE VIRAL CONTENT FORMULA</h2>
          <p style={{ color: '#aaa', fontSize: '1.1rem', margin: '0 0 60px 0' }}>The exact sequence to engineer high-retention content.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
            {viralFormula.map((step, i) => (
              <React.Fragment key={i}>
                <div style={{ width: '160px', height: '160px', backgroundColor: '#080808', border: '2px solid #222', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                  <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '900', letterSpacing: '2px', marginBottom: '5px' }}>{step.phase}</div>
                  <div style={{ color: '#777', fontSize: '0.75rem', maxWidth: '100px', lineHeight: '1.3' }}>{step.desc}</div>
                </div>
                {i < viralFormula.length - 1 && (
                  <div style={{ color: '#e50914', fontSize: '2rem', fontWeight: '900', opacity: 0.5 }}>→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 🎬 6. REAL INTERNET CULTURE MOMENTS (Image Grid) */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.5rem', margin: '0 0 10px 0', letterSpacing: '2px', fontWeight: '900' }}>REAL INTERNET CULTURE MOMENTS</h2>
          <p style={{ color: '#aaa', fontSize: '1.1rem', margin: '0 0 40px 0', fontWeight: '300' }}>Brands that didn't just join the conversation—they started it.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {cultureMoments.map((moment, i) => (
              <div key={i} style={{ height: '350px', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1px solid #222', cursor: 'pointer', transition: 'transform 0.4s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${moment.img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4, transition: 'opacity 0.4s' }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 70%)' }}></div>
                
                <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                  <h3 style={{ color: '#fff', fontSize: '2rem', margin: '0 0 10px 0', lineHeight: '1.1', textTransform: 'uppercase', fontWeight: '900' }}>{moment.brand}</h3>
                  <p style={{ color: '#ccc', fontSize: '1rem', margin: 0, lineHeight: '1.5' }}>{moment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 7. FOOTER LINE */}
        <div style={{ textAlign: 'center', marginTop: '100px', padding: '80px 0', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: '1.2', margin: '0 0 20px 0' }}>
            Virality isn’t magic.<br/>
            <span style={{ color: '#aaa', fontSize: '1.5rem', fontWeight: '400', letterSpacing: '1px' }}>It’s emotion, identity, and timing engineered together.</span>
          </h2>
          <div style={{ marginTop: '40px', color: '#e50914', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase' }}>
            The internet remembers what people feel.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViralMechanics;
