'use client';

import React from 'react';
import Image from 'next/image';
import styles from './BottomNav.module.css';

const BottomNav = () => {
    const navItems = [
        { icon: 'call', label: 'Call', src: '/assets/icon-home-page-call.svg', href: 'tel:+18709382200' },
        { icon: 'chat', label: 'Chat', src: '/assets/icon-home-page-chat.svg', href: '#' },
        { icon: 'map', label: 'Map', src: '/assets/icon-home-page-map.svg', href: 'https://www.google.com/maps/search/?api=1&query=2420+Judes+Way+6018+Jonesboro+AR+72404' },
        { icon: 'service', label: 'Service', src: '/assets/icon-home-page-service.svg', href: '#services' },
        { icon: 'email', label: 'Email', src: '/assets/icon-home-page-email.svg', href: 'mailto:office@luxelectric.com' },
    ];

    return (
        <nav className={styles.bottomNav}>
            <div className={styles.navContainer}>
                {navItems.map((item) => (
                    <a key={item.icon} href={item.href} className={styles.navItem}>
                        <div className={styles.iconWrapper}>
                            <Image src={item.src} alt={item.label} width={32} height={32} className={styles.icon} />
                        </div>
                        <span className={styles.label}>{item.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;
