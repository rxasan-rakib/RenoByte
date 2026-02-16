import appImg from '../assets/app.jpg';
import websiteImg from '../assets/website.jpg';
import wordpressImg from '../assets/wordpress.jpg';
import uiuxImg from '../assets/uiux.jpg';

export const projectsData = [
    {
        id: "grocery-app-1",
        title: "ONLINE GROCERY ORDER APPS",
        shortDescription: "A fast and user-friendly grocery ordering platform for seamless shopping and delivery.",
        fullDescription: "A comprehensive and user-friendly grocery ordering platform that allows customers to browse products, add items to cart, and place orders with ease. This solution was designed to bridge the gap between local vendors and city-wide customers, ensuring fresh produce is just a click away.",
        image: appImg,
        images: [appImg, appImg, appImg],
        serviceType: "Platinum",
        deliveryDate: "Oct 24, 2025",
        features: [
            "Real-time Inventory Management",
            "Secure Stripe Payment Integration",
            "Live Order Tracking and Status Alerts",
            "Multi-vendor Support and Dashboards",
            "Custom Recommendation Engine"
        ],
        technologies: ["React Native", "Node.js", "MongoDB", "Stripe API", "Firebase"],
        relatedProjects: ["grocery-website-1", "grocery-wordpress-1"]
    },
    {
        id: "grocery-website-1",
        title: "ONLINE GROCERY ORDER WEBSITE",
        shortDescription: "High-performance web platform for online grocery shopping and secure payments.",
        fullDescription: "A robust grocery website built for scale and speed. It features a modern, intuitive interface that makes shopping effortless for users, while providing advanced management tools for administrators to track sales and inventory.",
        image: websiteImg,
        images: [websiteImg, websiteImg, websiteImg],
        serviceType: "Gold",
        deliveryDate: "Sept 12, 2025",
        features: [
            "Responsive Modern Web Interface",
            "Lightning Fast Page Load Times",
            "Advanced Product Search and Filtering",
            "User Profile and Order History",
            "Integrated Email Notifications"
        ],
        technologies: ["React", "Tailwind CSS", "Redux", "PostgreSQL", "Vercel"],
        relatedProjects: ["grocery-app-1", "grocery-ui-1"]
    },
    {
        id: "grocery-wordpress-1",
        title: "ONLINE GROCERY BY WORDPRESS",
        shortDescription: "Customized WordPress solution for local grocery businesses.",
        fullDescription: "A highly customized WordPress and WooCommerce implementation for a boutique grocery store. This project focused on maintaining a premium feel while providing the flexibility of a CMS for easy manual content updates.",
        image: wordpressImg,
        images: [wordpressImg, wordpressImg, wordpressImg],
        serviceType: "Premium",
        deliveryDate: "Aug 05, 2025",
        features: [
            "Custom WooCommerce Theme Design",
            "Optimized Checkout Flow",
            "Dynamic Pricing and Coupons",
            "Automated Invoice Generation",
            "Daily Backup and Security Hardening"
        ],
        technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Elementor Pro"],
        relatedProjects: ["grocery-website-1", "grocery-app-1"]
    },
    {
        id: "grocery-ui-1",
        title: "ONLINE GROCERY ORDER APPS",
        shortDescription: "Next-gen UI/UX design for a flagship grocery application.",
        fullDescription: "A design-focused project that prioritized visual excellence and micro-interactions. The goal was to create a 'wow' factor that improves user retention and makes the routine task of grocery shopping feel premium and enjoyable.",
        image: uiuxImg,
        images: [uiuxImg, uiuxImg, uiuxImg],
        serviceType: "Platinum",
        deliveryDate: "Nov 30, 2025",
        features: [
            "Stunning Micro-animations",
            "Accessibility-First Design Patterns",
            "Interactive Prototypes and User Flow",
            "Custom Iconography and Asset Design",
            "Dark Mode and Theme Toggle Support"
        ],
        technologies: ["Figma", "Framer Motion", "React", "GSAP Animations", "Styled Components"],
        relatedProjects: ["grocery-app-1", "grocery-website-1"]
    }
];
