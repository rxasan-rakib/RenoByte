import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const contactInfo = [
        {
            icon: <Phone size={30} style={{ color: '#a855f7' }} />,
            title: "Phone",
            detail: "+012 (345) 6789",
            link: "tel:+0123456789"
        },
        {
            icon: <Mail size={30} style={{ color: '#3b82f6' }} />,
            title: "Email",
            detail: "hello@example.com",
            link: "mailto:hello@example.com"
        },
        {
            icon: <MapPin size={30} style={{ color: '#f472b6' }} />,
            title: "Office",
            detail: "123 Innovation Dr, Tech City",
            link: "#"
        }
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="contact-hero-title">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="contact-hero-desc">
                        Have a project in mind? Let's discuss how we can help bring your vision to life.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => (
                            <a key={index} href={info.link} className="contact-info-card">
                                <div className="contact-info-icon">
                                    {info.icon}
                                </div>
                                <h3 className="contact-info-title">{info.title}</h3>
                                <p className="contact-info-detail">{info.detail}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="contact-form-wrapper">
                        <div className="contact-form-content">
                            <span className="section-label">Send us a message</span>
                            <h2 className="section-title">
                                Let's Start a <span className="gradient-text">Conversation</span>
                            </h2>
                            <p className="contact-form-desc">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="contact-form-row">
                                <div className="contact-form-group">
                                    <label htmlFor="name" className="contact-form-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="contact-form-input"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label htmlFor="email" className="contact-form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="contact-form-input"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="subject" className="contact-form-label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="contact-form-input"
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="message" className="contact-form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="contact-form-textarea"
                                    placeholder="Tell us more about your project..."
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-form-submit">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
