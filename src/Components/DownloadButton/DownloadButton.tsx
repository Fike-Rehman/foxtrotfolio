import { FaDownload } from 'react-icons/fa';
import './DownloadButton.css';
import React from 'react';

interface DownloadButtonProps {
    title: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ title }) => {
    return (
        <button className="download-button">
            <FaDownload className="button-icon" />
            {title}
        </button>
    );
};

export default DownloadButton;
