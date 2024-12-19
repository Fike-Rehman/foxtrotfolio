import foliopic from '../../assets/Images/folioPic.png';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1 className="welcome-message">
                    Hello There! <span className="waving-hand">👋</span>
                </h1>
                <h1> I am <span className='name'>Fike Rehman</span></h1>
            </div>
            <div className='profile-container'>
                <img src={foliopic} alt="Folio Picture" className='folio-pic' />
            </div>
        </div>
    );
};

export default Home;