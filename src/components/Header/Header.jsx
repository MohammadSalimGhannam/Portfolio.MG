import React from 'react';
import styles from './Header.module.css';

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <img src={logo} alt='logo'/>
      </div>
      <ul className={styles.Nav}>
        <li><a href='#About'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;