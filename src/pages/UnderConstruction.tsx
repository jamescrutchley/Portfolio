import img from "../assets/building-construction.svg";
import styles from "../styles/Construction.module.css";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className={styles.constructionPage}>
      <span className={styles.emph}>
        This page is still under construction.
      </span>
      <img className={styles.img} src={img} alt="construction" />
      <Link className={styles.goBack} to={'/'}>
        <button className={styles.goBack}>Go back</button>
        </Link>
    </div>
  );
};

export default UnderConstruction;
