'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = ({ isScrolledUp }) => {
    return (
        <header className={`${styles.header} ${isScrolledUp ? styles.enlarged : ''}`}>
            <div className={styles.logoContainer}>
                <Image
                    src="/assets/logo-wide.svg"
                    alt="Lux Electric Logo"
                    width={280}
                    height={60}
                    priority
                    className={styles.logo}
                />
            </div>
        </header>
    );
};

export default Header;
