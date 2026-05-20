import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaArrowLeft, FaTimes, FaExpand, FaArrowRight } from 'react-icons/fa';

// IMPORT SCREENSHOTS FROM THE IMAGES FOLDER
import story1Img from '../images/story-1.png';
import story2Img from '../images/story-2.png';

const ThoughtLeadership: React.FC = () => {
  const navigate = useNavigate();
  
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");

  const campaigns = [
    {
      id: "01",
      title: "THE LEADERSHIP STORY",
      tagline: "“The best kitchens run on respect, not fear.”",
      description: "A storytelling-led LinkedIn post focused on leadership psychology, emotional connection, and human-first culture building.",
      metrics: "316+ reactions • 30 reposts",
      labels: ["Leadership Psychology", "Emotional Storytelling"],
      imgSrc: story1Img,
      route: "/linkedin-writeups" 
    },
    {
      id: "02",
      title: "FROM MASTERY TO MULTIPLICATION",
      tagline: "“Systems create scale.”",
      description: "A founder-focused storytelling piece about shifting from craftsmanship to scalable systems, growth psychology, and long-term impact.",
      metrics: "Executive C-Suite Engagement",
      labels: ["Founder Branding", "Systems Scaling"],
      imgSrc: story2Img,
      route: "/thought-leadership/scale-story" 
    }
  ];

  const openTheaterMode = (img: string, title: string) => {
    setActiveModalImg(img);
    setModalTitle(title);
    document.body.style.overflow = 'hidden';
  };

  const closeTheaterMode = () => {
    setActiveModalImg(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="archive-hub-root">
      <style>{`
        .archive-hub-root {
          min-height: 100vh;
          background-color: #050505;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          padding-bottom: 60px;
        }
        .hub-header {
          position: fixed;
          top: 0; left: 0; width: 100%;
          padding: 25px 40px;
          background: linear-gradient(to bottom, rgba(5,5,5,0.95), transparent);
          z-index: 100;
          display: flex;
          align-items: center;
        }
        .exit-btn {
          background: rgba(20,20,20,0.8);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          font-size: 0.8rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }
        .exit-btn:hover { background: #e50914; border-color: #e50914; }

        .hub-hero {
          padding: 150px 10% 45px;
          text-align: center;
          background: radial-gradient(circle at top, rgba(229, 9, 20, 0.08) 0%, transparent 60%);
        }
        .hub-title { font-size: 3.8rem; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
        .hub-subtitle { font-size: 1.2rem; color: #aaa; max-width: 650px; margin: 0 auto; letter-spacing: 0.5px; line-height: 1.5; }

        .ticker-bar {
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          padding: 18px 0;
          font-size: 0.85rem;
          color: #e50914;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-align: center;
        }

        .catalog-container {
          max-width: 1200px;
          margin: 60px auto 0;
          padding: 0 5%;
          display: flex;
          flex-direction: column;
          gap: 80px;
        }
        .campaign-row {
          display: flex;
          gap: 50px;
          align-items: center;
        }
        
        .campaign-left {
          flex: 1.2;
          aspect-ratio: 16 / 9;
          background: #141414;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .campaign-left:hover {
          transform: scale(1.02);
          border-color: rgba(229, 9, 20, 0.4);
        }
        .campaign-left:hover .hover-expand-overlay { opacity: 1; }
        
        .post-screenshot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hover-expand-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.5rem;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 5;
        }
        
        .campaign-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .badge-row { display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
        .label-badge {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 4px 12px;
          border-radius: 2px;
          font-size: 0.7rem;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .story-id { color: #e50914; font-size: 0.9rem; font-weight: 800; letter-spacing: 2px; margin-bottom: 4px; }
        .story-title { font-size: 1.8rem; font-weight: 800; color: #fff; margin: 0 0 10px; letter-spacing: 0.5px; }
        .story-tagline { font-size: 1.1rem; font-style: italic; color: #eee; margin-bottom: 12px; line-height: 1.4; }
        .story-desc { color: #888; font-size: 0.95rem; margin-bottom: 20px; line-height: 1.5; }
        .metric-text { font-size: 0.85rem; color: #e50914; font-weight: 600; letter-spacing: 1px; margin-bottom: 25px; text-transform: uppercase; }
        
        .view-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 12px 28px;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .view-btn:hover { background-color: #e50914; color: #fff; transform: scale(1.02); }

        .hub-footer-cta {
          text-align: center;
          padding: 100px 20px 60px;
          background: linear-gradient(to top, rgba(229, 9, 20, 0.05), transparent);
          border-top: 1px solid rgba(255,255,255,0.03);
          margin-top: 100px;
        }
        .footer-cta-title { font-size: 2.2rem; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; }
        .footer-cta-sub { color: #888; font-size: 1.05rem; margin-bottom: 30px; max-width: 500px; margin-left: auto; margin-right: auto; }
        .footer-action-btn {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 14px 35px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 2px;
          border-radius: 4px;
          cursor: pointer;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.25s ease;
        }
        .footer-action-btn:hover { background: #e50914; border-color: #e50914; box-shadow: 0 0 30px rgba(229,9,20,0.4); }

        .theater-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(5, 5, 5, 0.96);
          backdrop-filter: blur(20px);
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 80px 20px 40px; 
          overflow-y: auto; 
          animation: fadeIn 0.2s ease-out;
        }
        .theater-content-wrapper {
          position: relative;
          max-width: 650px; 
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
        }
        .theater-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 40px 80px rgba(0,0,0,0.9);
          display: block;
        }
        .theater-caption {
          margin: 20px 0;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-bottom: 2px solid #e50914;
          padding-bottom: 5px;
        }
        .theater-close-btn {
          position: fixed;
          top: 25px; right: 40px;
          background: rgba(20,20,20,0.8);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 10px 15px;
          border-radius: 50px;
          color: #fff; font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
          backdrop-filter: blur(5px);
          transition: all 0.2s;
        }
        .theater-close-btn:hover { background: #e50914; border-color: #e50914; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 900px) {
          .campaign-row { flex-direction: column; gap: 30px; }
          .campaign-left { width: 100%; }
          .hub-title { font-size: 2.5rem; }
          .hub-header { padding: 15px 20px; }
          .theater-close-btn { top: 15px; right: 20px; }
        }
      `}</style>

      {/* Header Bar */}
      <div className="hub-header">
        <button onClick={() => navigate('/browse')} className="exit-btn">
          <FaArrowLeft /> Exit Architecture
        </button>
      </div>

      {/* Hero Display */}
      <div className="hub-hero">
        {/* 🚀 CHANGED TO LINKEDIN WRITEUPS */}
        <h1 className="hub-title">LinkedIn Writeups</h1>
        <p className="hub-subtitle">
          Stories I wrote to spark emotion, conversation, and human connection online.
        </p>
      </div>

      {/* Red Branding Strip */}
      <div className="ticker-bar">
        PERSONAL BRAND STORYTELLING &nbsp;&nbsp;•&nbsp;&nbsp; EMOTIONAL THOUGHT LEADERSHIP &nbsp;&nbsp;•&nbsp;&nbsp; HUMAN-FIRST DIGITAL WRITING
      </div>

      {/* Feed Layout */}
      <div className="catalog-container">
        {campaigns.map((story, idx) => (
          <div className="campaign-row" key={idx}>
            <div className="campaign-left" onClick={() => openTheaterMode(story.imgSrc, story.title)}>
              <div className="hover-expand-overlay"><FaExpand /></div>
              <img src={story.imgSrc} alt={story.title} className="post-screenshot" />
            </div>
            <div className="campaign-right">
              <div className="badge-row">
                {story.labels.map((lbl, i) => <span className="label-badge" key={i}>{lbl}</span>)}
              </div>
              <div className="story-id">STORY {story.id}</div>
              <h2 className="story-title">{story.title}</h2>
              <div className="story-tagline">{story.tagline}</div>
              <p className="story-desc">{story.description}</p>
              <div className="metric-text">{story.metrics}</div>
              <button onClick={() => openTheaterMode(story.imgSrc, story.title)} className="view-btn">
                <FaPlay size={12} /> View Post
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Footer Section */}
      <div className="hub-footer-cta">
        <h3 className="footer-cta-title">Many More Archives Coming Soon</h3>
        <p className="footer-cta-sub">
          Fresh metrics and growth storytelling profiles are imported directly every single week.
        </p>
        <button className="footer-action-btn" onClick={() => navigate('/viral-mechanics')}>
          Explore Viral Mechanics <FaArrowRight size={12} />
        </button>
      </div>

      {/* Scrollable Reading Modal */}
      {activeModalImg && (
        <div className="theater-overlay" onClick={closeTheaterMode}>
          <button className="theater-close-btn" onClick={closeTheaterMode}><FaTimes /></button>
          <div className="theater-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="theater-caption">{modalTitle}</div>
            <img src={activeModalImg} alt="Clear Reading View" className="theater-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkedInwriteups;