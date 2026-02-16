import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <div className="projects-container-new">
            {/* Hero Section */}
            <section className="projects-hero-new">
                <div className="hero-content container">
                    <div className="hero-main-title-group">
                        <span className="hero-tag">The Name Story</span>
                        <h1 className="projects-hero-title-new">
                            Where Code <br />
                            <span className="blue-text">Becomes Intelligence.</span>
                        </h1>
                    </div>
                    <p className="projects-hero-subtitle-new">
                        A fusion of code, data, and imagination — building what tomorrow runs on.
                    </p>
                </div>
            </section>

            {/* Works Header */}
            <section className="works-header-section">
                <h2 className="works-title">
                    Execute <span className="blue-text">Works.</span>
                </h2>
                <p className="works-subtitle">Where innovation turns into working machines.</p>
            </section>

            {/* Project List */}
            <section className="project-list-new">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-item-row">
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-img-new" />
                        </div>
                        <div className="project-details-new">
                            <h3 className="project-title-new">{project.title}</h3>
                            <p className="project-desc-new">{project.shortDescription}</p>
                            <Link to={`/projects/${project.id}`} className="view-case-study">
                                VIEW CASE STUDY <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Projects;

