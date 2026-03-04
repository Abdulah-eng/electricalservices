'use client';

import React from 'react';
import styles from './Services.module.css';

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Trusted Expert Electrician <br />
                    Services & Solutions in Jonesboro
                </h2>

                <p className={styles.description}>
                    We are your one-stop solution for dedicated commercial, residential, and industrial electrician services.
                    From minor light installations to large-scale industrial wiring projects, we are your trusted electrician team.
                </p>

                <a href="#" className={styles.learnMore}>
                    [ LEARN MORE ]
                </a>

                <div className={styles.divider}></div>
            </div>

            {/* Grid of services placeholder */}
            <div className={styles.gridContainer}>
                <div className={styles.serviceGrid}>
                    {[
                        { title: 'Residential', icon: '🏠' },
                        { title: 'Commercial', icon: '🏢' },
                        { title: 'Industrial', icon: '🏭' },
                        { title: 'Emergency', icon: '⚡' }
                    ].map((item, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <span className={styles.icon}>{item.icon}</span>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
