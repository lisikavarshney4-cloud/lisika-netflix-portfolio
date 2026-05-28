import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. CUSTOM GLOWING ICONS (Thin line-art like your screenshot)
// ----------------------------------------------------------------------
const NeonIcon = ({ name }: { name: string }) => {
  const getPath = () => {
    switch (name) {
      case 'brain': return <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/><path d="M12 8v4l2.5 1.5"/></>;
      case 'eye': return <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>;
      case 'people': return <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>;
      case 'clapper': return <><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.4-2.2 1.5-2.5l13.5-4c1.1-.3 2.2.4 2.5 1.5l.6 2.4z"/><path d="m9.2 4.5 2.9 8.1"/><path d="m15.5 2.6 2.9 8.1"/><path d="M3 11h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11z"/><polygon points="9 14 15 17 9 20 9 14"/></>;
      case 'heartbeat': return <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>;
      case 'camera': return <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>;
      case 'globe': return <><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></>;
      case 'search': return <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>;
      case 'target': return <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>;
      case 'pencil': return <><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></>;
      case 'heart': return <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>;
      case 'rocket': return <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></>;
      case 'star': return <><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></>;
      default: return <circle cx="12" cy="12" r="10"/>;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#ff3344" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(229, 9, 20, 0.6))' }}>
      {getPath()}
    </svg>
  );
};

// ----------------------------------------------------------------------
// 2. CONTENT DATA
// ----------------------------------------------------------------------
const frameworkData = [
  { icon: "brain", title: "EMOTIONAL\nPOSITIONING", desc: "Understanding the emotions that drive decisions." },
  { icon: "eye", title: "VISUAL\nIDENTITY", desc: "Crafting a look and feel that reflects the brand soul." },
  { icon: "people", title: "AUDIENCE\nCONNECTION", desc: "Building content that speaks directly to the right people." },
  { icon: "clapper", title: "NARRATIVE\nHOOKS", desc: "Creating compelling openings that grab attention instantly." },
  { icon: "heartbeat", title: "RETENTION\nPSYCHOLOGY", desc: "Designing stories that keep people watching till the end." },
  { icon: "camera", title: "CINEMATIC\nBRANDING", desc: "Using cinematic techniques to elevate brand perception." },
  { icon: "globe", title: "CONTENT\nUNIVERSE", desc: "Building a connected world, not just individual posts." }
];

const timelineData = [
  { num: "01", icon: "search", phase: "DISCOVER", desc: "I dive deep into the brand, audience, and market to uncover real insights." },
  { num: "02", icon: "target", phase: "DEFINE", desc: "I define the brand voice, story angle, and emotional direction." },
  { num: "03", icon: "pencil", phase: "BUILD", desc: "I craft cinematic content and visuals that bring the story to life." },
  { num: "04", icon: "heart", phase: "CONNECT", desc: "I create content that builds real emotional connection and engagement." },
  { num: "05", icon: "rocket", phase: "SCALE", desc: "I optimize and expand the story across platforms to maximize impact." }
];

const brandStories = [
  { tag: "LIFESTYLE BRAND", title: "BEYOND ORDINARY", desc: "Building a premium lifestyle identity.", img: "/brand-assets/hero.png" },
  { tag: "FASHION BRAND", title: "STYLE THAT SPEAKS", desc: "Creating emotion through elegance.", img: "/brand-assets/hero.png" },
  { tag: "FOOD & BEVERAGE", title: "TASTE THE EXPERIENCE", desc: "Crafting stories that make people crave.", img: "/brand-assets/hero.png" },
  { tag: "TECH BRAND", title: "FUTURE UNFOLDS", desc: "Visual storytelling for innovation-driven brands.", img: "/brand-assets/hero.png" }
];

const impactData = [
  { icon: "eye", stat: "3X", title: "MORE ENGAGEMENT", desc: "Emotion-driven content gets more attention." },
  { icon: "heart", stat: "2.5X", title: "MORE BRAND RECALL", desc: "Stories make brands unforgettable." },
  { icon: "people", stat: "4X", title: "MORE SHARES", desc: "People share stories they connect with." },
  { icon: "star", stat: "STRONGER", title: "LOYALTY", desc: "Emotional connection builds brand loyalty." }
];

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------------------------
const BrandStorytelling: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#020202', minHeight: '100vh', color: '#fff', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', paddingBottom: '100px' }}>
      
      {/* Hide Scrollbars for a cleaner UI */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 🎬 1. THE EMOTIONAL HOOK (CINEMATIC HERO) */}
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
        backgroundImage: 'linear-gradient(to bottom, rgba(3,3,3,0.3) 0%, #020202 100%), url("/brand-assets/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* 🔙 EXACT SCREENSHOT BACK BUTTON (Audience Psychology Style) */}
        <button 
          onClick={() => navigate(-1)} 
          style={{ position: 'absolute', top: '40px', left: '4%', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', zIndex: 20, fontSize: '1rem', letterSpacing: 'normal' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ← Back to Universe
        </button>

        <h3 style={{ color: '#e50914', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1rem', marginBottom: '15px', fontWeight: 'bold' }}>
          Visual Storyteller + Content Strategist
        </h3>
        
        <h1 style={{ fontSize: '5.2rem', fontWeight: '900', margin: '0 0 15px 0', lineHeight: '1.05', textTransform: 'uppercase', letterSpacing: '-1px', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
          People don't remember content.<br/>
          <span style={{ color: '#aaa' }}>They remember how it made them feel.</span>
        </h1>
        
        <p style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '2px', borderRight: '2px solid #e50914', paddingRight: '10px', display: 'inline-block' }}>
          Building emotional worlds through visuals, strategy, and narrative.
          <span style={{ position: 'relative', display: 'inline-block', width: '2px', height: '1.2rem', backgroundColor: '#e50914', top: '4px', left: '10px', animation: 'typing-blink 1s step-end infinite' }}></span>
        </p>
        
        <style>{`
          @keyframes typing-blink { 50% { opacity: 0; } }
        `}</style>
      </div>

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 4%' }}>

        {/* 🎬 SECTION 1: THE STORY FRAMEWORK (Exact Screenshot Match) */}
        <div style={{ marginTop: '50px', marginBottom: '100px' }}>
          <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.4rem', margin: '0 0 8px 0', letterSpacing: '1px', fontWeight: '900' }}>THE STORY FRAMEWORK</h2>
          <p style={{ color: '#aaa', fontSize: '1.05rem', margin: '0 0 30px 0', fontWeight: '300' }}>The pillars behind every powerful brand story I create.</p>
          
          <div className="hide-scroll" style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '20px' }}>
            {frameworkData.map((item, i) => (
              <div key={i} style={{ 
                minWidth: '220px', 
                height: '350px',
                backgroundColor: '#050505', 
                border: '1px solid #222', 
                borderRadius: '8px', 
                position: 'relative', 
                overflow: 'hidden',
                display: 'flex', 
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#e50914'; }} 
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#222'; }}
              >
                {/* Cinematic Background Image inside the Card */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url('/brand-assets/hero.png')`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, #050505 100%)', zIndex: 1 }}></div>

                {/* Left-Aligned Card Content */}
                <div style={{ position: 'relative', zIndex: 2, padding: '30px 20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '25px', alignSelf: 'flex-start' }}><NeonIcon name={item.icon} /></div>
                  <h3 style={{ fontSize: '0.95rem', color: '#fff', margin: '0 0 15px 0', lineHeight: '1.3', letterSpacing: '1px', whiteSpace: 'pre-line', fontWeight: '800' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#888', margin: 0, lineHeight: '1.5', flexGrow: 1 }}>{item.desc}</p>
                  
                  {/* Small Circle Arrow */}
                  <div style={{ alignSelf: 'flex-end', width: '22px', height: '22px', border: '1px solid #555', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#888', fontSize: '0.7rem' }}>→</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 SECTION 2: HOW I BUILD STORIES */}
        <div style={{ marginBottom: '120px', backgroundColor: '#050505', padding: '60px 40px', borderRadius: '12px', border: '1px solid #1a1a1a' }}>
          <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.4rem', margin: '0 0 8px 0', letterSpacing: '1px', fontWeight: '900' }}>HOW I BUILD STORIES</h2>
          <p style={{ color: '#aaa', fontSize: '1.05rem', margin: '0 0 60px 0', fontWeight: '300' }}>A proven process that turns ideas into emotional experiences.</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', flexWrap: 'wrap', gap: '30px' }}>
            <div style={{ position: 'absolute', top: '35px', left: '5%', right: '5%', borderTop: '1px dashed #333', zIndex: 0, display: window.innerWidth > 768 ? 'block' : 'none' }}></div>
            
            {timelineData.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1, flex: '1', minWidth: '160px' }}>
                <div style={{ width: '70px', height: '70px', backgroundColor: '#020202', border: '1px solid #222', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' }}>
                  <NeonIcon name={step.icon} />
                </div>
                <div style={{ color: '#e50914', fontSize: '0.9rem', fontWeight: '900', marginBottom: '10px' }}>{step.num}</div>
                <h3 style={{ fontSize: '0.95rem', color: '#fff', margin: '0 0 15px 0', letterSpacing: '1.5px', fontWeight: '800' }}>{step.phase}</h3>
                <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 SECTION 3: TURNING BRANDS INTO STORIES */}
        <div style={{ marginBottom: '120px' }}>
          <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.4rem', margin: '0 0 8px 0', letterSpacing: '1px', fontWeight: '900' }}>TURNING BRANDS INTO STORIES</h2>
          <p style={{ color: '#aaa', fontSize: '1.05rem', margin: '0 0 40px 0', fontWeight: '300' }}>A few brand worlds I've helped bring to life.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {brandStories.map((story, i) => (
              <div key={i} style={{ height: '400px', borderRadius: '8px', overflow: 'hidden', position: 'relative', border: '1px solid #222', cursor: 'pointer', transition: 'transform 0.4s' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${story.img})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, transition: 'opacity 0.4s' }}></div>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 70%)' }}></div>
                
                <div style={{ position: 'absolute', bottom: '25px', left: '25px', right: '25px' }}>
                  <div style={{ color: '#888', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '2px', marginBottom: '10px' }}>{story.tag}</div>
                  <h3 style={{ color: '#fff', fontSize: '1.6rem', margin: '0 0 10px 0', lineHeight: '1.1', textTransform: 'uppercase', fontWeight: '800' }}>{story.title}</h3>
                  <p style={{ color: '#bbb', fontSize: '0.9rem', margin: '0 0 20px 0', lineHeight: '1.5' }}>{story.desc}</p>
                  <div style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', display: 'flex', alignItems: 'center' }}>
                    VIEW STORY <span style={{ marginLeft: '8px', color: '#e50914', fontSize: '1.2rem' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 SECTION 4: THE IMPACT */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#e50914', textTransform: 'uppercase', fontSize: '1.4rem', margin: '0 0 8px 0', letterSpacing: '1px', fontWeight: '900' }}>THE IMPACT</h2>
          <p style={{ color: '#aaa', fontSize: '1.05rem', margin: '0 0 40px 0', fontWeight: '300' }}>Stories that don't just look good, they perform.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {impactData.map((impact, i) => (
              <div key={i} style={{ backgroundColor: '#050505', border: '1px solid #222', borderRadius: '8px', padding: '50px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#e50914'} onMouseLeave={e => e.currentTarget.style.borderColor = '#222'}>
                <div style={{ marginBottom: '25px' }}><NeonIcon name={impact.icon} /></div>
                <div style={{ color: '#e50914', fontSize: impact.stat.length > 4 ? '2.3rem' : '4rem', fontWeight: '900', margin: '0 0 10px 0', letterSpacing: impact.stat.length > 4 ? '0px' : '-2px', lineHeight: '1', width: '100%', overflowWrap: 'break-word' }}>{impact.stat}</div>
                <h3 style={{ fontSize: '0.9rem', color: '#fff', margin: '0 0 10px 0', letterSpacing: '1.5px', lineHeight: '1.4', fontWeight: '800' }}>{impact.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#777', margin: 0, lineHeight: '1.5' }}>{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 FOOTER SIGNATURE */}
        <div style={{ textAlign: 'center', marginTop: '80px', padding: '50px 0', borderTop: '1px solid #1a1a1a' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', letterSpacing: '4px', textTransform: 'uppercase', lineHeight: '1.5' }}>
            Every brand has a story. <span style={{ color: '#e50914' }}>I build the atmosphere around it.</span>
            <span style={{ marginLeft: '20px', fontFamily: '"Brush Script MT", cursive', textTransform: 'none', color: '#555', fontSize: '2rem', fontWeight: 'normal', letterSpacing: '1px' }}>— Creator</span>
          </h2>
        </div>

      </div>
    </div>
  );
};

export default BrandStorytelling;
