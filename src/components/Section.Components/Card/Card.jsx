import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './Card.module.css'
import {motion} from 'framer-motion'

const Card = (props) => {
    const [toggle, setToggle] = useState(props.descriptionEnable)
    const [styleDescription, setStyle] = useState(props.descriptionEnable ? {opacity: '1', zIndex: '1'} : {opacity: '0', zIndex: '-1'});

    const motionPart = {
        offscreen: {
        y: 100,
        opacity: 0,
        },
        onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
        },
    };

    const descriptionToggleHandler = () => {
        setToggle(!toggle);

        if (!toggle)
            setStyle({opacity: '1', zIndex: '1'});
        else 
            setStyle({opacity: '0', zIndex: '-1'})
    }

    return (
        <motion.div
            className={styles.Card}
            description={props.description}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.5 }}
            variants={motionPart}
        >
            <span className={styles.Toggle} onClick={descriptionToggleHandler}>{!toggle ? 'See More' : 'See Less'}<FontAwesomeIcon icon={!toggle ? faChevronDown : faTimes}/></span>
            <div className={styles.Description} style={styleDescription}>{props.description}</div>
            <div className={styles.Img}>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className={styles.Info}>
                <h3><a href={props.url} target="_blank" aria-label="View My Projects"><FontAwesomeIcon icon={faExternalLinkAlt}/></a> {props.Title}</h3>
                <p><strong>Role: </strong>{props.Role}</p>
                <p><strong>Technologies: </strong>{props.Technologies}</p>
            </div>
        </motion.div>
    )
}

export default Card;