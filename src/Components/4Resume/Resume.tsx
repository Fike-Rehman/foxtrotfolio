import './Resume.css';
import DownloadButton from '../DownloadButton/DownloadButton';

const Resume: React.FC = () => {
    return (
        <div className="resume-container">
            <div className="resume-graphic">
                <h1>Resume</h1>
            </div>
            <div className='resume-download'>
                <div className='download-button-container'>
                    <DownloadButton title="Download - Adobe PDF (.pdf)" fileUrl='foxtrotfolio/docs/Resume2025.pdf' fileName='Resume2025.pdf'></DownloadButton>
                    <DownloadButton title="Download - MS Word (.docx)" fileUrl='foxtrotfolio/docs/Resume2025.docx' fileName='Resume2025.docx'></DownloadButton>
                </div>
            </div>
        </div>
    );
};

export default Resume;