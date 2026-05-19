import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>Aditya</h3>
            <p>Founder of Ziggy </p>
            <p className="date">October 16, 2023</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Sandhit Karmakar is an exceptionally talented and dedicated individual who consistently demonstrates outstanding qualities that make them a valuable asset to any team or institution.</p>
          <p>We have had the opportunity to witness their growth and development firsthand, and we can <strong> confidently attest to their remarkable abilities and character</strong>. He consistently goes above and beyond what is expected and have a strong work ethic that is second to none. We have seen them take on challenging tasks and projects with enthusiasm and determination, consistently delivering results that exceed expectations."</p>
          <p>💼 "Moreover, Sandhit is a person of high integrity and reliability. He can be counted on to uphold the highest ethical standards and to follow through on his commitment. His honesty, dependability, and dedication make them a trusted colleague and friend. We have no doubt that he will excel in any endeavour they choose to pursue."</p>
          <p>🌟 "His combination of skills, character, and work ethic is truly exceptional, and we are confident that they will make a significant contribution to your organisation and excel in their future pursuits.It is with great enthusiasm and without reservation that we recommend him."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
