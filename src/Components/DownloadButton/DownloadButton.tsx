import { FaDownload } from 'react-icons/fa';
import './DownloadButton.css';
import React from 'react';

interface DownloadButtonProps {
    title: string;
    fileUrl: string;
    fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ title, fileUrl, fileName }) => {
    return (
        <a href={fileUrl} download={fileName}>
            <button className="download-button">
                <FaDownload className="button-icon" />
                {title}
            </button>
        </a>
    );
};

export default DownloadButton;
