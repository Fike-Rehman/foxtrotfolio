import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "react-multi-carousel/lib/styles.css";
import "./Projects.css";
import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";

interface ProjectDetails {
  id: number;
  title: string;
  descriptionFile?: string;
  imageUrl: string;
}

const projectDetails: ProjectDetails[] = [
  {
    id: 1,
    title: "Robin TTS Application",
    descriptionFile: "/foxtrotfolio/data/ProjectRobinTTS.md",
    imageUrl: "/foxtrotfolio/images/ProjectsCardRobinTTS.png",
  },
  {
    id: 2,
    title: "Cargill Nutrition Cloud",
    descriptionFile: "/foxtrotfolio/data/ProjectCargill.md",
    imageUrl: "/foxtrotfolio/images/ProjectsCardCargill.png",
  },
  {
    id: 3,
    title: "FoxtrotFolio: Personal Portfolio Website",
    descriptionFile: "/foxtrotfolio/data/ProjectFoxtrotFolio.md",
    imageUrl: `/foxtrotfolio/images/ProjectsCardFoxtrot.png`,
  },
  {
    id: 4,
    title: "Digital Content Management & Delivery System",
    descriptionFile: "/foxtrotfolio/data/ProjectNCM.md",
    imageUrl: `/foxtrotfolio/images/ProjectsCardNCM.png`,
  },
];

const Projects: React.FC = () => {
  const pDetails = projectDetails;

  const [markdownContents, setMarkdownContents] = useState<{
    [id: number]: string;
  }>({});

  useEffect(() => {
    const fetchMarkdown = async () => {
      const promises = pDetails.map(async (pd) => {
        if (pd.descriptionFile) {
          try {
            const response = await fetch(pd.descriptionFile);
            const text = await response.text();
            return { id: pd.id, text };
          } catch (error) {
            console.error(
              `Failed to fetch markdown for project ${pd.id}:`,
              error
            );
            return { id: pd.id, text: "" }; // Fallback to empty string on error
          }
        }
        return { id: pd.id, text: "" }; // No file provided, default to empty string
      });

      const results = await Promise.all(promises);
      const contents: { [id: number]: string } = {};
      results.forEach((result) => {
        if (result) contents[result.id] = result.text;
      });

      setMarkdownContents(contents);
    };

    fetchMarkdown();
  }, []);

  const projects = pDetails.map((project) => {
    const desc = markdownContents[project.id] || "";

    return {
      id: project.id,
      title: project.title,
      description: <ReactMarkdown>{desc}</ReactMarkdown>,
      imageUrl: project.imageUrl,
    };
  });

  return (
    <div className="projects-page">
      <h1 className="projects-header">My Projects</h1>
      <ProjectsCarousel projects={projects} />
      {/* <footer className="projects-other-details">
                <p>More information about my projects will be added here.</p>
            </footer> */}
    </div>
  );
};

export default Projects;
