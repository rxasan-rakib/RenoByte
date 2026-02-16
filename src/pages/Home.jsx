import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Services from '../components/Services';
import DigitalVerse from '../components/DigitalVerse';
import Journey from '../components/Journey';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <Expertise />
            <Services />
            <DigitalVerse />
            <Journey />
            <FAQ />
        </>
    );
};

export default Home;
