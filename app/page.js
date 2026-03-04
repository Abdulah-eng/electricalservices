'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import styles from './page.module.css';
import Image from 'next/image';
import { FileText, Siren, Facebook, Instagram, Youtube, Linkedin, Info } from 'lucide-react';

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
        <main className={styles.main}>
            <Header isScrolledUp={isScrolledUp} />

            <div className={styles.heroImageContainer}>
                <Image
                    src="/assets/hero-main.png"
                    alt="Electrician working"
                    width={1920}
                    height={600}
                    className={styles.heroImage}
                    priority
                />
            </div>

            <section className={styles.infoSection}>
                <h1 className={styles.heading}>
                    Trusted Expert Electrician Services &amp; Solutions in Jonesboro
                </h1>

                <p className={styles.paragraph}>
                    We are your one-stop solution for dedicated commercial, residential, and industrial electrician services. From minor light installations to large-scale industrial wiring projects, we are your trusted electrician team.
                </p>

                <a href="#services" className={styles.learnMore}>[ LEARN MORE ]</a>

                <div className={styles.divider}></div>

                <div className={styles.buttonsWrapper}>
                    <div className={styles.buttonCol}>
                        <div className={styles.iconCircle}>
                            <FileText size={32} color="#00213B" />
                        </div>
                        <a href="mailto:office@luxelectric.com" className={styles.actionButton}>
                            Request Free Quote
                        </a>
                    </div>

                    <div className={styles.buttonCol}>
                        <div className={styles.iconCircle}>
                            <Siren size={32} color="#00213B" />
                        </div>
                        <a href="tel:+18709382200" className={styles.actionButton}>
                            Emergency Hotline
                        </a>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.contactInfoContainer}>
                    <div className={styles.infoBlock}>
                        <span className={styles.infoLabel}>OFFICE LINE</span>
                        <span className={styles.infoText}>(870) 938-2200</span>
                    </div>

                    <div className={styles.infoBlock}>
                        <span className={styles.infoLabel}>HOURS OF OPERATION</span>
                        <span className={styles.infoTextSmall}>MON - FRI: 8:00 am - 5:00 pm</span>
                        <span className={styles.infoTextSmall}>SAT - SUN: Closed</span>
                        <span className={styles.infoTextSmall}>EMERGENCIES*: 24/7</span>
                    </div>

                    <div className={styles.infoBlock}>
                        <span className={styles.infoLabel}>MAILING ADDRESS</span>
                        <span className={styles.infoTextSmall}>2420 Judes Way 6018</span>
                        <span className={styles.infoTextSmall}>Jonesboro, AR 72404</span>
                    </div>
                </div>

                <p className={styles.disclaimer}>(*) 24/7 EMERGENCY SERVICE WHEN AVAILABLE.</p>
            </section>

            <section className={styles.mapSection}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.789230623233!2d-90.72979208472403!3d35.80803528016499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d3a84ed574de97%3A0xe67db511197bedc7!2s2420%20Judes%20Way%2C%20Jonesboro%2C%20AR%2072404!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <footer className={styles.footerSection}>
                <div className={styles.socialWrapper}>
                    <span className={styles.infoLabel} style={{ marginBottom: "1rem" }}>FOLLOW US</span>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
                        <a href="#" className={styles.socialIcon}><Youtube size={20} /></a>
                        {/* Custom icon for TikTok as it might not be in older lucide-react */}
                        <a href="#" className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                        </a>
                        <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
                        {/* Custom icon for WhatsApp */}
                        <a href="#" className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                        </a>
                    </div>
                </div>

                <div className={styles.footerDivider}></div>

                <p className={styles.copyright}>&copy; 2026 Lux Electric, LLC. All rights reserved.<br />Design by Graphic Vision Creative Group.</p>
            </footer>
        </main>
    );
}
