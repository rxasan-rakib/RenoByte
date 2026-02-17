import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
    const mainServices = [
        {
            title: "Website Development",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            label: "Website Development"
        },
        {
            title: "Mobile Apps Development",
            image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800",
            label: "Mobile Apps Development"
        },
        {
            title: "Wordpress Development",
            image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800",
            label: "Wordpress Development"
        }
    ];

    const specializedAds = [
        {
            title: "Google Ads Service",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        },
        {
            title: "Meta Ads Service",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
        },
        {
            title: "UI/UX Design Figma",
            logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
        }
    ];

    return (
        <div className={styles.servicesPage}>
            {/* 1. Immersive Hero - Synced with Projects Hero */}
            <section className={styles.hero}>
                <div className={`${styles.heroContent} ${styles.container}`}>
                    <div className={styles.heroMainTitleGroup}>
                        <span className={styles.heroTag}>Our Expertise</span>
                        <h1 className={styles.heroTitle}>
                            Smart Software
                            <span className={styles.blueText}> Labs.</span>
                        </h1>
                    </div>
                    <p className={styles.heroSubtitle}>
                        Revolutionizing the future through intelligent code and master craftsmanship.
                    </p>
                </div>
            </section>

            {/* 2. Narrative Intro */}
            <section className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.mainHeading}>
                        Shaping<br />
                        <span className={styles.blueText}>Digital Excellence.</span>
                    </h2>
                    <p className={styles.introDesc}>
                        We design and build high-quality digital products, and help growth-oriented companies.
                    </p>
                </div>
            </section>

            {/* 3. Main Service Grid (Interactive) */}
            <section className={styles.container}>
                <div className={styles.serviceGrid}>
                    {mainServices.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <img src={service.image} alt={service.title} className={styles.cardImage} />
                            <div className={styles.labelBar}>
                                <span className={styles.greenLabel}>{service.label}</span>
                            </div>
                            <div className={styles.cardOverlay}>
                                <h3 className={styles.overlayTitle}>{service.title}</h3>
                                <div className={styles.arrowIcon}>
                                    <ArrowUpRight size={28} color="#fff" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Specialized Tiers (Interactive) */}
            <section className={styles.container}>
                <div className={styles.serviceGrid}>
                    {specializedAds.map((tier, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.logoRowCard} style={{ width: '100%', height: '100%', background: '#fff' }}>
                                <img src={tier.logo} alt={tier.title} style={{ width: '130px', objectFit: 'contain' }} />
                            </div>
                            <div className={styles.labelBar}>
                                <span className={styles.greenLabel}>{tier.title}</span>
                            </div>
                            <div className={styles.cardOverlay} style={{ backgroundColor: 'rgba(168, 85, 247, 0.6)' }}>
                                <h3 className={styles.overlayTitle}>{tier.title}</h3>
                                <div className={styles.arrowIcon}>
                                    <ArrowUpRight size={28} color="#fff" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
