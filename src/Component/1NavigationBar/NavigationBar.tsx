import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsBriefcase, BsFileEarmarkRichtext, BsHouse, BsInfoCircle } from "react-icons/bs";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <BsHouse className="nav-icon" /> Home
            </Nav.Link>
            <Nav.Link href="#about">
              <BsInfoCircle className="nav-icon" /> About
            </Nav.Link>
            <Nav.Link href="#projects">
              <BsBriefcase className="nav-icon" /> Projects
            </Nav.Link>
            <Nav.Link href="#resume">
              <BsFileEarmarkRichtext className="nav-icon" /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
