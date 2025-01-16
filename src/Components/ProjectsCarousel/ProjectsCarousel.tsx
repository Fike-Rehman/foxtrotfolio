import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProjectsCarousel.css";
import { Card } from "react-bootstrap"; // Still using React-Bootstrap for cards

interface Project {
    id: number;
    title: string;
    description?: JSX.Element
    imageUrl: string;
}

interface ProjectsCarouselProps {
    projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
    // const projects = [
    //     {
    //         id: 1,
    //         title: "Cargill Nutrition Cloud",
    //         description: "As a member of a large software development team that was geographically distributed across several countries and time zones, developed and deployed a large-scale enterprise software system that unified and automated various functions of animal feed production for multiple species of farm animals at several Cargill plants located worldwide. The system stored data in a multi-region, multi-tenant, Azure Cosmos Database for low latency retrieval, resiliency and near real-time updates. The software backend API was built on the principles of REST architecture using ASP.NET Core, whereas the frontend user interface leveraged SPA architecture using Node.js and React JavaScript library.  ",
    //         imageUrl: "/foxtrotfolio/images/ProjectsCardCargill.png"
    //     },
    //     {
    //         id: 2,
    //         title: "FoxtrotFolio: Personal Portfolio Website",
    //         description: "This portfolio website is a solo project that I developed to showcase my skills, experience, and the overall trajectory of my career. It is an open-source project hosted on GitHub Pages, with the complete source code available in a public repository on my GitHub account. The website is built using the React JavaScript library and powered by Vite.js for a modern development workflow. Styling is implemented using CSS, adhering to responsive design principles to ensure the content adapts seamlessly to various screen sizes.In addition to highlighting my skills and projects, this site offers a comprehensive snapshot of the path my career has taken.I will continue adding details of the technical projects I am working on, making this site a dynamic and evolving showcase of my expertise.Everyone is encouraged to visit regularly, as updates will be made periodically to reflect my latest work and accomplishments.",
    //         imageUrl: `/foxtrotfolio/images/ProjectsCardFoxtrot.png`
    //     },
    //     {
    //         id: 3,
    //         title: "Digital Content Management & Delivery System",
    //         description: "Working with a cross functional agile team with both local and remote members, successfully designed, developed, tested, and deployed components of a large enterprise software to the company's Data Center. Employing the latest technology stack from Microsoft, worked through all the components of a build pipeline including backend databases, web service API’s, applications, and User interfaces. The software system developed is instrumental for the digital delivery, playback and monitoring of National Cinemedia's advertisement content known as the ‘First Look Show’ at more than 2000 movie theaters across the United States via satellite link. ",
    //         imageUrl: `/foxtrotfolio/images/ProjectsCardNCM.png`
    //     },
    // ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // Slides to scroll at once
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            showDots={false}
            keyBoardControl={true}
        //   containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // itemClass="carousel-item-padding-40-px"
        //  itemClass='carousel-card'
        >
            {projects.map((project) => (
                <div key={project.id} className="carousel-card-container">
                    <Card className="carousel-card">
                        <Card.Img
                            variant="top"
                            src={project.imageUrl}
                            alt={project.title}
                            style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Carousel>
    );
};

export default ProjectsCarousel;
