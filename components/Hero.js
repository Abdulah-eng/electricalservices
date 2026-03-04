'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { FileText, Siren } from 'lucide-react';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundWrapper}>
                <Image
                    src="/assets/hero-main.png"
                    alt="Lux Electric Background"
                    fill
                    priority
                    unoptimized
                    className={styles.bgImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    Trusted Expert Electrician <br />
                    <span className={styles.highlight}>Services & Solutions in Jonesboro</span>
                </h1>
                <p className={styles.subtitle}>
                    We are your one-stop solution for dedicated commercial, residential, and industrial electrician services. From minor light installations to large-scale industrial wiring projects, we are your trusted electrician team.
                </p>
                <div className={styles.learnMoreContainer}>
                    <a href="#services" className={styles.learnMore}>[ LEARN MORE ]</a>
                </div>

                <div className={styles.buttonContainer}>
                    <a href="mailto:office@luxelectric.com?subject=Requesting a Free Quote" className={styles.primaryButton}>
                        <div className={styles.iconCircle}>
                            <FileText size={24} color="#043D5C" />
                        </div>
                        <span className={styles.buttonText}>REQUEST A FREE QUOTE</span>
                    </a>

                    <a href="tel:+18709382200" className={styles.emergencyButton}>
                        <div className={styles.iconCircle}>
                            <Siren size={24} color="#043D5C" />
                        </div>
                        <span className={styles.buttonText}>EMERGENCY HOTLINE</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
