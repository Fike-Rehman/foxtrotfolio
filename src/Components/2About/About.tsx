import './About.css';
import SEng from '../../assets/Images/SEng.webp';

const About: React.FC = () => {
    return (
        <div className='about-page'>
            <h1 className='about-header'> About Me</h1>
            <div className='my-story-container'>
                <div className='my-story-content'>
                    <h2> My Story ... </h2>
                    <p></p>
                    <p> My name is Fike Rehman, and I am located in Minneapolis-Saint Paul, Minnesota, where the winters are long, but the coffee is strong, offering a perfect habitat for turning caffeine into code. I’m a Software Engineer, on a mission to transform complex problems into simple solutions and big ideas into practical innovations. I’m passionate about emerging technologies and finding creative ways to integrate them into everyday life to make things easier, smarter, and more enjoyable.
                    </p>
                    <p> When not deep in the trenches, battling with complex database models, or playing therapist to untangle relationships between various domain entities, or meticulously polishing lines of code until they shine brighter than a developer’s dark mode, or convincing my tiny microcontrollers like ESP-32, Raspberry Pi's and Arduinos to do my bidding, or assembling PCs with the precision of a watchmaker, you’ll find me exploring the world. I love to travel and capture the beauty of our planet through my camera lens — whether it’s stunning landscapes or the fascinating wildlife that inhabit them.
                    </p>
                </div>
                <div className='my-story-graphic-container'>
                    <img src={SEng} alt="Software Engineer" className='my-story-graphic' />
                </div>
            </div>
        </div>
    );
};

export default About