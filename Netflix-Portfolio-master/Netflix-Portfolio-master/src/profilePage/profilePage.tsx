import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { profileBannerData } from '../data/constants';
import { ProfileType } from '../types'; 

// 📸 BACKGROUND IMAGES
import bgRecruiter from '../images/background-city.png';      
import bgStrategist from '../images/background-strategy.png';  

const profileBackgrounds: Record<ProfileType, string> = {
  Recruiter: bgRecruiter,
  'Brand & Content Strategist': bgStrategist, 
  stalker: bgRecruiter,
  Adventurer: bgRecruiter
};

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['Recruiter', 'Brand & Content Strategist', 'stalker', 'Adventurer'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'Recruiter';

  const activeBackground = profileBackgrounds[profile];

  return (
    <div 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.4) 0%, #141414 100%), url(${activeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh', 
        paddingBottom: '50px',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      
      {/* --- 1. HERO SECTION --- */}
      <div style={{ position: 'relative', width: '100%', height: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <video
          src="/recruiter-bg.mp4" 
          autoPlay loop muted playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.3) 50%, transparent 100%)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '150px', background: 'linear-gradient(to top, rgba(20, 20, 20, 0.95) 0%, transparent 100%)', zIndex: 1 }}></div>
        
        <div style={{ position: 'relative', zIndex: 5, width: '100%' }}>
          <ProfileBanner bannerData={profileBannerData} />
        </div>
      </div>

      {/* --- 2. ROWS SECTION --- */}
      <div style={{ position: 'relative', zIndex: 10, marginTop: '-80px' }}>
        <TopPicksRow profile={profile} />
        <ContinueWatching profile={profile} />
      </div>

    </div>
  );
};

export default ProfilePage;