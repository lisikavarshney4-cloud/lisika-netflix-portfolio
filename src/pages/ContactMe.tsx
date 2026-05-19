import React, { useEffect, useState } from 'react';
import './ContactMe.css';
// 📸 PERFECTLY LINKED VIA DIRECT MODULE IMPORT
import profilePic from '../images/lisika.png'; 
import { FaEnvelope, FaLinkedin, FaChartLine, FaStar, FaBullhorn } from 'react-icons/fa'; 
import { ContactMe as IContactMe } from '../types';
import { contactInfo } from '../data/constants';

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();

  useEffect(() => {
    async function fetchUserData() {
      const data = contactInfo;
      setUserData(data);
    }
    fetchUserData();
  }, []);

  if (!userData) return <div className="loading-screen">Loading Pitch Hub...</div>;

  return (
    <div className="creative-contact-page">
      <div className="pitch-hero-bg">
        <div className="pitch-overlay-dark"></div>
      </div>

      <div className="pitch-container">
        
        {/* LEFT COLUMN: THE STRATEGIC PITCH */}
        <div className="pitch-text-section">
          <span className="pitch-badge">
            <FaStar style={{ marginRight: '6px', color: '#e50914' }} /> Why Hire Me?
          </span>
          <h1 className="pitch-heading">
            Building Brands That <span className="highlight-red">Cut Through</span> The Noise.
          </h1>
          <p className="pitch-subtext">
            I don’t just manage social feeds or look at vanity metrics. I combine data-driven performance analytics with premium storytelling to plug retention gaps, engineer organic growth, and craft visual identities that people remember.
          </p>

          <div className="value-pillars">
            <div className="pillar-item">
              <div className="pillar-icon-box"><FaChartLine /></div>
              <div className="pillar-content">
                <h4>Data-Backed Growth</h4>
                <p>Translating audience insights and campaign performance into scalable content pipelines.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box"><FaBullhorn /></div>
              <div className="pillar-content">
                <h4>Visual Gallery</h4>
                <p>Designing thumb-stopping short-form video hooks and editorial aesthetics that convert.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE CONNECTOR TERMINAL CARD */}
        <div className="premium-terminal-card">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">strategist_identity.exe</span>
          </div>

          <div className="terminal-body">
            <div className="profile-identity-block">
              <div className="avatar-wrapper">
                {/* 🚀 FIXED: Now renders perfectly utilizing our bundle asset hook */}
                <img src={profilePic} alt="Lisika Varshney" className="premium-avatar" />
                <div className="avatar-glow"></div>
              </div>
              <div className="identity-details">
                <h3>{userData?.name || "Lisika Varshney"}</h3>
                <p className="title-tag">{userData?.title || "Brand & Content Strategist"}</p>
                <p className="location-tag">📍 Delhi, India | {userData?.companyUniversity || "Delhi University"}</p>
              </div>
            </div>

            <div className="terminal-divider"></div>

            <p className="cta-prompt">
              Ready to scale your content system, optimize campaign ROIs, or discuss a high-stakes strategy role? Let's talk.
            </p>

            <div className="action-button-stack">
              <a
                href={userData?.linkedinLink || "https://linkedin.com/in/your-profile"}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn btn-linkedin"
              >
                <span>Connect on LinkedIn</span>
                <FaLinkedin className="btn-icon" />
              </a>

              <a
                href="mailto:lisikavarshney@gmail.com"
                className="action-btn btn-email"
              >
                <span>Drop an Email Message</span>
                <FaEnvelope className="btn-icon" />
              </a>
            </div>

            <div className="coffee-footer-note">
              <span>Always open to brainstorm execution frameworks over coffee.</span>
            </div>
          </div>
        </div>

      </div>

      <footer className="minimalist-pitch-footer">
        <p>© 2026 Lisika Varshney. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactMe;