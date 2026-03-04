'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import SafetyCapabilities from '../components/SafetyCapabilities';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';

export default function Home() {
    const [isScrolledUp, setIsScrolledUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY && currentScrollY > 50) {
                setIsScrolledUp(true);
            } else {
                setIsScrolledUp(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <main className="main-container fade-in">
            <Header isScrolledUp={isScrolledUp} />

            <Hero />

            <Services />

            <WhyChooseUs />

            <Testimonials />

            <SafetyCapabilities />

            <Footer />

            <BottomNav />
        </main>
    );
}
