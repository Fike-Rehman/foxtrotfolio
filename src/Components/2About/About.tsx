import './About.css';
import SEng from '../../assets/Images/SEng.webp';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const About: React.FC = () => {

    const myStoryFile = '/foxtrotfolio/data/myStory.md';

    const [myStoryMarkdown, setMyStoryMarkdown] = useState('');

    useEffect(() => {
        fetch(myStoryFile)
            .then(response => response.text())
            .then(text => setMyStoryMarkdown(text));
    }, []);

    return (
        <div className='about-page'>
            <h1 className='about-header'> About Me</h1>
            <div className='my-story-container'>
                <Card className="my-story-card">
                    <Card.Img
                        variant="top"
                        src={SEng}
                        alt={"Software Engineer"}
                        style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                        <Card.Title>{"My Story"}</Card.Title>
                        <Card.Text><ReactMarkdown>{myStoryMarkdown}</ReactMarkdown></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default About