import fish from "../assets/fish.svg";
import comment from "../assets/comment.svg";
import portfolio from "../assets/portfolio.svg"
import { useState } from "react";
import styles from '../styles/Welcome.module.css';

export const Welcome = () => {
  const [active, setActive] = useState(false);
  const [fade, setFade] = useState(false);

  return (
    <div className={fade ? `${styles.fade}` : undefined}>
      <img
        className={active ? `${styles.active}` : `${styles.inactive}`}
        src={fish}
        alt=""
        onClick={() => setActive(true)}
      />
      {active && (
        <div >
          <img
            className={styles.speech}
            src={comment}
            alt=""
            onClick={() => console.log("...")}
          />
          <button className={styles.link} onClick={() => setFade(true)}>
            {" "}
            <img src={portfolio} alt="" />
          </button>
          {fade && <button className={styles.view}>View Portfolio</button>}
        </div>
      )}
    </div>
  );
};
