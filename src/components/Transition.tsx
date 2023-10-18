import styles from '../styles/Header.module.css';
import arrowDown from '../assets/caret-down.svg';
import { FunctionComponent } from 'react';

interface TransitionProps {
    name: string;
    next: string;
  }


// export const Header: FunctionComponent<HeaderProps> = ({ toggle }) => {



export const Transition: FunctionComponent<TransitionProps> = ({ name, next }) => {
  return (
    <div className={styles.transition}>
      <a href={`#${next}`}>
        <p>{name}</p>
        <img className={styles.arrow} src={arrowDown} />
      </a>
    </div>
  );
};
