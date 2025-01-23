import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProjectsCarousel.css";
import { Card } from "react-bootstrap";

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
