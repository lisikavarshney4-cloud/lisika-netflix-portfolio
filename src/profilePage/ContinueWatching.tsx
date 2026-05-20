import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css'; 
import { FaBookOpen, FaImages, FaWrench, FaEnvelope, FaUsers, FaLaptopCode, FaPenNib } from 'react-icons/fa';
import { ProfileType } from '../types';

// 🚀 FIXED: The foolproof file name bypass pointing to writeups.png!
import caseStudyImg from '../images/case-study.png';
import visualGalleryImg from '../images/visual-gallery.png';
import skillsImg from '../images/skills.png';
import contactMeImg from '../images/contact-me.png';
import thoughtLeadershipImg from '../images/writeups.png';

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
    { title: "AI Creative Systems", imgSrc: skillsImg, route: "/ai-creative-systems", icon: <FaLaptopCode /> }, 
    { title: "LinkedIn Writeups", imgSrc: thoughtLeadershipImg, route: "/linkedin-writeups", icon: <FaPenNib /> },
    { title: "Moodboard Universe", imgSrc: visualGalleryImg, route: "/moodboards", icon: <FaImages /> },
    { title: "Engagement Design", imgSrc: caseStudyImg, route: "/engagement", icon: <FaUsers /> },
    { title: "Content Ecosystems", imgSrc: contactMeImg, route: "/ecosystems", icon: <FaLaptopCode /> }
  ],
  stalker: [
    { title: "Social Links", imgSrc: visualGalleryImg, route: "/contact-me", icon: <FaUsers /> }
  ],
  Adventurer: [
    { title: "Travel Blog", imgSrc: caseStudyImg, route: "/blog", icon: <FaImages /> }
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