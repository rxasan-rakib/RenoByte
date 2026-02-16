import React from 'react';
import websiteImg from '../assets/website.jpg';
import appImg from '../assets/app.jpg';

const Journey = () => {
    return (
        <section id="about" className="journey">
            <div className="container">
                <div className="journey-header">
                    <span className="journey-label">Company Archive</span>
                    <h2 className="journey-title">
                        Our <span className="journey-title-accent">Journey.</span>
                    </h2>
                    <p className="journey-description">Exploring new horizons and expanding our creative universe.</p>
                </div>

                <div className="journey-timeline">
                    <div className="timeline-line"></div>

                    {/* 2026 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-year">
                            20<span className="timeline-year-accent">26</span>
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-image-container">
                                <img src={websiteImg} alt="Future Vision" className="timeline-img" />
                            </div>
                            <h3 className="timeline-title">Future Vision</h3>
                            <p className="timeline-text">
                                Expanding our services globally and pioneering new technologies.
                            </p>
                        </div>
                    </div>

                    {/* 2025 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-year">
                            20<span className="timeline-year-accent">25</span>
                        </div>
                        <div className="timeline-content">
                            <div className="timeline-image-container">
                                <img src={appImg} alt="Foundation" className="timeline-img" />
                            </div>
                            <h3 className="timeline-title">Foundation</h3>
                            <p className="timeline-text">
                                Started our journey with a vision to transform digital experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
