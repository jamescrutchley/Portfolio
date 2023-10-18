import styles from "../styles/ProjectPage.module.css";
import img from "../assets/construction-site.svg";
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ScrollToTop from "../hooks/ScrollToTop";


export const ProjectPage = () => {
    const location = useLocation();
    const data = location.state.data; 

  return (
    <>
    <ScrollToTop />
    <section className={styles.page}>
      <header>
      </header>
      <div className={styles.container}>
        <h1>{data}</h1>

        <div className={styles.panel}>
          <div className={styles.imageSection}>
            <img src={img} alt="" />
          </div>
          <div className={styles.copySection}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis deserunt itaque animi, ullam perspiciatis dolorum eum,
              magni praesentium rerum veniam dolorem tenetur nesciunt,
              consequatur voluptatem magnam non. Dolores, vel nihil.
            </p>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.imageSection}>
            <img src={img} alt="" />
          </div>
          <div className={styles.copySection}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis deserunt itaque animi, ullam perspiciatis dolorum eum,
              magni praesentium rerum veniam dolorem tenetur nesciunt,
              consequatur voluptatem magnam non. Dolores, vel nihil.
            </p>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.imageSection}>
            <img src={img} alt="" />
          </div>
          <div className={styles.copySection}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis deserunt itaque animi, ullam perspiciatis dolorum eum,
              magni praesentium rerum veniam dolorem tenetur nesciunt,
              consequatur voluptatem magnam non. Dolores, vel nihil.
            </p>
          </div>
        </div>
        <div className={styles.buttonSection}>
          <button>Project Website</button>
          <button>Project Github Repo</button>
        </div>
      </div>
      <button className={styles.backHome}>
       <Link to="/">Back to Portfolio</Link>
        </button>
    </section>
    </>
  );
};
