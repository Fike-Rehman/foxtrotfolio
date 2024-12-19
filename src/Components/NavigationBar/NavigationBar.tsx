import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsBriefcase, BsFileEarmarkRichtext, BsHouse, BsInfoCircle } from "react-icons/bs";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

const NavigationBar: React.FC = () => {

    const [expanded, setExpanded] = React.useState(false);

    const [currentTime, setCurrentTime] = useState<string>("");
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const formatOptions: Intl.DateTimeFormatOptions =
                isSmallScreen
                    ? { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "numeric" }
                    : { dateStyle: "full", timeStyle: "medium" };
            const formattedTime = new Intl.DateTimeFormat(navigator.language, formatOptions).format(now);
            setCurrentTime(formattedTime);
        };

        const handleResize = () => {
            setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, [isSmallScreen]);

    const handleNavClick = () => setExpanded(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} className="custom-navbar">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" className="nav-logo" />
                </Navbar.Brand>
                <Navbar.Text className="nav-time">{currentTime}</Navbar.Text>
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
