import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        M G
      </div>
      <ul className={styles.Nav}>
        <li><a href='#About'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#About'>Service</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;