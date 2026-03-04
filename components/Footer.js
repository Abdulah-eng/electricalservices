import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.divider}>
                <Image src="/assets/divider.png" alt="" fill className={styles.dividerImg} />
            </div>

            <div className={styles.container}>
                <div className={styles.section}>
                    <h3 className={styles.title}>Office Line</h3>
                    <p className={styles.info}>(870) 938-2200</p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.title}>Hours of Operation</h3>
                    <p className={styles.info}>MON - FRI: 8:00 am - 5:00 pm</p>
                    <p className={styles.info}>SAT - SUN: Closed</p>
                    <p className={styles.info}>EMERGENCIES*: 24/7</p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.title}>Mailing Address</h3>
                    <p className={styles.info}>2420 Judes Way 6018</p>
                    <p className={styles.info}>Jonesboro, AR 72404</p>
                </div>

                <div className={styles.mapSection}>
                    <h3 className={styles.title}>Find Us</h3>
                    <div className={styles.mapPlaceholder}>
                        <Image
                            src="/assets/icon-home-page-map.svg"
                            alt="Map Location"
                            width={48}
                            height={48}
                            className={styles.mapIcon}
                        />
                        <span>Jonesboro, Arkansas</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; 2026 Lux Electric. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
