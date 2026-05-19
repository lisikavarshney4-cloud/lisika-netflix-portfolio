import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import { profileBannerData } from '../data/constants';
import { ProfileType } from '../types';
import backgroundCity from '../images/background-city.png';
import backgroundStrategy from '../images/background-strategy.png';

const backgroundImages: Record<ProfileType, string> = {
  Recruiter: backgroundCity,
  'Brand & Content Strategist': backgroundStrategy,
  stalker: backgroundCity,
  Adventurer: backgroundCity
};

const isProfileType = (profileName: string | undefined): profileName is ProfileType => (
  profileName === 'Recruiter' ||
  profileName === 'Brand & Content Strategist' ||
  profileName === 'stalker' ||
  profileName === 'Adventurer'
);

const ProfilePage: React.FC = () => {
  const { profileName } = useParams();
  const currentProfile: ProfileType = isProfileType(profileName) ? profileName : 'Recruiter';
  const backgroundImage = backgroundImages[currentProfile];

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.4) 0%, #141414 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        paddingBottom: '50px',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '85vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.3) 50%, transparent 100%)',
            zIndex: 1
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '150px',
            background: 'linear-gradient(to top, rgba(20, 20, 20, 0.95) 0%, transparent 100%)',
            zIndex: 1
          }}
        />
        <div style={{ position: 'relative', zIndex: 5, width: '100%' }}>
          <ProfileBanner bannerData={profileBannerData} />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, marginTop: '-80px' }}>
        <TopPicksRow profile={currentProfile} />
        <ContinueWatching profile={currentProfile} />
      </div>
    </div>
  );
};

export default ProfilePage;