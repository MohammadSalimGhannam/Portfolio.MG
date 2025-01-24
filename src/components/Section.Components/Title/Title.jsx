import React from 'react'

import styles from './Title.module.css'

const Title = (props) => <p className={styles.Title}>{props.title}</p>

export default Title