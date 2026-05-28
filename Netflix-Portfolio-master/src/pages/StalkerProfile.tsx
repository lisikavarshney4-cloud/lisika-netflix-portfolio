import React, { useState, useEffect } from 'react';
import './StalkerProfile.css';
import { FaPlay, FaInfoCircle, FaTimes, FaMusic, FaSearch, FaRegStickyNote } from 'react-icons/fa';

import stalkerBg from '../images/stalker-subconscious.png';
import imgTabs from '../images/tabs-bg.png'; 
import imgThoughts from '../images/2-am-thoughts.png';
import imgAlgo from '../images/algorithm-knows-too-well.png';
import imgSaved from '../images/saved-before-sleeping.png';
import imgDreams from '../images/dreams-still-buffering.png';
import imgAI from '../images/consumed-by-ai-again.png';
import imgWishlist from '../images/wishlist-updated-again.png';
import imgEspresso from '../images/espresso-&-delusion.png';
import imgEmpire from '../images/empire-mode-activated.png';
import imgOffline from '../images/offline-somewhere.png';

// --- SYSTEM MESSAGES POOL ---
const systemMessages = [
  "hesitation detected.",
  "sleep schedule corrupted.",
  "dopamine spike detected.",
  "wishlist updated again.",
  "emotionally buffering...",
  "career anxiety activated."
];

// --- 🧠 UNIQUE SUBCONSCIOUS DATA FOR EVERY FOLDER ---
const overthinkingRow = [
  { 
    title: "Too Many Tabs Open", year: "2026", tags: "Psychological Chaos • Late Night", description: "27 tabs. 3 ideas. 0 sleep.", bgImage: imgTabs,
    deepDive: {
      subtext: "27 tabs open.\n3 ideas loading.\n0 sleep.",
      desc: "Some people close tabs.\nI collect obsessions.",
      notes: [{ text: "17 tabs just for one content system.", hover: "overcomplicating again." }, { text: "Close tabs before laptop crashes.", hover: "i will never read these." }],
      searches: ["how to become successful young", "best AI tools 2026", "luxury apartment interiors", "why do creative people overthink", "can ambition become addiction"],
      music: { title: "Rainy City Lofi", desc: "Bollywood Slowed & Soft Jazz", hover: "replayed during overthinking" },
      polaroids: [{ caption: "Draft_final_v7", img: imgTabs, hover: "it was never the final draft" }],
      metadata: ["saved at 2:47 AM", "future me better be proud.", "emotionally buffering...", "career panic activated", "opened 27 times"]
    }
  },
  { 
    title: "2:14 AM Thoughts", year: "2026", tags: "Emotional • Ambient • Focus", description: "Future me is watching. The gap between where I am and where the empire needs to be.", bgImage: imgThoughts,
    deepDive: {
      subtext: "Future me is watching.",
      desc: "The gap between where I am\nand where the empire needs to be.",
      notes: [{ text: "Chef Sunil Chauhan metrics look good.", hover: "strategy is actually working." }, { text: "Am I working hard or just anxious?", hover: "career panic at 2:11 AM" }],
      searches: ["late night aesthetic cafes saket", "how to deal with creative burnout", "luxury brand storytelling examples", "midnight street food near INA"],
      music: { title: "Night Drive Ambience", desc: "Synthwave & Rain", hover: "replayed 14 times tonight" },
      polaroids: [{ caption: "2:14 AM", img: imgThoughts, hover: "the quietest hour" }],
      metadata: ["replayed during overthinking", "running on ambition", "sleep schedule: none", "focus mode: extreme", "saved at 3:14 AM"]
    }
  },
  { 
    title: "Algorithm Knows Too Well", year: "2026", tags: "Sci-Fi • Thriller • Data", description: "Hesitation detected. Sleep schedule corrupted. Dopamine spike logged.", bgImage: imgAlgo,
    deepDive: {
      subtext: "Hesitation detected.\nDopamine spike logged.",
      desc: "The matrix is learning my aesthetic.\nEverything is a metric.",
      notes: [{ text: "Phone is listening to my thoughts.", hover: "the matrix is real." }, { text: "Stop scrolling. Start building.", hover: "doomscrolling since 1 AM." }],
      searches: ["how algorithms predict behavior", "trend forecasting models 2026", "subconscious marketing psychology", "how to trick the instagram algorithm"],
      music: { title: "Data Stream", desc: "Cyberpunk & Dark Synth", hover: "hacking my own brain" },
      polaroids: [{ caption: "Targeted Ad", img: imgWishlist, hover: "i didn't even search for this" }],
      metadata: ["dopamine spike logged", "privacy settings: compromised", "attention span: 8 seconds", "wishlist updated", "algorithm match: 99%"]
    }
  },
  { 
    title: "Saved Before Sleeping", year: "2025", tags: "Drafts • Aspirations • Art", description: "Who am I without unfinished paintings, open Canva tabs, and half-built dreams?", bgImage: imgSaved,
    deepDive: {
      subtext: "Drafts loading...\nIdeas pending.",
      desc: "Who am I without unfinished paintings,\nopen Canva tabs, and half-built dreams?",
      notes: [{ text: "Finish that portfolio concept.", hover: "procrastination station." }, { text: "Save for the dream apartment.", hover: "manifesting hard." }],
      searches: ["Pinterest dark luxury interiors", "Japanese typography inspiration", "best hardcover books for branding", "artisanal packaging design"],
      music: { title: "Soft Jazz Mix", desc: "Saxophone & Vinyl Crackle", hover: "pretending I'm in a 1920s lounge" },
      polaroids: [{ caption: "Moodboard v1", img: imgSaved, hover: "collecting lives i want to live" }],
      metadata: ["draft_27_final_final.psd", "aspirations high", "motivation low", "saved for later", "never opened again"]
    }
  },
  { 
    title: "Dreams Still Buffering", year: "2026", tags: "Luxury • Ambition • Slow Burn", description: "Building a luxury life, one obsession at a time. Career panic ignored.", bgImage: imgDreams,
    deepDive: {
      subtext: "Loading luxury life...\nPlease wait.",
      desc: "Building an empire,\none obsession at a time.",
      notes: [{ text: "This could've been bigger.", hover: "always pushing the ceiling." }, { text: "Patience is a strategy.", hover: "but i want it now." }],
      searches: ["how to become a creative director", "high ticket client acquisition", "Razorpay analytics internship details", "Spotify marketing strategy case study"],
      music: { title: "Success Frequencies", desc: "Binaural Beats & Focus", hover: "rewiring the subconscious" },
      polaroids: [{ caption: "The Vision", img: imgDreams, hover: "it's already mine" }],
      metadata: ["career panic ignored", "manifesting heavily", "empire building", "vision board updated", "loading..."]
    }
  }
];

const recommendedRow = [
  { 
    title: "Consumed by AI Again", year: "2026", tags: "Addiction • Generative • Tech", description: "Currently consuming: AI tools & internet chaos. Pushing limits.", bgImage: imgAI,
    deepDive: {
      subtext: "Prompt: cinematic dark luxury.\nGenerating...",
      desc: "5 minutes became 5 hours.\nLost in the prompt sauce.",
      notes: [{ text: "Upgrade to Google AI Pro 5TB.", hover: "running out of cloud space." }, { text: "Prompt: cinematic netflix UI.", hover: "making it a reality." }],
      searches: ["PixVerse text to video prompts", "Midjourney architecture photography", "is AI going to take my strategy job", "how to make cinematic renders"],
      music: { title: "Glitch & Code", desc: "Electronic & Ambient", hover: "the sound of processing" },
      polaroids: [{ caption: "Prompt 404", img: imgAI, hover: "failed generation" }],
      metadata: ["API limits reached", "generative addiction", "pixels and prompts", "prompt engineering", "AI overload"]
    }
  },
  { 
    title: "Wishlist Updated Again", year: "2026", tags: "Aesthetics • Dark Luxury", description: "Endless scrolling through brutalist architecture and velvet textures.", bgImage: imgWishlist,
    deepDive: {
      subtext: "Added to cart.\nCheckout pending.",
      desc: "Endless scrolling through brutalist\narchitecture and velvet textures.",
      notes: [{ text: "Matte black everything.", hover: "my color palette is just shadows." }, { text: "Don't look at the bank account.", hover: "me and my money era." }],
      searches: ["minimalist desk setup 2026", "brutalist architecture interior design", "premium branding mockups", "matte black mechanical keyboard"],
      music: { title: "Runway Ambience", desc: "Deep House & Bass", hover: "pretending i'm in a fashion film" },
      polaroids: [{ caption: "Added to Cart", img: imgWishlist, hover: "i shouldn't but i will" }],
      metadata: ["wishlist updated", "retail therapy", "dark luxury", "aesthetic obsessed", "cart value: high"]
    }
  },
  { 
    title: "Espresso & Delusions", year: "2026", tags: "Caffeine • Survival • Focus", description: "Running on caffeine & ambition. You can literally kidnap me with coffee.", bgImage: imgEspresso,
    deepDive: {
      subtext: "Double shot.\nNo sleep.",
      desc: "Running on caffeine & ambition.\nYou can literally kidnap me with coffee.",
      notes: [{ text: "Emotionally dependent on caffeine.", hover: "it's not a joke anymore." }, { text: "One more double shot.", hover: "heart palpitations incoming." }],
      searches: ["Andreas cafe delhi menu", "best outdoor seating cafes Hauz Khas", "how much caffeine is too much", "nearest metro station to Saket"],
      music: { title: "Cafe Jazz Hub", desc: "Muted Trumpet & Piano", hover: "romanticizing the grind" },
      polaroids: [{ caption: "Cup No. 4", img: imgEspresso, hover: "survival juice" }],
      metadata: ["caffeine level: 110%", "delusions of grandeur", "heart rate elevated", "survival mode", "coffee rings"]
    }
  },
  { 
    title: "Empire Mode Activated", year: "2026", tags: "Strategy • Wealth • Silence", description: "Sleep later. Empire first. Letting the success make the noise.", bgImage: imgEmpire,
    deepDive: {
      subtext: "Work in silence.\nLet success talk.",
      desc: "Sleep later. Empire first.\nBuilding the digital footprint.",
      notes: [{ text: "Update LinkedIn writeups.", hover: "networking is a full time job." }, { text: "Check engagement metrics.", hover: "the numbers don't lie." }],
      searches: ["how to scale a personal brand", "top content ecosystems 2026", "audience psychology viral mechanics", "CEO morning routine"],
      music: { title: "Boss Energy", desc: "Heavy Bass & Trap", hover: "main character syndrome activated" },
      polaroids: [{ caption: "The Blueprint", img: imgEmpire, hover: "it's all coming together" }],
      metadata: ["empire first", "focus: 100%", "silence is loud", "strategy active", "growth mindset"]
    }
  },
  { 
    title: "Offline Somewhere", year: "Future", tags: "Escape • Nature • Peace", description: "Chronically online. Manifesting a mountain cabin with a warm lamp.", bgImage: imgOffline,
    deepDive: {
      subtext: "No signal.\nFinally breathing.",
      desc: "Chronically online.\nManifesting a mountain cabin.",
      notes: [{ text: "I need to touch grass.", hover: "chronically online." }, { text: "Turn off notifications.", hover: "do not disturb." }],
      searches: ["Himalayan cabin rentals Wi-Fi", "quiet places to visit in India", "how to disconnect from social media", "Majnu Ka Tila aesthetic spots"],
      music: { title: "Forest Rain", desc: "Acoustic Guitar & Thunder", hover: "mental vacation" },
      polaroids: [{ caption: "The Cabin", img: imgOffline, hover: "someday soon" }],
      metadata: ["offline mode", "breathing room", "nature calls", "disconnecting...", "peace loading"]
    }
  }
];

export default function StalkerProfile() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeFolder, setActiveFolder] = useState<any | null>(null);
  const [sysMsg, setSysMsg] = useState(systemMessages[0]);
  const [isSearching, setIsSearching] = useState(false);

  // 🚀 BROWSER BACK BUTTON FIX
  useEffect(() => {
    const handleBackButton = () => {
      if (activeFolder) {
        setActiveFolder(null); // Close the folder instead of leaving the page
      }
    };
    window.addEventListener('popstate', handleBackButton);
    return () => window.removeEventListener('popstate', handleBackButton);
  }, [activeFolder]);

  // 🚀 CUSTOM OPEN FOLDER FUNCTION (Tricks the browser history)
  const openFolder = (card: any) => {
    setActiveFolder(card);
    window.history.pushState({ modalOpen: true }, ''); // Pushes a fake page to history
  };

  // 🚀 CUSTOM CLOSE FOLDER FUNCTION (Cleans up the fake history page)
  const closeFolder = () => {
    setActiveFolder(null);
    if (window.history.state?.modalOpen) {
      window.history.back(); // Pops the fake page safely
    }
  };

  useEffect(() => {
    if (!activeFolder) return;
    const interval = setInterval(() => {
      setSysMsg(systemMessages[Math.floor(Math.random() * systemMessages.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeFolder]);

  return (
    <div className="subconscious-streaming-root">
      
      {/* 🎬 MAIN NETFLIX VIEW */}
      <div className={`main-view ${activeFolder ? 'blurred-bg' : ''}`}>
        <div className="cinematic-grain"></div>
        <div className="ambient-red-fog"></div>
        
        <div className="subconscious-hero" style={{ backgroundImage: `linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(10,5,5,0.7) 50%, transparent 100%), linear-gradient(to bottom, transparent 60%, #050505 100%), url(${stalkerBg})` }}>
          <div className="neon-wall-quote">"Zindagi badi honi chahiye...<br/>lambi nahi."</div>
          <div className="ambient-equalizer"><span></span><span></span><span></span><span></span></div>

          <div className="hero-content">
            <div className="hero-tags"><span style={{color: '#4caf50'}}>ALGORITHM MATCH: 99%</span> <span className="separator">|</span> PSYCHOLOGICAL THRILLER <span className="separator">|</span> LATE NIGHT</div>
            <h1 className="hero-title glitch-hover">Subconscious<br/>Streaming System</h1>
            <div className="hero-meta-row">2026 <span className="separator-thin">|</span> ROLE: Overthinker <span className="separator-thin">|</span> Status: Chronically Online</div>
            <p className="hero-desc">Archiving late-night thoughts chronologically. A psychological profile generated from my internet behavior, blending chaotic ambition, luxury aesthetics, and AI-powered creativity.</p>
            <div className="hero-buttons">
              <button className="btn-play"><FaPlay style={{ fontSize: '0.9rem' }}/> Resume</button>
              <button className="btn-info"><FaInfoCircle style={{ fontSize: '1.1rem' }}/> Metadata</button>
            </div>
          </div>
        </div>

        {/* ROWS */}
        <div className="streaming-row-container">
          <h2 className="streaming-row-title">Continue Overthinking</h2>
          <div className="streaming-row">
            {overthinkingRow.map((card, idx) => (
              // 🚀 UPDATED onClick to use our new openFolder function
              <div className="netflix-card-wrapper" key={`row1-${idx}`} onMouseEnter={() => setHoveredCard(`row1-${idx}`)} onMouseLeave={() => setHoveredCard(null)} onClick={() => openFolder(card)}>
                <div className="streaming-card">
                  <div className="card-bg" style={{ backgroundImage: `url(${card.bgImage})` }} />
                  <div className="card-vignette" />
                  <h3 className="card-static-title">{card.title}</h3>
                  <div className={`card-hover-expansion ${hoveredCard === `row1-${idx}` ? 'expanded' : ''}`}>
                    <h3 className="hover-title">{card.title}</h3>
                    <div className="hover-meta-row"><span className="match-green">98% Match</span><span className="year-box">{card.year}</span><span className="hd-box">HD</span></div>
                    <p className="hover-tags">{card.tags}</p>
                    <p className="hover-desc">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="streaming-row-container">
          <h2 className="streaming-row-title">Recommended For You</h2>
          <div className="streaming-row">
            {recommendedRow.map((card, idx) => (
              // 🚀 UPDATED onClick to use our new openFolder function
              <div className="netflix-card-wrapper" key={`row2-${idx}`} onMouseEnter={() => setHoveredCard(`row2-${idx}`)} onMouseLeave={() => setHoveredCard(null)} onClick={() => openFolder(card)}>
                <div className="streaming-card">
                  <div className="card-bg" style={{ backgroundImage: `url(${card.bgImage})` }} />
                  <div className="card-vignette" />
                  <h3 className="card-static-title">{card.title}</h3>
                  <div className={`card-hover-expansion ${hoveredCard === `row2-${idx}` ? 'expanded' : ''}`}>
                    <h3 className="hover-title">{card.title}</h3>
                    <div className="hover-meta-row"><span className="match-green">95% Match</span><span className="year-box">{card.year}</span><span className="hd-box">HD</span></div>
                    <p className="hover-tags">{card.tags}</p>
                    <p className="hover-desc">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎬 DYNAMIC SUBCONSCIOUS DEEP DIVE MODAL */}
      {activeFolder && (
        <div className="subconscious-deep-dive">
          
          <div className="dive-hero-bg parallax-bg" style={{ backgroundImage: `url(${activeFolder.bgImage})` }}>
            <div className="dive-rain-overlay"></div>
            <div className="dive-flicker-overlay"></div>
            <div className="dive-vignette"></div>
          </div>

          {/* 🚀 UPDATED onClick to use our new closeFolder function */}
          <button className="btn-close-dive" onClick={closeFolder}><FaTimes /></button>
          
          <div className="deep-dive-content">
            
            <div className="dive-hero-text">
              <h1 className="dive-main-title">{activeFolder.title}</h1>
              <h2 className="dive-subtext">{activeFolder.deepDive.subtext}</h2>
              <p className="dive-small-desc">{activeFolder.deepDive.desc}</p>
            </div>

            {activeFolder.deepDive.metadata.map((meta: string, i: number) => (
              <div key={i} className={`scattered-meta meta-pos-${i+1}`}>{meta}</div>
            ))}

            {activeFolder.deepDive.notes && activeFolder.deepDive.notes.map((note: any, i: number) => (
              <div key={i} className={`sticky-note note-${i+1} hover-target`} data-hover={note.hover}>
                <FaRegStickyNote className="note-icon"/> {note.text}
              </div>
            ))}

            {activeFolder.deepDive.polaroids && activeFolder.deepDive.polaroids.map((pol: any, i: number) => (
              <div key={i} className={`scattered-polaroid pol-${i+1} hover-target`} data-hover={pol.hover}>
                <div className="pol-img" style={{backgroundImage: `url(${pol.img})`}}></div>
                <div className="pol-caption">{pol.caption}</div>
              </div>
            ))}
            
            <div className={`search-history-panel ${isSearching ? 'expanded' : ''}`} onMouseEnter={() => setIsSearching(true)} onMouseLeave={() => setIsSearching(false)}>
              <div className="panel-header"><FaSearch /> 3:00 AM Search History</div>
              <ul className="search-list">
                {activeFolder.deepDive.searches.map((search: string, i: number) => (
                  <li key={i}>{search}</li>
                ))}
              </ul>
            </div>

            <div className="spotify-cinematic-player hover-target" data-hover={activeFolder.deepDive.music.hover}>
              <div className="player-glow"></div>
              <div className="player-cover"><FaMusic /></div>
              <div className="player-info">
                <h4>{activeFolder.deepDive.music.title}</h4>
                <p>{activeFolder.deepDive.music.desc}</p>
                <div className="player-bar"><div className="player-progress pulse-progress"></div></div>
              </div>
            </div>

            <div className="system-notification cinematic-notif">
              <span className="sys-blink"></span> {sysMsg}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}