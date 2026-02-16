import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Logo</h3>
                        <p>
                            Transforming ideas into digital reality. We build the future of the web.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Website Design</a></li>
                            <li><a href="#">Mobile App Development</a></li>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="footer-contact">
                            <li>
                                <Phone size={18} className="footer-contact-icon" />
                                <span>+012 (345) 6789</span>
                            </li>
                            <li>
                                <MapPin size={18} className="footer-contact-icon" />
                                <span>123 Innovation Dr, Tech City</span>
                            </li>
                            <li>
                                <Mail size={18} className="footer-contact-icon" />
                                <span>hello@example.com</span>
                            </li>
                        </ul>

                        <div>
                            <h5 className="footer-social-title">Follow Us</h5>
                            <div className="footer-social">
                                <a href="#"><Facebook size={20} /></a>
                                <a href="#"><Instagram size={20} /></a>
                                <a href="#"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Digital Agency. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

                {/* Giant Logo Text Watermark */}
                <div className="footer-watermark">
                    <h1>Logo Logo Logo</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
