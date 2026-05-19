import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkExperience from './pages/WorkExperience';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import Reading from './pages/Reading';
import Blogs from './pages/Blogs';
import Game from './pages/Game';
import Certifications from './pages/Certifications';

// 🎬 ACTIVE EXPERT STRATEGIST WORKSPACE FILES
import VisualGallery from './pages/VisualGallery'; 
import ViralMechanics from './pages/ViralMechanics'; 
import AudiencePsychology from './pages/AudiencePsychology';
import BrandStorytelling from './pages/BrandStorytelling';
import TrendForecasting from './pages/TrendForecasting';
import AiCreativeSystem from './pages/AiCreativeSystem';
import MoodboardUniverse from './pages/MoodboardUniverse';
import EngagementDesign from './pages/EngagementDesign';
import ContentEcosystems from './pages/ContentEcosystems';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Introduction & Profile Selector */}
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      
      {/* Master Profile Control Dashboard */}
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      
      {/* Standard Portfolio Rows */}
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/reading" element={<Layout><Reading /></Layout>} />
      <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
      <Route path="/game" element={<Game />} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      
      {/* 🟥 EXPERT WORKSPACE ROUTING CORE */}
      <Route path="/visual-gallery" element={<Layout><VisualGallery /></Layout>} />
      <Route path="/viral-mechanics" element={<Layout><ViralMechanics /></Layout>} />
      <Route path="/audience-psychology" element={<Layout><AudiencePsychology /></Layout>} />
      <Route path="/brand-storytelling" element={<Layout><BrandStorytelling /></Layout>} />
      <Route path="/trend-forecasting" element={<Layout><TrendForecasting /></Layout>} />
      <Route path="/ai-creative-systems" element={<Layout><AiCreativeSystem /></Layout>} />
      <Route path="/moodboards" element={<Layout><MoodboardUniverse /></Layout>} />
      <Route path="/engagement" element={<Layout><EngagementDesign /></Layout>} />
      <Route path="/ecosystems" element={<Layout><ContentEcosystems /></Layout>} />
    </Routes>
  );
};

export default App;