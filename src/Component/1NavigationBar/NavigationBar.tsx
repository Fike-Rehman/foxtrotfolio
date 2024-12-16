import { Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';

interface NavigationBarProps {
  // Add any props you want to pass to the component
}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  return (
    <Navbar bg="dark" expand="lg" className="navbar">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-bar">
          <Nav.Link href="#home" className='nav-home'>Home</Nav.Link>
          <div className='nav-links'>
            <Nav.Link href="#about" className='nav-link'>About</Nav.Link>
            <Nav.Link href="#projects" className='nav-link'>Projects</Nav.Link>
            <Nav.Link href="#resume" className='nav-link'>Resume</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;