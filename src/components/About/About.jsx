import React from "react";
import styles from './About.module.css';
import { getImageUrl } from '../../utills.js';

export const About = () => {
  return (
    <section className={styles.container} id="About">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/about-img.png")} alt='me sitting with laptop'
            className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursor-icon.png")} alt='cursor icon'/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/backend-icon.png")} alt='back-end'/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience in developing fast and optimised back-end and APIs</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
  );
};


