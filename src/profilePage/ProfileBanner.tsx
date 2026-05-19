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
    <div
      className="banner-content"
      style={{
        position: 'relative',
        zIndex: 99,
        paddingLeft: '4%',
        marginTop: '0px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className="banner-tags" style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 600 }}>
        Brand Strategy <span className="separator" style={{ color: '#e50914', margin: '0 8px' }}>|</span>
        Visual Gallery <span className="separator" style={{ color: '#e50914', margin: '0 8px' }}>|</span>
        Social Growth
      </div>
      <h1 className="banner-title" style={{ fontSize: '4.5rem', fontWeight: 800, margin: '0 0 10px 0', color: '#fff', lineHeight: 1.1 }}>
        Lisika Varshney
      </h1>
      <div className="banner-meta" style={{ display: 'flex', gap: '10px', fontSize: '1rem', color: '#ccc', marginBottom: '20px' }}>
        <span>2026</span>
        <span style={{ color: '#666' }}>|</span>
        <span>ROLE: Brand & Content Strategist</span>
        <span style={{ color: '#666' }}>|</span>
        <span>Experience: 3+ Years</span>
      </div>
      <p className="banner-description" style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.5, color: '#fff', marginBottom: '30px', marginTop: 0 }}>
        {bannerData.profileSummary}
      </p>
      <div className="banner-buttons" style={{ display: 'flex', gap: '15px' }}>
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
