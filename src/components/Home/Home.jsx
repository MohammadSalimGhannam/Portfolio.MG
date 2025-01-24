import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import {motion} from 'framer-motion';

import styles from './Home.module.css'
import img from '../../assets/Profile.jpg'

const Home = (props) => {
    
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
                <h2 className={styles.Name}>MOHAMMAD GHANNAM</h2>
                <p className={styles.jopTitle}>front-end Dev</p>
                <div className={styles.Baio}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores reprehenderit aspernatur dolor optio libero numquam rem sapiente corporis, eveniet nihil repellat, tempora praesentium labore ut illo, natus aut esse.
                </div>
            </motion.div>
            <motion.div 
                className={styles.Img}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={rightPart}
            >
                <LazyLoadImage className={styles.img} src={img} alt="Profile"/>
            </motion.div>
        </div>
    );
}

export default Home