import styles from "../styles/Header.module.css";
import React, { FunctionComponent } from 'react';


interface HeaderProps {
    toggle: () => void;
  }


export const Header: FunctionComponent<HeaderProps> = ({ toggle }) => {

  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <div className={styles.logo}>
          <button className="darkTheme" onClick={() => toggle()}>

          </button>
        </div>
        <div className={styles.sidebar}>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="">Resume</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.title}>
        <h1>James Crutchley</h1>
        <h2 className={styles.desc}>
          I'm a Frontend <span>Dev</span>eloper with a passion for <span>dev</span>eloping my Web-<span>Dev</span>elopment abilities.
        </h2>
      </div>
      <div className={styles.transition}>
        Scroll 
      </div>
    </header>
  );
};
