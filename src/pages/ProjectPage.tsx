import styles from "../styles/ProjectPage.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";

import Highlight from "react-highlight";

export interface ProjectItem {
    img?: string;
    copy?: string;
    code?: string;
    title?: string;
    website?: string;
    github?: string;
  }

export const ProjectPage = () => {
  const location = useLocation();
  const { data } = location.state;
  const { details } = location.state;

  const panels = Object.values(details as ProjectItem).map((item, index) => {
    const urlString = item.img ? `/${item.img.toString()}` : '';

    return (
      <div key={index} className={styles.panel}>
        {item.img && (
          <div className={styles.imageSection}>
            <img src={urlString} alt="project image" />
          </div>
        )}
        {item.copy && (
          <div className={styles.copySection}>
            <p>{item.copy}</p>
          </div>
        )}
        {item.code && (
          <div className={styles.codeSection}>
            <p className={styles.codeTitle}>{item.title}</p>
            <Highlight className={styles.highlight}>
              {item.code}
            </Highlight>
          </div>
        )}
        {(item.website && item.github) && (
            <div className={styles.buttonSection}>
              <a href={item.website}><button>Project Website</button></a>
              <a href={item.github}><button>Project Github Repo</button></a>
            </div>
        )}
      </div>
    );
  });

  return (
    <>
      <ScrollToTop />
      <section className={styles.page}>
        <header>
          <h1>{data}</h1>
        </header>
        <div className={styles.container}>
            <div className={styles.mask}></div>
            <div className={styles.mask}></div>
            <div className={styles.mask}></div>
            <div className={styles.mask}></div>

          {panels}

        </div>

          <Link to="/"><button className={styles.backHome}>Back to Portfolio</button></Link>
        
      </section>
    </>
  );
};
