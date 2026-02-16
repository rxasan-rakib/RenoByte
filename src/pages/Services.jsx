import React from 'react';
import { Monitor, Smartphone, Tablet, Palette, Search, TrendingUp, Code, Database, Cloud } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Monitor size={50} style={{ color: '#a855f7' }} />,
            title: "Website Development",
            desc: "Custom, responsive websites built with modern technologies",
            features: ["Responsive Design", "SEO Optimized", "Fast Performance", "CMS Integration"]
        },
        {
            icon: <Smartphone size={50} style={{ color: '#3b82f6' }} />,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications",
            features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"]
        },
        {
            icon: <Palette size={50} style={{ color: '#f472b6' }} />,
            title: "UI/UX Design",
            desc: "Beautiful, user-centered design solutions",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
        },
        {
            icon: <Search size={50} style={{ color: '#22d3ee' }} />,
            title: "SEO & Marketing",
            desc: "Drive traffic and grow your online presence",
            features: ["SEO Optimization", "Content Strategy", "Social Media", "Analytics"]
        },
        {
            icon: <Code size={50} style={{ color: '#4ade80' }} />,
            title: "Custom Development",
            desc: "Tailored software solutions for your business",
            features: ["API Development", "Integrations", "Automation", "Consulting"]
        },
        {
            icon: <Cloud size={50} style={{ color: '#fb923c' }} />,
            title: "Cloud Solutions",
            desc: "Scalable cloud infrastructure and deployment",
            features: ["AWS/Azure", "DevOps", "CI/CD", "Monitoring"]
        }
    ];

    const process = [
        { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
        { step: "02", title: "Planning", desc: "Creating a strategic roadmap" },
        { step: "03", title: "Design", desc: "Crafting beautiful interfaces" },
        { step: "04", title: "Development", desc: "Building with best practices" },
        { step: "05", title: "Testing", desc: "Ensuring quality and performance" },
        { step: "06", title: "Launch", desc: "Deploying and monitoring" }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <h1 className="services-hero-title">
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="services-hero-desc">
                        Comprehensive digital solutions to help your business grow and succeed in the modern world.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="services-grid-wrapper">
                        {services.map((service, index) => (
                            <div key={index} className="service-detail-card">
                                <div className="service-detail-icon">
                                    {service.icon}
                                </div>
                                <h3 className="service-detail-title">{service.title}</h3>
                                <p className="service-detail-desc">{service.desc}</p>
                                <ul className="service-detail-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="services-process">
                <div className="container">
                    <div className="section-header-center">
                        <span className="section-label">How We Work</span>
                        <h2 className="section-title">
                            Our <span className="gradient-text">Process</span>
                        </h2>
                    </div>

                    <div className="process-grid">
                        {process.map((item, index) => (
                            <div key={index} className="process-step">
                                <div className="process-step-number">{item.step}</div>
                                <h3 className="process-step-title">{item.title}</h3>
                                <p className="process-step-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <div className="container">
                    <div className="services-cta-content">
                        <h2 className="services-cta-title">Ready to Start Your Project?</h2>
                        <p className="services-cta-desc">Let's discuss how we can help bring your vision to life.</p>
                        <button className="services-cta-btn">Get Started</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
