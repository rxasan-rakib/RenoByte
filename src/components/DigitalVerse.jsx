import React from 'react';
import googleImg from '../assets/google.jpg';
import metaImg from '../assets/meta.jpg';
import uiuxImg from '../assets/uiux.jpg';

const DigitalVerse = () => {
    const partners = [
        { name: "Google Ads Services", image: googleImg },
        { name: "Meta Ads Services", image: metaImg },
        { name: "UI/UX Design Projects", image: uiuxImg },
    ];

    return (
        <section className="digital-verse">
            <div className="container">
                <div className="digital-verse-header">
                    <span className="digital-verse-label">Our Partners</span>
                    <h2 className="digital-verse-title">
                        Digital <span className="digital-verse-title-accent">Verse.</span>
                    </h2>
                </div>

                <div className="digital-verse-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-card">
                            <div className="partner-image">
                                <img src={partner.image} alt={partner.name} />
                            </div>
                            <h3 className="partner-name">{partner.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalVerse;
