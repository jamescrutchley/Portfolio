// import styles from '../styles/home.module.css'
import {Header} from '../components/Header/Header.tsx';
import { About } from '../components/About.tsx';
import { Contact } from '../components/Contact.tsx';
import { Portfolio } from '../components/Portfolio.tsx';
import { useState } from 'react';
import styles from '../App.css';

export const Home = () => {


  return (
    <>
      <Header/>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};
