import React, { useState } from 'react';
import { projectsData } from '../data/constants';
import { FaPlay, FaPlus, FaCheck, FaTimes, FaChartLine, FaRegFileAlt } from 'react-icons/fa';

// Direct modular imports for your clean image assets
import instagramImg from '../images/instagram.png';
import linkedinImg from '../images/linkedin.png';
import menuImg from '../images/menu.png';

const techIcons: { [key: string]: string } = {
  "Social Media Strategy": "📈",
  "Content Production": "🎬",
  "Visual Direction": "🎨",
  "PR & Communication": "🗣️",
  "Brand Management": "🏷️"
};

const Projects: React.FC = () => {
  const [savedProjects, setSavedProjects] = useState<{ [key: string]: boolean }>({});
  const [activeModalProject, setActiveModalProject] = useState<any | null>(null);

  const toggleSave = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedProjects(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  const getImageBySlug = (slug: string) => {
    if (slug === 'instagram-management') return instagramImg;
    if (slug === 'linkedin-management') return linkedinImg;
    if (slug === 'menu-design') return menuImg;
    return '';
  };

  // Helper to dynamically inject your view titles based on what project is active

  const openProjectModal = (project: any) => {
    setActiveModalProject(project);
  };

  const closeModal = () => {
    setActiveModalProject(null);
  };

  return (
    <div className="projects-netflix-container" id="projects">
      {/* SCOPED STYLING ENGINE */}
      <style>{`
        .projects-netflix-container {
          padding: 120px 40px 80px 40px !important;
          background-color: #141414 !important;
          color: #ffffff !important;
          min-height: 100vh;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
          display: block !important;
        }

        .projects-header-block {
          max-width: 1200px;
          margin: 0 auto 40px auto;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 20px;
        }

        .section-main-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 10px 0;
          letter-spacing: -0.5px;
          color: #e50914 !important;
          text-transform: uppercase;
        }

        .section-subtitle-text {
          font-size: 1.1rem;
          color: #e5e5e5 !important;
          margin: 0;
        }

        .netflix-billboard-grid {
          display: grid !important;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)) !important;
          gap: 35px !important;
          max-width: 1200px;
          margin: 40px auto 0 auto !important;
        }

        .netflix-project-card {
          background: #1f1f1f !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7) !important;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1),
                      border-color 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          display: flex !important;
          flex-direction: column !important;
          cursor: pointer;
        }

        .poster-frame-wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          overflow: hidden;
          background: #000000;
        }

        .poster-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover !important;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .poster-glass-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(31,31,31,1) 100%);
          z-index: 1;
        }

        .poster-quick-actions {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: flex;
          gap: 12px;
          z-index: 5;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .action-circle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.6);
          background: rgba(20, 20, 20, 0.8);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.2s ease;
        }

        .action-circle-btn:hover {
          transform: scale(1.15);
          border-color: #ffffff;
        }

        .play-trigger:hover {
          background: #ffffff;
          color: #000000;
        }

        .save-trigger.active-saved {
          background: #e50914 !important;
          border-color: #e50914 !important;
        }

        .netflix-project-card:hover {
          transform: scale(1.03) translateY(-5px) !important;
          border-color: #e50914 !important;
          box-shadow: 0 25px 50px -12px rgba(229, 9, 20, 0.4) !important;
        }

        .netflix-project-card:hover .poster-image {
          transform: scale(1.08);
        }

        .netflix-project-card:hover .poster-quick-actions {
          opacity: 1;
          transform: translateY(0);
        }

        .project-metadata-drawer {
          padding: 30px 25px !important;
          display: flex !important;
          flex-direction: column !important;
          flex-grow: 1;
          background: #1f1f1f !important;
          z-index: 2;
        }

        .production-badge {
          font-size: 0.75rem;
          font-weight: 800;
          color: #e50914 !important;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
          display: block;
        }

        .project-display-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 6px 0 !important;
          letter-spacing: -0.3px;
          color: #ffffff !important;
        }

        .project-display-subtitle {
          font-size: 1rem;
          font-weight: 500;
          color: #aaaaaa !important;
          margin: 0 0 16px 0 !important;
          line-height: 1.4;
        }

        .project-snippet-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #dddddd !important;
          margin: 0 0 22px 0 !important;
        }

        .project-tech-pill-row {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 10px !important;
          margin-bottom: 25px !important;
        }

        .strategy-pill {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          padding: 6px 14px !important;
          border-radius: 6px !important;
          font-size: 0.8rem;
          font-weight: 500;
          color: #ffffff !important;
          display: inline-block;
        }

        .performance-metrics-tray {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
          margin-top: auto !important;
          padding-top: 20px !important;
          border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
        }

        .metric-badge-item {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
        }

        .metric-glow-dot {
          width: 8px;
          height: 8px;
          background-color: #46d369 !important;
          border-radius: 50%;
          box-shadow: 0 0 10px #46d369;
          display: inline-block;
        }

        .metric-value-text {
          font-size: 0.95rem;
          font-weight: 700;
          color: #46d369 !important;
          letter-spacing: 0.5px;
        }

        /* --- UPGRADED HIGH-CLARITY MODAL INTERFACE --- */
        .netflix-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 10, 10, 0.92); /* Darker backdrop layer for absolute focus */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        }

        .netflix-modal-window {
          background: #181818;
          width: 100%;
          max-width: 1050px; /* Wider window layout to allow pictures to stretch clearly */
          max-height: 92vh;
          border-radius: 16px;
          overflow-y: auto;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 30px 70px -10px rgba(0, 0, 0, 0.95);
          animation: modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96) translateY(15px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-close-btn {
          position: fixed; /* Fixed placement locks tracking top button action */
          top: 35px;
          right: 35px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #232323;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10000;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }

        .modal-close-btn:hover {
          background: #e50914;
          border-color: #e50914;
          transform: scale(1.1) rotate(90deg);
        }

        /* FULL IMAGE CLARITY CONTAINER: Zero dark shading cuts your presentation layout now! */
        .modal-showcase-viewport {
          position: relative;
          width: 100%;
          background: #0d0d0d;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-viewport-label-ribbon {
          width: 100%;
          background: rgba(229, 9, 20, 0.9); /* Premium structural red ribbon header banner */
          color: white;
          text-align: center;
          padding: 10px 20px;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-sizing: border-box;
        }

        .modal-showcase-image {
          width: 100%;
          height: auto;
          max-height: 550px; /* Balanced bounding frame height limit */
          object-fit: contain !important; /* Forces the entire asset mock presentation to show up 100% perfectly with zero clipping */
          padding: 20px;
          box-sizing: border-box;
        }

        .modal-main-content {
          padding: 40px;
          box-sizing: border-box;
          background: #141414;
        }

        .modal-grid-layout {
          display: grid;
          grid-template-columns: 1.8fr 1.2fr;
          gap: 40px;
        }

        .modal-left-panel p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #cccccc;
          margin: 0 0 25px 0;
        }

        .modal-right-panel {
          display: flex;
          flex-direction: column;
          gap: 25px;
          background: rgba(255,255,255,0.02);
          padding: 30px 25px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .modal-panel-label {
          font-size: 0.8rem;
          color: #9c9c9c;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          font-weight: 800;
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .modal-grid-layout { grid-template-columns: 1fr; gap: 25px; }
          .modal-main-content { padding: 25px; }
          .modal-close-btn { top: 20px; right: 20px; }
        }
      `}</style>

      <div className="projects-grid-anchor">
        <div className="projects-header-block">
          <h2 className="section-main-title">Original Productions</h2>
          <p className="section-subtitle-text">Featured Campaigns & Core Marketing Case Studies</p>
        </div>

        <div className="netflix-billboard-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="netflix-project-card"
              onClick={() => openProjectModal(project)}
            >
              <div className="poster-frame-wrapper">
                <img src={getImageBySlug(project.slug)} alt={project.title} className="poster-image" />
                <div className="poster-glass-overlay"></div>
                
                <div className="poster-quick-actions">
                  <button 
                    className="action-circle-btn play-trigger" 
                    title="Open Case Production Deck"
                    onClick={(e) => { e.stopPropagation(); openProjectModal(project); }}
                  >
                    <FaPlay />
                  </button>
                  <button 
                    className={`action-circle-btn save-trigger ${savedProjects[project.slug] ? 'active-saved' : ''}`} 
                    onClick={(e) => toggleSave(project.slug, e)}
                    title="Add to My List"
                  >
                    {savedProjects[project.slug] ? <FaCheck /> : <FaPlus />}
                  </button>
                </div>
              </div>

              <div className="project-metadata-drawer">
                <span className="production-badge">Original Strategy</span>
                <h3 className="project-display-title">{project.title}</h3>
                <h4 className="project-display-subtitle">{project.subtitle}</h4>
                
                <p className="project-snippet-description">{project.description}</p>
                
                <div className="project-tech-pill-row">
                  {project.techUsed.map((tech: string, i: number) => (
                    <span key={i} className="strategy-pill">
                      {techIcons[tech] || "🔧"} {tech}
                    </span>
                  ))}
                </div>

                <div className="performance-metrics-tray">
                  {project.metrics.map((metric: string, idx: number) => (
                    <div key={idx} className="metric-badge-item">
                      <span className="metric-glow-dot"></span>
                      <span className="metric-value-text">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DYNAMIC FULL IMAGE CLARITY POPUP SCREEN */}
      {activeModalProject && (
        <div className="netflix-modal-backdrop" onClick={closeModal}>
          {/* Close layout trigger node sitting clearly on backdrop boundary arrays */}
          <button className="modal-close-btn" onClick={closeModal} title="Close Showcase Panel">
            <FaTimes />
          </button>

          <div className="netflix-modal-window" onClick={(e) => e.stopPropagation()}>
            
            {/* FULL MOCK VIEWPORT ENGINE */}
            <div className="modal-showcase-viewport">
              {/* FIXED DYNAMIC LABEL GENERATION SUITE: Adds your exact contextual slide callouts */}
              <div className="modal-viewport-label-ribbon">
                {activeModalProject.slug === 'instagram-management' && "✨ INSTAGRAM SECTION: THIS IS GRID VIEW ✨"}
                {activeModalProject.slug === 'linkedin-management' && "💼 LINKEDIN SECTION: THIS IS HOW LINKEDIN LOOKS 💼"}
                {activeModalProject.slug === 'menu-design' && "🍽️ HOSPITALITY SECTION: THIS IS MENU CREATIVE SHOWCASE 🍽️"}
              </div>
              <img 
                src={getImageBySlug(activeModalProject.slug)} 
                alt={activeModalProject.title} 
                className="modal-showcase-image" 
              />
            </div>

            <div className="modal-main-content">
              <span className="production-badge" style={{ marginBottom: '12px' }}>Original Strategy Presentation</span>
              <h2 className="project-display-title" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>{activeModalProject.title}</h2>
              <h4 className="project-display-subtitle" style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#aaaaaa' }}>{activeModalProject.subtitle}</h4>
              
              <div className="modal-grid-layout">
                <div className="modal-left-panel">
                  <div>
                    <div className="modal-panel-label"><FaRegFileAlt style={{ marginRight: '8px' }} /> Strategic Breakdown</div>
                    <p>{activeModalProject.description}</p>
                    <p>This original case deployment represents rigorous multi-channel testing, precise design templates, and high-conversion hooks tailored perfectly to establish scalable commercial authority.</p>
                  </div>
                </div>

                <div className="modal-right-panel">
                  <div>
                    <div className="modal-panel-label"><FaChartLine style={{ marginRight: '8px' }} /> Slide Metrics & KPIs</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {activeModalProject.metrics.map((metric: string, idx: number) => (
                        <div key={idx} className="metric-badge-item">
                          <span className="metric-glow-dot"></span>
                          <span className="metric-value-text" style={{ fontSize: '1rem' }}>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="modal-panel-label">Core Systems Applied</div>
                    <div className="project-tech-pill-row" style={{ margin: 0 }}>
                      {activeModalProject.techUsed.map((tech: string, i: number) => (
                        <span key={i} className="strategy-pill" style={{ background: 'rgba(255,255,255,0.06)' }}>
                          {techIcons[tech] || "🔧"} {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;