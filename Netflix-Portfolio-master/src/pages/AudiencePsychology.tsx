import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 🧠 Deep, creative research simplified into everyday language!
const viewerBehaviors = {
  hook: {
    title: "The Pattern Interrupt",
    subtitle: "The First 3 Seconds",
    psychology: "When people scroll, their brains are on autopilot. They are 'Scroll-Zombies' looking for a quick hit of dopamine.",
    theScience: "The Von Restorff Effect: The human brain is hardwired to ignore the ordinary and focus on what stands out.",
    yourStrategy: "I don't blend in. I use high-contrast lighting, cinematic 3D visuals, and sudden auditory cues to 'snap' the viewer out of their trance before their thumb can swipe away.",
    result: "Instant Attention",
    color: "#e50914" // Netflix Red
  },
  trust: {
    title: "The Halo Effect",
    subtitle: "The Next 15 Seconds",
    psychology: "Once we have their attention, we have to make them stay. People judge a brand's entire worth based on how it looks.",
    theScience: "The Halo Effect: If a video or image is beautifully designed, the brain automatically assumes the product itself is high-quality, expensive, and trustworthy.",
    yourStrategy: "I build 'Dark Luxury' aesthetics and Pixar-level polish. By making the content look like a premium movie, the viewer instantly trusts the brand without reading a single review.",
    result: "Deep Brand Trust",
    color: "#00ffcc" // Neon Cyan
  },
  action: {
    title: "Cognitive Ease",
    subtitle: "The Final Call to Action",
    psychology: "If you ask someone to buy or click too early, their brain puts up a defense wall. If it feels like work, they leave.",
    theScience: "Cognitive Ease: The human brain prefers things that are easy to process. When a choice feels natural and simple, we are 3x more likely to say yes.",
    yourStrategy: "I never force a sale. I design seamless, beautiful user journeys. I place the 'Call to Action' at the exact second the story peaks, making clicking feel like a reward rather than a chore.",
    result: "Frictionless Sales",
    color: "#ff007f" // Neon Pink
  }
};

type BehaviorKey = keyof typeof viewerBehaviors;

const AudiencePsychology: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<BehaviorKey>('hook');

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', paddingBottom: '100px', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      
      {/* 🎬 THE CINEMATIC HERO */}
      <div style={{ 
        position: 'relative', 
        height: '65vh', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, #050505 100%), url("/visual-gallery/architect.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ position: 'absolute', top: '40px', left: '4%', background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ← Back to Universe
        </button>

        <h1 style={{ fontSize: '4.5rem', fontWeight: '900', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
          The Psychology of the Scroll
        </h1>
        <p style={{ color: '#ddd', fontSize: '1.4rem', maxWidth: '750px', fontWeight: '300', lineHeight: '1.6', textShadow: '0 5px 15px rgba(0,0,0,0.8)' }}>
          People don't buy products; they buy feelings. Here is how I design content that speaks directly to human behavior, turning passive scrollers into loyal fans.
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '-40px auto 0', width: '92%', position: 'relative', zIndex: 20 }}>
        
        {/* 🧠 THE BEHAVIORAL PLAYBOOK (Interactive Section) */}
        <div style={{ marginBottom: '80px' }}>
          
          {/* Easy-to-read Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '50px' }}>
            {(Object.keys(viewerBehaviors) as BehaviorKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: '15px 30px',
                  backgroundColor: activeTab === key ? viewerBehaviors[key].color : 'rgba(255,255,255,0.03)',
                  border: activeTab === key ? `1px solid ${viewerBehaviors[key].color}` : '1px solid rgba(255,255,255,0.1)',
                  color: activeTab === key ? '#000' : '#fff',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  fontSize: '1.1rem',
                  letterSpacing: '1px',
                  boxShadow: activeTab === key ? `0 0 20px ${viewerBehaviors[key].color}40` : 'none'
                }}
              >
                {viewerBehaviors[key].title}
              </button>
            ))}
          </div>

          {/* The Content Card */}
          <div style={{ 
            backgroundColor: '#0f0f0f', 
            border: '1px solid #222', 
            borderRadius: '20px', 
            padding: '60px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.9)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Background Glow matching the active tab color */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: `radial-gradient(circle, ${viewerBehaviors[activeTab].color}20 0%, transparent 70%)`, borderRadius: '50%', zIndex: 0 }}></div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
              
              {/* Left Column: The Problem & Science */}
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '5px', color: '#fff' }}>{viewerBehaviors[activeTab].subtitle}</h2>
                <div style={{ height: '4px', width: '60px', backgroundColor: viewerBehaviors[activeTab].color, marginBottom: '30px', borderRadius: '2px' }}></div>
                
                <h4 style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '10px', fontWeight: 'bold' }}>How The Brain Works</h4>
                <p style={{ fontSize: '1.25rem', color: '#fff', lineHeight: '1.6', marginBottom: '30px' }}>
                  {viewerBehaviors[activeTab].psychology}
                </p>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '20px', borderLeft: `3px solid ${viewerBehaviors[activeTab].color}`, borderRadius: '0 8px 8px 0' }}>
                  <p style={{ margin: 0, fontStyle: 'italic', color: '#ccc', lineHeight: '1.5' }}>
                    🔬 {viewerBehaviors[activeTab].theScience}
                  </p>
                </div>
              </div>

              {/* Right Column: Your Solution */}
              <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ color: viewerBehaviors[activeTab].color, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 'bold' }}>My Creative Strategy</h4>
                <p style={{ fontSize: '1.4rem', color: '#ddd', lineHeight: '1.7', marginBottom: '40px', fontWeight: '300' }}>
                  "{viewerBehaviors[activeTab].yourStrategy}"
                </p>
                
                <div style={{ display: 'inline-block', border: '1px solid #333', padding: '15px 30px', borderRadius: '50px', alignSelf: 'flex-start', backgroundColor: '#000' }}>
                  <span style={{ color: '#777', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginRight: '10px' }}>End Result:</span>
                  <span style={{ color: viewerBehaviors[activeTab].color, fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '1px' }}>{viewerBehaviors[activeTab].result}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 🎬 CLOSING THOUGHT */}
        <div style={{ textAlign: 'center', marginTop: '100px', padding: '60px 20px', backgroundColor: '#141414', borderRadius: '16px', border: '1px solid #222' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' }}>Beautiful visuals are just the beginning.</h2>
          <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
            To win on social media, you have to understand the human on the other side of the screen. Let's create something that makes them feel.
          </p>
          <button 
            onClick={() => navigate('/projects')}
            style={{ padding: '16px 45px', backgroundColor: '#fff', color: '#000', fontSize: '1.2rem', fontWeight: '900', border: 'none', borderRadius: '50px', cursor: 'pointer', transition: 'transform 0.2s', textTransform: 'uppercase', letterSpacing: '1px' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            See The Work
          </button>
        </div>

      </div>
    </div>
  );
};

export default AudiencePsychology;