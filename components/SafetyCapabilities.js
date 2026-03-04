'use client';

import React from 'react';
import styles from './SafetyCapabilities.module.css';
import { Shield, Zap, Tool } from 'lucide-react';

const SafetyCapabilities = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.block}>
                    <div className={styles.header}>
                        <Shield className={styles.icon} size={24} />
                        <h2 className={styles.title}>Safety First</h2>
                    </div>
                    <p className={styles.text}>
                        We adhere to the strictest NEC (National Electrical Code) standards.
                        Our safety protocols ensure protection for your property and our team.
                    </p>
                </div>

                <div className={styles.block}>
                    <div className={styles.header}>
                        <Zap className={styles.icon} size={24} />
                        <h2 className={styles.title}>Technical Capabilities</h2>
                    </div>
                    <ul className={styles.list}>
                        <li>Panel Upgrades & Replacements</li>
                        <li>Smart Home Integration</li>
                        <li>EV Charger Installations</li>
                        <li>Industrial Controls & Automation</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SafetyCapabilities;
