import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import './ProfilePage.css';
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
      className="profile-page-shell"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.45) 0%, #141414 100%), url(${backgroundImage})`
      }}
    >
      <div
        className="profile-hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="profile-hero-side-gradient" />
        <div className="profile-hero-bottom-gradient" />
        <div className="profile-hero-content">
          <ProfileBanner bannerData={profileBannerData} />
        </div>
      </div>

      <div className="profile-rows">
        <TopPicksRow profile={currentProfile} />
        <ContinueWatching profile={currentProfile} />
      </div>
    </div>
  );
};

export default ProfilePage;