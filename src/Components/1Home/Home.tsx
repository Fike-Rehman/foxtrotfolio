import foliopic from '../../assets/Images/folioPic.png';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1> This is the Home Page</h1>
                <p> This is where I tell you about myself </p>
            </div>
            <div className='profile-container'>
                <img src={foliopic} alt="Folio Picture" className='folio-pic' />
            </div>
        </div>
    );
};

export default Home;