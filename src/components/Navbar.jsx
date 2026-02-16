import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span>Logo</span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-menu desktop">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/about" className="navbar-link">About</Link>
                    <Link to="/services" className="navbar-link">Services</Link>
                    <Link to="/projects" className="navbar-link">Projects</Link>
                    <Link to="/contact" className="navbar-cta">Contact Us</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="navbar-mobile">
                    <div className="navbar-mobile-menu">
                        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</Link>
                        <Link to="/services" className="navbar-link" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link to="/projects" className="navbar-link" onClick={() => setIsOpen(false)}>Projects</Link>
                        <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
