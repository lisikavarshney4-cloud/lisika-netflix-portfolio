import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import LVLogo from '../images/logo-2.png'; 

interface NavBarProps {
  currentProfile?: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  const profileImage = localStorage.getItem("profileImage") || "";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    localStorage.removeItem("selectedProfile");
    localStorage.removeItem("backgroundGif");
    localStorage.removeItem("profileImage");
    navigate('/browse');
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-left">
          <div className="hamburger" onClick={() => setIsSidebarOpen(true)}>
            <div></div><div></div><div></div>
          </div>
          <div className="navbar-logo">
            <img src={LVLogo} alt="Portfolio Logo" onClick={handleLogoClick} style={{ cursor: 'pointer', objectFit: 'contain' }} />
          </div>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        
        <div className="navbar-right" onClick={() => navigate('/browse')}>
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-icon" style={{ objectFit: 'cover' }} />
          ) : (
            <div className="profile-icon" style={{ backgroundColor: '#e50914' }}></div>
          )}
        </div>
      </nav>

      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo"><img src={LVLogo} alt="LV Logo" /></div>
        <ul>
          <li><Link to="/browse" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/work-experience" onClick={() => setIsSidebarOpen(false)}>Professional</Link></li>
          <li><Link to="/skills" onClick={() => setIsSidebarOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" onClick={() => setIsSidebarOpen(false)}>Projects</Link></li>
          <li><Link to="/contact-me" onClick={() => setIsSidebarOpen(false)}>Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;