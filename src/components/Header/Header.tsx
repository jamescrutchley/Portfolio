import styles from "../../styles/Header.module.css";
import { Transition } from "../Transition";


export const Header= () => {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <div className={styles.sidebar}>
          <ul>

            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.title}>
        <h1>James Crutchley</h1>
        <h2 className={styles.desc}>
          I'm a Frontend <span className={styles.special}>Dev</span>eloper with a passion for{" "}
          <span className={styles.special}>dev</span>eloping well-<span className={styles.special}>Dev</span>eloped web applications.
        </h2>
      </div>
      <Transition name="See More" next='about' />
    </header>
  );
};
