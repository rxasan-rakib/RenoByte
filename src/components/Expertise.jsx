import React from 'react';
import { Database, Layout, Smartphone, Globe, Code, Shield } from 'lucide-react';

const Expertise = () => {
    const expertise = [
        { icon: <Layout className="w-8 h-8" style={{ color: '#60a5fa' }} />, name: "React" },
        { icon: <Code className="w-8 h-8" style={{ color: '#4ade80' }} />, name: "Vue" },
        { icon: <Database className="w-8 h-8" style={{ color: '#facc15' }} />, name: "Node" },
        { icon: <Shield className="w-8 h-8" style={{ color: '#c084fc' }} />, name: "Security" },
        { icon: <Smartphone className="w-8 h-8" style={{ color: '#f472b6' }} />, name: "Mobile" },
        { icon: <Globe className="w-8 h-8" style={{ color: '#22d3ee' }} />, name: "Web" },
    ];

    return (
        <section className="expertise">
            <div className="container">
                <div className="expertise-header">
                    <h2 className="expertise-title-new">We are Expertise On</h2>
                    <div className="expertise-divider"></div>
                </div>

                <div className="expertise-grid">
                    {expertise.map((item, index) => (
                        <div key={index} className="expertise-item">
                            <div className="expertise-icon-box">
                                {item.icon}
                            </div>
                            <span className="expertise-name">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
