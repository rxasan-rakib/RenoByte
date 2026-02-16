import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (!project || !project.images) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % project.images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [project]);

    if (!project) {
        return (
            <div className="error-page container">
                <h2>Project Not Found</h2>
                <Link to="/projects" className="back-btn">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>
            </div>
        );
    }

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % project.images.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);

    return (
        <div className="project-details-refined">
            {/* Minimal Header */}
            <header className="details-minimal-header">
                <div className="container">
                    <button onClick={() => navigate('/projects')} className="back-btn-minimal">
                        <ArrowLeft size={18} /> BACK TO PROJECTS
                    </button>
                    
                    <div className="subtle-meta-top">
                        <h3 className="details-title-h3">{project.title}</h3>
                        <div className="subtle-info-row">
                            <span className="info-tag">{project.serviceType} Package</span>
                            <span className="info-divider">|</span>
                            <span className="info-tag">{project.deliveryDate}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Slider & Features Grid */}
            <section className="slider-features-section">
                <div className="container">
                    <div className="slider-features-grid">
                        {/* React Slider */}
                        <div className="project-slider-container">
                            <div className="slider-main">
                                {project.images.map((img, index) => (
                                    <div 
                                        key={index} 
                                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                                    >
                                        <img src={img} alt={`${project.title} screenshot ${index + 1}`} />
                                    </div>
                                ))}
                                
                                <button className="slider-nav prev" onClick={prevSlide}>
                                    <ChevronLeft size={24} />
                                </button>
                                <button className="slider-nav next" onClick={nextSlide}>
                                    <ChevronRight size={24} />
                                </button>
                                
                                <div className="slider-indicators">
                                    {project.images.map((_, index) => (
                                        <button 
                                            key={index} 
                                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                            onClick={() => setCurrentSlide(index)}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Side Features */}
                        <div className="side-features-box">
                            <h3 className="features-box-title">Key Features</h3>
                            <ul className="side-features-list">
                                {project.features.map((feature, index) => (
                                    <li key={index}>
                                        <CheckCircle2 size={20} className="blue-text" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Description */}
            <section className="details-description-refined">
                <div className="container">
                    <div className="description-layout">
                        <div className="desc-main-text">
                            <h2 className="desc-heading">Project <span className="blue-text">Overview</span></h2>
                            <p className="desc-para">{project.fullDescription}</p>
                        </div>
                        
                        <div className="desc-tech-stack">
                            <h3 className="tech-stack-title">Technologies</h3>
                            <div className="tech-tags-refined">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-pill">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
