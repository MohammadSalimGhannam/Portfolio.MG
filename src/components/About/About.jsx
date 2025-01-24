import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'

import { faHtml5, faCss3Alt, faJsSquare, faReact, faPython, faGitAlt, faBootstrap, faSass} from '@fortawesome/free-brands-svg-icons';  
import Title from '../Section.Components/Title/Title'
import SubTitle from '../Section.Components/SubTitle/SubTitle'
import styles from './About.module.css'

const About = (props) => {

    const rotationAnimation = {
        rotate: 360,
        transition: {
          duration: 100,
          repeat: Infinity,
          ease: 'linear',
        },
    };

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
        <div className={styles.About} id='About'>
            <Title title='About'/>
            <div className={styles.AboutContainer}>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.5 }}
                    variants={leftPart}
                > 
                    <SubTitle title='Education'/>
                    <div className={styles.Edu}>
                        <h2>University Of Aleppo</h2>
                        <p>2020 _ 2025</p>
                        <p>Bachelor of Informatics Engineering</p>
                        <p>Cumulative GPA: 3.50/4.00</p>
                    </div>
                    <div className={styles.Edu}>
                        <h2>syrian virtual university</h2>
                        <p>2025 _ 2027</p>
                        <p>master of artificial intelligence</p>
                        <p>Cumulative GPA: 3.50/4.00</p>
                    </div>
                </motion.div>
                <motion.div 
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={rightPart}
                    >
                    <SubTitle title='Skills'/>
                    <motion.div
                        className={styles.Parent}
                        animate={rotationAnimation}
                    >
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faHtml5}/></div>
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faCss3Alt}/></div>
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faJsSquare}/></div>
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faReact}/></div>
                        <div className={styles.Skill}></div>
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faPython}/></div>
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faGitAlt}/></div>
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faBootstrap}/></div>
                        <div className={styles.Skill}><FontAwesomeIcon className={styles.Icon} icon={faSass}/></div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default About 