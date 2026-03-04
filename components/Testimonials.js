'use client';

import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const reviews = [
        {
            name: 'John D.',
            text: 'Lux Electric did an amazing job with our home rewiring. Professional, fast, and very clean!',
            rating: 5
        },
        {
            name: 'Sarah M.',
            text: 'The emergency service saved us when our power went out on a Saturday night. Highly recommend!',
            rating: 5
        },
        {
            name: 'Michael R.',
            text: 'Reliable commercial electrical work. They handled our office renovation with ease.',
            rating: 5
        }
    ];

    return (
        <section className={styles.testimonials}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <div className={styles.carousel}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
                        <p className={styles.text}>"{review.text}"</p>
                        <h4 className={styles.name}>- {review.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
