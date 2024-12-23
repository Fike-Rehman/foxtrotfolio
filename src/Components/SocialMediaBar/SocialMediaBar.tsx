import React from 'react';
import { BsEnvelope, BsLinkedin, BsFacebook } from 'react-icons/bs'; // Import icons from react-icons
import './SocialMediaBar.css'; // Import the corresponding CSS file

const SocialMediaBar: React.FC = () => {
    return (
        <div className="social-media-bar">
            <p className="connect-message">Lets get in Touch:</p>
            <div className="icons-container">
                <a
                    href="mailto:your-email@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <BsEnvelope />
                </a>
                <a
                    href="https://www.linkedin.com/in/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <BsLinkedin />
                </a>
                <a
                    href="https://www.facebook.com/your-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <BsFacebook />
                </a>
            </div>
        </div>
    );
};

export default SocialMediaBar;
