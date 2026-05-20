import React from 'react';
import './ProfileBanner.css';
import { FaInfoCircle, FaPlay } from 'react-icons/fa';

interface BannerProps {
  bannerData: {
    headline: string;
    profileSummary: string;
    resumeLink: string;
    linkedinLink: string;
    backgroundImage: string;
  };
}

const ProfileBanner: React.FC<BannerProps> = ({ bannerData }) => {
  return (
    <div className="banner-content">
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
      
      {/* 🚀 REMOVED THE EXTRA SPACE HERE */}
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
    </div>
  );
};

export default ProfileBanner;