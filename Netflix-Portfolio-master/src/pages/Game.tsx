// src/pages/Game.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css';
import { FaTimes } from 'react-icons/fa';


const Game: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scroll on mount
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable on unmount
        };
    }, []);

    const handleClose = () => {
        const profile = localStorage.getItem('selectedProfile') || 'Recruiter';
        navigate(`/profile/${profile}`);
    };

    return (
        <div className="game-container">
            <div className="iframe-wrapper">
                <iframe
                    src="https://cuberun.adamkarlsten.com/"
                    title="Cube Run"
                    className="game-iframe"
                    sandbox="allow-scripts allow-same-origin"
                    allow="fullscreen"
                    loading="lazy"
                />
            </div>
            <button
                className="netflix-close-button"
                onClick={handleClose}
                aria-label="Close Game"
            >
                <FaTimes />
            </button>
        </div>
    );
};

export default Game;