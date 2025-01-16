import React from "react";

import "react-multi-carousel/lib/styles.css";
import "./Projects.css";
import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";

const Projects: React.FC = () => {
    return (
        <div className="projects-page">
            <h1 className="projects-header">My Projects</h1>
            <ProjectsCarousel />
            <footer className="projects-other-details">
                <p>More information about my projects will be added here.</p>
            </footer>
        </div>
    );
};

export default Projects;
