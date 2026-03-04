'use client';

import React from 'react';
import styles from './WhyChooseUs.module.css';
import { ShieldCheck, Clock, Award, Hammer } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <ShieldCheck size={32} />,
            title: 'Licensed & Insured',
            text: 'Fully certified professionals you can trust with your home safety.'
        },
        {
            icon: <Clock size={32} />,
            title: '24/7 Availability',
            text: 'Electrical emergencies don’t wait, and neither do we.'
        },
        {
            icon: <Award size={32} />,
            title: 'Quality Guaranteed',
            text: 'We stand behind our work with a 100% satisfaction guarantee.'
        },
        {
            icon: <Hammer size={32} />,
            title: 'Expert Workmanship',
            text: 'Decades of experience in commercial and residential projects.'
        }
    ];

    return (
        <section className={styles.whyChooseUs}>
            <h2 className={styles.sectionTitle}>Why Choose us</h2>
            <div className={styles.grid}>
                {reasons.map((reason, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>{reason.icon}</div>
                        <h3 className={styles.cardTitle}>{reason.title}</h3>
                        <p className={styles.cardText}>{reason.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
