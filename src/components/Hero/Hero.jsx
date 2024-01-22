import React from "react";
import { getImageUrl } from '../../utills.js';
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contant}>
            <h1 className={styles.title}>Hi, I'm Sahil</h1>
        <p className={styles.description}>
          I'm a frontend developer with 1 year of experience in React.js and NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sahilgupta9030@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero.png")} alt="Hero image of me" className={styles.HeroImg}></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
};


