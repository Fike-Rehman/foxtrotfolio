import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsBriefcase, BsFileEarmarkRichtext, BsHouse, BsInfoCircle } from "react-icons/bs";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const NavigationBar: React.FC = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleNavClick = () => setExpanded(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} className="custom-navbar">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" className="nav-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-link" onClick={handleNavClick}>
                            <BsHouse className="nav-icon" /> Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link" onClick={handleNavClick}>
                            <BsInfoCircle className="nav-icon" /> About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="nav-link" onClick={handleNavClick}>
                            <BsBriefcase className="nav-icon" /> Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="resume" className="nav-link" onClick={handleNavClick}>
                            <BsFileEarmarkRichtext className="nav-icon" /> Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
