import './Resume.css';
import DownloadButton from '../DownloadButton/DownLoadButton';

const Resume: React.FC = () => {
    return (
        <div className="resume-container">
            <div className="resume-graphic">
                <h1>Resume</h1>
            </div>
            <div className='resume-download'>
                <div className='download-button-container'>
                    <DownloadButton title="Download - Adobe PDF (.pdf)"></DownloadButton>
                    <DownloadButton title="Download - MS Word (.docx)"></DownloadButton>
                </div>
            </div>
        </div>
    );
};

export default Resume;