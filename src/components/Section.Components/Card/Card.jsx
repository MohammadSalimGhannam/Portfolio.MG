import React from 'react'

import styles from './Card.module.css'
import {motion} from 'framer-motion'

const Card = (props) => {

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
    return (
        <motion.div
            className={styles.Card}
            description={props.description}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.5 }}
            variants={motionPart}
        >

            <div className={styles.Img} >
                <img src={props.img}/>
            </div>
            <div className={styles.Info}>
                <h3>{props.Title}</h3>
                <p><strong>Role: </strong>{props.Role}</p>
                <p><strong>Technologies: </strong>{props.Technologies}</p>
            </div>
        </motion.div>
    )
}

export default Card;