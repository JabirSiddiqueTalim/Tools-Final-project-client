import React from 'react';
import HeroSection from './Components/HeroSection';
import FAQ from './Components/FAQ';
import NewsletterSection from './Components/NewsletterSection';
import StatsSection from './Components/StatsSection';
import BrandMarquee from './Components/BrandMarquee';
import FeaturesSection from './Components/FeaturesSection';
import { ScrollRestoration } from 'react-router';

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <BrandMarquee></BrandMarquee>
            <StatsSection></StatsSection>
            <FAQ></FAQ>
            <NewsletterSection></NewsletterSection>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default HomePage;