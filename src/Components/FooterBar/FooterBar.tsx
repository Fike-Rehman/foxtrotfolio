import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsTwitter, BsGlobe, BsStackOverflow, BsFacebook } from "react-icons/bs";
import "./FooterBar.css";

const FooterBar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom" className="custom-footer">
            <Navbar.Collapse className="w-100">
                <Nav className="d-flex justify-content-between w-100">
                    <Navbar.Brand href="#home" className="footer-brand d-none d-lg-block">
                        Developed by Fike Rehman
                    </Navbar.Brand>

                    {/* Centered SiteMap link
                    <div className="footer-copyright">
                        TODO: sitemap link goes here
                    </div> */}

                    <Nav className="footer-links">
                        <Nav.Link
                            href="https://github.com/Fike-Rehman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsGithub className="footer-icon" />
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.linkedin.com/in/frehman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsLinkedin className="footer-icon" />
                        </Nav.Link>
                        <Nav.Link
                            href="https://stackoverflow.com/users/586500/fike-rehman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsStackOverflow className="footer-icon" />
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.facebook.com/fike.rehman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link"
                        >
                            <BsFacebook className="footer-icon" />
                        </Nav.Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default FooterBar;
