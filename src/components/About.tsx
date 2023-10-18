import styles from '../styles/About.module.css'
import { copy } from '../data/about.json';
import {parseText} from '../helpers/parseText.tsx';
import { Transition } from './Transition.tsx';

export const About = () => {

    const parsedCopy = parseText(copy);

    return (
        <>
        <div className={styles.aboutContainer} id="about">
            <h3 className={styles.aboutSectionHeader}>About Me</h3>
            <section className={styles.aboutSectionContainer}>
             <div>{parsedCopy}</div>
            </section>
            <Transition name="See Projects" next="portfolio" />
        </div>
        </>
    )
}