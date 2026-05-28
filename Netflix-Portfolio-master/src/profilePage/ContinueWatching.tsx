import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css'; 
import { 
  FaBookOpen, FaImages, FaWrench, FaEnvelope, FaUsers, 
  FaLaptopCode, FaPenNib, FaChartLine, FaGamepad, 
  FaUserSecret, FaHeadphones, FaBook, FaMicrophoneAlt, FaCameraRetro
} from 'react-icons/fa';
import { ProfileType } from '../types';

// 🎬 STANDARD IMAGES
import caseStudyImg from '../images/case-study.png';
import visualGalleryImg from '../images/visual-gallery.png';
import skillsImg from '../images/skills.png';
import contactMeImg from '../images/contact-me.png';
import thoughtLeadershipImg from '../images/writeups.png';

// 🚀 CUSTOM STRATEGIST THUMBNAILS
import aiCreativeSystemImg from '../images/ai-creative-system.png';
import moodboardUniverseImg from '../images/moodboard-universe.png';
import engagementDesignImg from '../images/engagement-design.png';
import contentEcosystemImg from '../images/content-ecosystem.png'; 
import viralMechanicsImg from '../images/viral-mechanics.png'; 

// 🎮 COOL ARCADE COVERS
import arcadeCoverImg from '../images/arcade-cover.png';
import neonCoverImg from '../images/neon-cover.png';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const rowTitles: Record<ProfileType, string> = {
  Recruiter: "Continue Watching for Recruiter",
  'Brand & Content Strategist': "Creative Growth Universe",
  stalker: "Because You Watched",
  Adventurer: "Resume Your Journey"
};

const continueWatchingConfig: Record<ProfileType, { title: string; imgSrc: string; icon: JSX.Element; route: string }[]> = {
  Recruiter: [
    { title: "Case Studies", imgSrc: caseStudyImg, route: "/projects", icon: <FaBookOpen /> },
    { title: "LinkedIn Writeups", imgSrc: thoughtLeadershipImg, route: "/linkedin-writeups", icon: <FaPenNib /> }, 
    { title: "Visual Gallery", imgSrc: visualGalleryImg, route: "/visual-gallery", icon: <FaImages /> },
    { title: "Tools I Use", imgSrc: skillsImg, route: "/skills", icon: <FaWrench /> },
    { title: "Contact Me", imgSrc: contactMeImg, route: "/contact-me", icon: <FaEnvelope /> }
  ],
  'Brand & Content Strategist': [
    { title: "AI Creative Systems", imgSrc: aiCreativeSystemImg, route: "/ai-creative-systems", icon: <FaLaptopCode /> }, 
    { title: "LinkedIn Writeups", imgSrc: thoughtLeadershipImg, route: "/linkedin-writeups", icon: <FaPenNib /> },
    { title: "Moodboard Universe", imgSrc: moodboardUniverseImg, route: "/moodboards", icon: <FaImages /> },
    { title: "Engagement Design", imgSrc: engagementDesignImg, route: "/engagement", icon: <FaUsers /> },
    { title: "Content Ecosystems", imgSrc: contentEcosystemImg, route: "/ecosystems", icon: <FaLaptopCode /> },
    { title: "Viral Mechanics", imgSrc: viralMechanicsImg, route: "/viral-mechanics", icon: <FaChartLine /> } 
  ],
  stalker: [
    // 🕵️ THE "DEEP LORE" ROW (Socials, Media, Aesthetic)
    { title: "Digital Footprint", imgSrc: contactMeImg, route: "/contact-me", icon: <FaUserSecret /> },
    { title: "The Bookshelf", imgSrc: caseStudyImg, route: "/books", icon: <FaBook /> },
    { title: "On Repeat (Music)", imgSrc: visualGalleryImg, route: "/music", icon: <FaHeadphones /> },
    { title: "Top Podcasts", imgSrc: thoughtLeadershipImg, route: "/podcasts", icon: <FaMicrophoneAlt /> },
    { title: "Life & Lens", imgSrc: skillsImg, route: "/gallery", icon: <FaCameraRetro /> }
  ],
  Adventurer: [
    { title: "Classic Arcade", imgSrc: arcadeCoverImg, route: "/game", icon: <FaGamepad /> },
    { title: "Neon Matrix", imgSrc: neonCoverImg, route: "/neon-matrix", icon: <FaGamepad /> }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const navigate = useNavigate();
  const continueWatching = continueWatchingConfig[profile];
  const dynamicTitle = rowTitles[profile];

  if (!continueWatching || continueWatching.length === 0) return null;

  return (
    <div className="top-picks-row" style={{ marginTop: '10px' }}>
      <h2 className="row-title">{dynamicTitle}</h2>
      <div className="card-row">
        {continueWatching.map((item, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(item.route)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={item.imgSrc} alt={item.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;