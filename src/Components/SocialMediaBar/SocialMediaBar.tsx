import React from 'react';
import './SocialMediaBar.css';
import EmailIcon from '../../assets/Images/SMLogos/EmailIcon.svg';
import GithubIcon from '../../assets/Images/SMLogos/githubIcon.svg';
import LinkedinIcon from '../../assets/Images/SMLogos/linkedinIcon.svg';
import StackoverflowIcon from '../../assets/Images/SMLogos/stackoverflowIcon.svg';

const SocialMediaBar: React.FC = () => {
    return (
        <div className="social-media-bar">
            <p className="in-touch-message">Let's get in touch!</p>
            <div className="icons-container">
                <a
                    href="mailto:fike.rehman@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <img src={EmailIcon} alt="Emaill Icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/frehman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"

                >
                    <img src={LinkedinIcon} alt="Linkedin Icon" />
                </a>
                <a
                    href="https://github.com/Fike-Rehman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <img src={GithubIcon} alt="Github Icon" />
                </a>
                <a
                    href="https://stackoverflow.com/users/586500/fike-rehman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <img src={StackoverflowIcon} alt="Stackoverflow Icon" />
                </a>
            </div>
        </div>
    );
};

export default SocialMediaBar;
