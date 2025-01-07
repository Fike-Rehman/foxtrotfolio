import './Resume.css';
import DownloadButton from '../DownloadButton/DownloadButton';

const Resume: React.FC = () => {
    return (
        <div className="resume-container">
            <div className="resume-graphic">
                <img src="/foxtrotfolio/images/MyJourneyHR.png" alt="My Journey" className='resume-image' />
            </div>
            <div className='resume-download'>
                <DownloadButton title="Download - Adobe PDF (.pdf)" fileUrl='/foxtrotfolio/docs/Resume2025.pdf' fileName='Resume2025.pdf'></DownloadButton>
                <DownloadButton title="Download - MS Word (.docx)" fileUrl='/foxtrotfolio/docs/Resume2025.docx' fileName='Resume2025.docx'></DownloadButton>

            </div>
        </div>
    );
};

export default Resume;