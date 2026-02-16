import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a comprehensive range of digital services including Website Development, Mobile App Development, UI/UX Design, and Digital Marketing solutions tailored to your business needs."
        },
        {
            question: "How long does a project take?",
            answer: "Project timelines vary depending on complexity and scope. A standard website might take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation."
        },
        {
            question: "Do you provide maintenance and support?",
            answer: "Yes, we offer ongoing maintenance and support packages to ensure your digital products remain secure, up-to-date, and performing optimally after launch."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer flexible pricing options including fixed-price project quotes and time-and-materials engagements, depending on what best suits your project requirements."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="faq-header">
                    <span className="faq-label">Consulting More</span>
                    <h2 className="faq-title">
                        Frequently <span className="faq-title-accent">Asked</span><br />
                        <span className="faq-title-accent">Questions.</span>
                    </h2>
                    <p className="faq-description">
                        Discover the solutions, strategies, and secrets behind our success.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question-btn"
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            >
                                <span className={`faq-question ${index === openIndex ? 'active' : ''}`}>
                                    {faq.question}
                                </span>
                                <div className={`faq-icon ${index === openIndex ? 'active' : ''}`}>
                                    {index === openIndex ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <div className={`faq-answer ${index === openIndex ? 'open' : ''}`}>
                                <p className="faq-answer-text">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <button className="faq-cta-btn">
                        PROJECT DISCUSSIONS <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
