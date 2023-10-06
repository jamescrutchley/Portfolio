// import styles from '../styles/home.module.css'
import {Header} from '../components/Header.tsx';
import { About } from '../components/About.tsx';
import { Contact } from '../components/Contact.tsx';
import { Portfolio } from '../components/Portfolio.tsx';
import { useState } from 'react';
import styles from '../App.css';

export const Home = () => {
    const [theme, setTheme] = useState('light');
    const [scroll, setScroll] = useState(0);

    const toggleTheme = () => {
        const newTheme = (theme === 'dark') ? 'light' : 'dark';
        setTheme(newTheme);
        console.log('toggle')
    }

  return (
    <div data-theme={theme}>
      <Header toggle={toggleTheme}/>
      <About />
      <Portfolio />
      <Contact />
    
      {/* <section>About</section>
      <section>Work</section>
      <section>Contact</section> */}
    </div>
  );
};
