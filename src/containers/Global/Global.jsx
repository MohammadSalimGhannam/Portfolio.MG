import React from 'react';
import styles from './Global.module.css';

const Global = (props) => <div className={styles.Global}>{props.children}</div>;

export default Global;