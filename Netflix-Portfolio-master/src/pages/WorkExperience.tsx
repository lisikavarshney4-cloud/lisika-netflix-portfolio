import React from 'react';
import { timelineData } from '../data/constants';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaPlay } from 'react-icons/fa';

const Timeline: React.FC = () => {
  return (
    <div className="timeline-netflix-container" id="timeline">
      <style>{`
        .timeline-netflix-container {
          padding: 120px 20px 100px 20px !important;
          background-color: #141414 !important;
          background-image: radial-gradient(circle at center, rgba(229, 9, 20, 0.03) 0%, #141414 70%);
          color: #ffffff !important;
          min-height: 100vh;
          font-family: 'Inter', system-ui, sans-serif;
          overflow-x: hidden;
        }

        .timeline-header-block {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto 80px auto;
          text-align: center; /* Centered for the cinematic look */
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-main-title {
          font-size: 2.8rem;
          font-weight: 900;
          margin: 0 0 10px 0;
          letter-spacing: 2px;
          color: #ffffff !important;
          text-transform: uppercase;
          text-shadow: 0 4px 20px rgba(229, 9, 20, 0.4);
        }

        .title-accent {
          color: #e50914;
        }

        .section-subtitle-text {
          font-size: 1.1rem;
          color: #aaaaaa !important;
          max-width: 600px;
          line-height: 1.6;
        }

        /* --- THE ZIG-ZAG TRACK ENGINE --- */
        .timeline-track-wrapper {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        /* The Central Glowing Spine */
        .timeline-track-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #e50914 15%, #e50914 85%, transparent);
          transform: translateX(-50%);
          z-index: 1;
          box-shadow: 0 0 15px rgba(229, 9, 20, 0.5);
        }

        .timeline-item-container {
          display: flex;
          justify-content: flex-end;
          padding-right: 50%;
          position: relative;
          width: 100%;
          margin-bottom: 60px;
          opacity: 0;
          animation: slideUpFade 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          box-sizing: border-box;
        }

        /* Alternating Logic */
        .timeline-item-container:nth-child(even) {
          justify-content: flex-start;
          padding-right: 0;
          padding-left: 50%;
        }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- THE PULSING NODES --- */
        .timeline-node {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 46px;
          height: 46px;
          background: #141414;
          border: 3px solid #e50914;
          border-radius: 50%;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          box-shadow: 0 0 20px rgba(229, 9, 20, 0.6);
          transition: all 0.4s ease;
        }

        /* Continuous breathing animation for the track nodes */
        .timeline-node::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #e50914;
          animation: nodePulse 2s infinite cubic-bezier(0.25, 1, 0.5, 1);
        }

        @keyframes nodePulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        /* --- THE GLASS CARDS --- */
        .timeline-content-card {
          width: 85%; /* Gives space between the card and the center line */
          background: rgba(24, 24, 24, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          text-align: left;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          overflow: hidden;
        }

        /* Align text left/right depending on side */
        .timeline-item-container:nth-child(odd) .timeline-content-card {
          margin-right: 40px;
        }
        .timeline-item-container:nth-child(even) .timeline-content-card {
          margin-left: 40px;
        }

        /* Hover Physics */
        .timeline-item-container:hover .timeline-content-card {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(229, 9, 20, 0.5);
          box-shadow: 0 25px 50px -10px rgba(229, 9, 20, 0.25),
                      inset 0 0 20px rgba(229, 9, 20, 0.05);
        }

        .timeline-item-container:hover .timeline-node {
          background: #e50914;
          transform: translate(-50%, -50%) scale(1.15);
        }

        /* Top Accent Bar inside card */
        .timeline-content-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background: #e50914;
          transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .timeline-item-container:hover .timeline-content-card::after {
          width: 100%;
        }

        /* --- TYPOGRAPHY & DATA --- */
        .timeline-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(229, 9, 20, 0.1);
          color: #e50914;
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .timeline-role-title {
          font-size: 1.7rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 8px 0;
          letter-spacing: -0.5px;
        }

        .timeline-company-name {
          font-size: 1.1rem;
          font-weight: 500;
          color: #aaaaaa;
          margin: 0 0 25px 0;
        }

        .timeline-tech-stack {
          display: inline-block;
          font-size: 0.85rem;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 25px;
        }

        .timeline-summary-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .timeline-summary-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 14px;
          color: #cccccc;
          line-height: 1.6;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .timeline-item-container:hover .timeline-summary-list li {
          color: #ffffff; /* Brightens text on hover */
        }

        .timeline-summary-list li::before {
          content: '▹';
          position: absolute;
          left: 0;
          top: 0;
          color: #e50914;
          font-size: 1.2rem;
          font-weight: 900;
        }

        /* --- MOBILE RESPONSIVENESS (Collapses to Left-Aligned) --- */
        @media (max-width: 900px) {
          .timeline-track-wrapper::before {
            left: 30px;
            transform: none;
          }
          
          .timeline-node {
            left: 30px;
            transform: translate(-50%, -50%);
          }

          .timeline-item-container:hover .timeline-node {
            transform: translate(-50%, -50%) scale(1.15);
          }

          .timeline-item-container, 
          .timeline-item-container:nth-child(even) {
            justify-content: flex-start;
            padding-left: 80px;
            padding-right: 0;
            width: 100%;
          }

          .timeline-content-card,
          .timeline-item-container:nth-child(odd) .timeline-content-card,
          .timeline-item-container:nth-child(even) .timeline-content-card {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="timeline-header-block">
        <h2 className="section-main-title">Season <span className="title-accent">Guide</span></h2>
        <p className="section-subtitle-text">A chronological breakdown of academic background and professional productions in the digital marketing space.</p>
      </div>

      <div className="timeline-track-wrapper">
        {timelineData.map((item, index) => (
          <div 
            className="timeline-item-container" 
            key={index}
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            {/* The Breathing Central Node */}
            <div className="timeline-node">
              {item.timelineType === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            </div>

            {/* The Cinematic Content Panel */}
            <div className="timeline-content-card">
              <div className="timeline-date-badge">
                {item.timelineType === 'work' ? <FaPlay style={{ fontSize: '0.6rem' }}/> : <FaCalendarAlt />} 
                {item.dateRange}
              </div>
              
              <h3 className="timeline-role-title">{item.title}</h3>
              <h4 className="timeline-company-name">{item.name}</h4>
              
              {item.techStack && (
                <div className="timeline-tech-stack">
                  {item.techStack}
                </div>
              )}

              <ul className="timeline-summary-list">
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;