import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: <Target size={40} style={{ color: '#a855f7' }} />,
            title: "Our Mission",
            desc: "To empower businesses with cutting-edge digital solutions that drive growth and innovation."
        },
        {
            icon: <Users size={40} style={{ color: '#3b82f6' }} />,
            title: "Our Team",
            desc: "A diverse group of passionate designers, developers, and strategists dedicated to excellence."
        },
        {
            icon: <Award size={40} style={{ color: '#22d3ee' }} />,
            title: "Our Values",
            desc: "Integrity, innovation, and client success are at the core of everything we do."
        },
        {
            icon: <Zap size={40} style={{ color: '#f472b6' }} />,
            title: "Our Approach",
            desc: "We combine creativity with technology to deliver solutions that exceed expectations."
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1 className="about-hero-title">
                        About <span className="gradient-text">Us</span>
                    </h1>
                    <p className="about-hero-desc">
                        We are a team of creative professionals passionate about transforming ideas into digital reality.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story">
                <div className="container">
                    <div className="about-story-content">
                        <span className="section-label">Our Story</span>
                        <h2 className="section-title">
                            Building the <span className="gradient-text">Future</span>
                        </h2>
                        <p className="about-story-text">
                            Founded in 2025, we started with a simple vision: to help businesses thrive in the digital age.
                            Today, we've grown into a full-service digital agency serving clients worldwide.
                        </p>
                        <p className="about-story-text">
                            Our journey has been marked by continuous learning, innovation, and a commitment to delivering
                            exceptional results for our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-label">What Drives Us</span>
                        <h2 className="section-title">
                            Our Core <span className="gradient-text">Values</span>
                        </h2>
                    </div>

                    <div className="about-values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="about-value-card">
                                <div className="about-value-icon">
                                    {value.icon}
                                </div>
                                <h3 className="about-value-title">{value.title}</h3>
                                <p className="about-value-desc">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats">
                <div className="container">
                    <div className="about-stats-grid">
                        <div className="about-stat">
                            <h3 className="about-stat-number">100+</h3>
                            <p className="about-stat-label">Projects Completed</p>
                        </div>
                        <div className="about-stat">
                            <h3 className="about-stat-number">50+</h3>
                            <p className="about-stat-label">Happy Clients</p>
                        </div>
                        <div className="about-stat">
                            <h3 className="about-stat-number">15+</h3>
                            <p className="about-stat-label">Team Members</p>
                        </div>
                        <div className="about-stat">
                            <h3 className="about-stat-number">2+</h3>
                            <p className="about-stat-label">Years Experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
