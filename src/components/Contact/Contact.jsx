import React from 'react'
import { getImageUrl } from '../../utills.js';
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gmail.png")} alt="gmail"/>
                <a href="mailto:sahilgupta9030@gmail.com">sahilgupta9030@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="linkedin"/>
                <a href="https://www.linkedin.com/in/sahil-gupta-7a10431b3/">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="Github"/>
                <a href="https://github.com/Sahil-9030/">GitHub</a>
            </li>
        </ul>
    </footer>
  );
};


