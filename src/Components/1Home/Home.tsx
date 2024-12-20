import { Typewriter } from 'react-simple-typewriter';
import foliopic from '../../assets/Images/folioPic.png';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <div className='home-content'>
                <h1 className="welcome-message">
                    Hello There! <span className="waving-hand">👋</span>
                </h1>
                <h1> I am <span className='name'>Fike Rehman;</span></h1>
                <span className='typewriter-effect'><Typewriter
                    words={['Software Engineer', 'Full Stack Developer', 'Tech Enthusiast', 'Adventure Seeker', 'Tinkerer/Maker', 'Wildlife Photographer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span>
                <p className='welcome-message-secondary'>
                    I am glad you stopped by, <br />
                    Please feel free to look around or use the links <br />
                    below to connect with me.<br />
                    I would love to hear from you...
                </p>

            </div>
            <div className='profile-container'>
                <img src={foliopic} alt="Folio Picture" className='folio-pic' />
            </div>
        </div>
    );
};

export default Home;