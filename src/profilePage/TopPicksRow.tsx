import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaProjectDiagram, FaEnvelope, FaMusic, FaBook, FaLightbulb, FaPaintBrush, FaChartLine, FaGlobe } from 'react-icons/fa';
import { ProfileType } from '../types';

import skillsImg from '../images/skills.png';
import projectsImg from '../images/projects.png';
import experienceImg from '../images/experience.png';
import certificatesImg from '../images/certificates.png';
import contactMeImg from '../images/contact-me.png';
import caseStudyImg from '../images/case-study.png';
import visualGalleryImg from '../images/visual-gallery.png';

interface TopPicksRowProps {
  profile: ProfileType;
}

const rowTitles: Record<ProfileType, string> = {
  Recruiter: "Today's Top Picks for Recruiter",
  'Brand & Content Strategist': "Top Strategy Picks",
  stalker: "Trending Now",
  Adventurer: "Discover New Worlds"
};

const topPicksConfig: Record<ProfileType, { title: string; imgSrc: string; icon: JSX.Element; route: string }[]> = {
  Recruiter: [
    { title: "Skills", imgSrc: skillsImg, icon: <FaCode />, route: "/skills" },
    { title: "Projects", imgSrc: projectsImg, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Experience", imgSrc: experienceImg, icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: certificatesImg, icon: <FaCertificate />, route: "/certifications" },
    { title: "Contact Me", imgSrc: contactMeImg, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  'Brand & Content Strategist': [
    { title: "Audience Psychology", imgSrc: skillsImg, route: "/audience-psychology", icon: <FaLightbulb /> },
    { title: "Brand Storytelling", imgSrc: caseStudyImg, route: "/brand-storytelling", icon: <FaBook /> },
    { title: "Visual Gallery", imgSrc: visualGalleryImg, route: "/visual-gallery", icon: <FaPaintBrush /> },
    { title: "Viral Mechanics", imgSrc: projectsImg, route: "/viral-mechanics", icon: <FaChartLine /> },
    { title: "Trend Forecasting", imgSrc: experienceImg, route: "/trend-forecasting", icon: <FaGlobe /> }
  ],
  stalker: [
    { title: "Contact Me", imgSrc: contactMeImg, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: projectsImg, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: experienceImg, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: certificatesImg, route: "/certifications", icon: <FaCertificate /> }
  ],
  // 🚀 WE EMPTIED THIS OUT SO THE ROW HIDES COMPLETELY!
  Adventurer: [] 
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];
  const dynamicTitle = rowTitles[profile];

  // 🚀 SAFETY CHECK: If there are no picks (like Adventurer), hide the whole section!
  if (!topPicks || topPicks.length === 0) return null;

  return (
    <div className="top-picks-row">
      <h2 className="row-title">{dynamicTitle}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;