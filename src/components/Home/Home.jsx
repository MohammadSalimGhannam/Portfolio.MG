import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import {motion} from 'framer-motion';

import styles from './Home.module.css'
import imgDisk from '../../assets/ProfileDisk.jpg'
import imgMobile from '../../assets/ProfileMobile.jpg'

const Home = () => {
    
    const leftPart = {
        offscreen: {
        x: -100,
        opacity: 0,
        },
        onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
        },
    };
    
    const rightPart = {
        offscreen: {
        x: 100,
        opacity: 0,
        },
        onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
        },
    };
    
    return (
        <div className={styles.Home}>
            <motion.div 
                className={styles.Text}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={leftPart}
            >
                <div className={styles.Profile}>
                    <img src={imgMobile} alt='Profile Image'/>
                </div>
                <h3 className={styles.Name}>MOHAMMAD GHANNAM</h3>
                <p className={styles.jopTitle}>Software Engineer</p>
                <div className={styles.Baio}>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Et maiores reprehenderit aspernatur.
                </div>
            </motion.div>
            <motion.div 
                className={styles.Img}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={rightPart}
            >
                <LazyLoadImage 
                    className={styles.img}
                    src={imgDisk}
                    alt='Profile Image'/>
            </motion.div>
        </div>
    );
}

export default Home