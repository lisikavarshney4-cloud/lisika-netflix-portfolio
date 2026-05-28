import React from 'react';
import './ProfileBanner.css';
import { FaInfoCircle, FaPlay } from 'react-icons/fa';

// 🚀 Forcing TypeScript to accept these EXACT props without relying on external files
interface BannerProps {
  bannerData: {
    headline: string;
    profileSummary: string;
    resumeLink: string;
    linkedinLink: string;
    backgroundImage: string;
  };
  activeProfile?: "Recruiter" | "Brand & Content Strategist" | "Adventurer" | string; 
}

// Using a standard function declaration makes TypeScript read the props perfectly
export default function ProfileBanner({ bannerData, activeProfile }: BannerProps) {
  return (
    <div className="banner-content">
      
      {/* 🎮 ADVENTURER ARCADE VIEW */}
      {activeProfile === 'Adventurer' ? (
        <>
          <div className="banner-tags">
            RETRO GAMING <span className="separator" style={{ color: '#e50914', margin: '0 8px' }}>|</span>
            HIGH SCORES <span className="separator" style={{ color: '#e50914', margin: '0 8px' }}>|</span>
            PRESS START
          </div>
          <h1 className="banner-title" style={{ fontSize: '3.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Arcade Mode
          </h1>
          <p className="banner-description" style={{ fontSize: '1.2rem', marginTop: '15px' }}>
            Need a break from the strategy? Kick back, relax, and play some cool games I built.
          </p>
        </>
      ) : (
        
      /* 💼 STANDARD PROFESSIONAL VIEW (Recruiter, Strategist, etc.) */
        <>
          <div className="banner-tags">
            Brand Strategy <span className="separator" style={{ color: '#e50914', margin: '0 8px' }}>|</span>
            Visual Gallery <span className="separator" style={{ color: '#e50914', margin: '0 8px' }}>|</span>
            Social Growth
          </div>
          <h1 className="banner-title">
            Lisika Varshney
          </h1>
          <div className="banner-meta">
            <span>2026</span>
            <span style={{ color: '#666' }}>|</span>
            <span>ROLE: Brand & Content Strategist</span>
            <span style={{ color: '#666' }}>|</span>
            <span>Experience: 2+ Years</span>
          </div>
          
          <p className="banner-description">
            Building cinematic digital experiences through strategy, storytelling, and internet culture.
            I blend branding, content systems, and AI-powered creativity to create visuals and stories people remember.
          </p>

          <div className="banner-buttons">
            <button
              className="banner-button play-button"
              onClick={() => window.open(bannerData.resumeLink, '_blank')}
            >
              <FaPlay className="button-icon" /> Resume
            </button>
            <button
              className="banner-button info-button"
              onClick={() => window.open(bannerData.linkedinLink, '_blank')}
            >
              <FaInfoCircle className="button-icon" /> LinkedIn
            </button>
          </div>
        </>
      )}
      
    </div>
  );
}