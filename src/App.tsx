import "./App.css";
import { Bubble } from "./components/Bubble";
import { useState } from "react";
import HeaderUpper from "./components/Header/HeaderUpper";
import { Outlet } from 'react-router-dom'
import styles from './styles/About.module.css';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    console.log("toggle");
  };

  return (
    <div className={styles.wrapper} data-theme={theme}>
      <HeaderUpper toggle={toggleTheme} />
      <Bubble count={10} />
      <Outlet />
    </div>
  );
}

export default App;
