import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/home_page_firstvideo.mp4';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video-bg"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Background gradients */}
            <div className="hero-bg-gradient-1"></div>
            <div className="hero-bg-gradient-2"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>New 3D Video Animation</span>
                    </div>
                    <h1 className="hero-title-new">
                        Where Ideas <span className="hero-title-accent">Become Reality.</span>
                    </h1>
                    <p className="hero-description">
                        We transform your vision into digital masterpieces. Innovative design, cutting-edge technology, and creative solutions.
                    </p>
                    <div className="hero-buttons">
                        <button className="hero-btn-primary">
                            Contact Us <ArrowRight size={18} />
                        </button>
                        <button className="hero-btn-secondary">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
