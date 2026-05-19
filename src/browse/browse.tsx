import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import './browse.css';
import { profiles } from '../data/constants';


const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    localStorage.removeItem("selectedProfile");
    localStorage.removeItem("backgroundGif");
    localStorage.removeItem("profileImage");

    localStorage.setItem("selectedProfile", profile.name);
    localStorage.setItem("backgroundGif", profile.backgroundGif);
    localStorage.setItem("profileImage", profile.image);
    navigate(`/profile/${profile.name}`);
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;