import React from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import websiteImg from '../assets/website.jpg';
import appImg from '../assets/app.jpg';
import wordpressImg from '../assets/wordpress.jpg';
import servicesVideo from '../assets/home_page_secondvideo.mp4';

const Services = () => {
    const services = [
        {
            title: "Website Development",
            icon: <Monitor size={40} style={{ color: '#c084fc' }} />,
            desc: "Custom websites tailored to your brand needs.",
            colorClass: "blue",
            image: websiteImg
        },
        {
            title: "Mobile App Development",
            icon: <Smartphone size={40} style={{ color: '#f472b6' }} />,
            desc: "Native and cross-platform mobile applications.",
            colorClass: "pink",
            image: appImg
        },
        {
            title: "Wordpress Development",
            icon: <Tablet size={40} style={{ color: '#4ade80' }} />,
            desc: "Scalable and easy-to-manage Wordpress solutions.",
            colorClass: "green",
            image: wordpressImg
        }
    ];

    return (
        <section id="services" className="services">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="services-video-bg"
            >
                <source src={servicesVideo} type="video/mp4" />
            </video>

            <div className="services-overlay"></div>

            <div className="services-container">
                <div className="services-content-full">
                    <span className="services-label-new">Our Service</span>
                    <h2 className="services-title-new">
                        Shaping<br />
                        <span className="services-title-accent">Digital Excellence.</span>
                    </h2>
                    <p className="services-description-new">
                        We design premium experiences, build intelligent products, and integrate AI with purpose.
                    </p>

                    <div className="services-cards">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-card-image">
                                    <img src={service.image} alt={service.title} />
                                    <div className="service-card-overlay">
                                        <div className={`service-icon-box ${service.colorClass}`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                                <div className="service-card-content">
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-desc">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
