import React from 'react';
import './Skills.css';
import { skillsData } from '../data/constants';

import {
  FaChartLine, FaVideo, FaChartBar, FaAward, FaComments, FaPaintBrush,
  FaFilm, FaPencilRuler, FaRobot, FaCode, FaRocket, FaGoogle, FaCloud, FaProjectDiagram, FaBrain, FaReact
} from 'react-icons/fa';

const iconMap: { [key: string]: JSX.Element } = {
  FaChartLine: <FaChartLine />,
  FaVideo: <FaVideo />,
  FaChartBar: <FaChartBar />,
  FaAward: <FaAward />,
  FaComments: <FaComments />,
  FaPaintBrush: <FaPaintBrush />,
  FaPencilRuler: <FaPencilRuler />,
  FaFilm: <FaFilm />,
  FaRobot: <FaRobot />,
  FaCode: <FaCode />,
  FaRocket: <FaRocket />,
  FaGoogle: <FaGoogle />,
  FaCloud: <FaCloud />,
  FaProjectDiagram: <FaProjectDiagram />,
  FaBrain: <FaBrain />
};

const Skills: React.FC = () => {
  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container" id="skills">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          
          <h3 className={`category-title 
            ${category === 'Secret Arsenal' ? 'secret-title' : ''} 
            ${category === 'Google AI Mastery' ? 'google-title' : ''}`
          }>
            {category}
          </h3>

          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div 
                key={idx} 
                className={`skill-card 
                  ${category === 'Secret Arsenal' ? 'secret-card' : ''}
                  ${category === 'Google AI Mastery' ? 'google-card' : ''}`
                }
                style={{ '--brand-color': skill.color || '#ff00cc' } as React.CSSProperties}
              >
                {/* Upper Icon Container with Circular Ambient Glow Background */}
                <div className="icon-wrapper">
                  <div className="icon">
                    {iconMap[skill.icon] || <FaReact />}
                  </div>
                </div>
                
                <h3 className="skill-name">
                  {skill.name.split(' ').map((word: string, wordIdx: number) => (
                    <div key={wordIdx} className="word-wrapper">
                      {word.split('').map((letter: string, i: number) => (
                        <span key={i} className="letter" style={{ animationDelay: `${i * 0.03}s` }}>
                          {letter}
                        </span>
                      ))}
                    </div>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;