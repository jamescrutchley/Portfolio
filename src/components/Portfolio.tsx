import styles from "../styles/Portfolio.module.css";
import data from "../data/portfolio.json";
import img from "../assets/portfolio-images/shopping-cart-1.png";
import img2 from "../assets/portfolio-images/shopping-cart-2.png";
import Project from "./Project/Project";
import { useEffect } from "react";

export const Portfolio = () => {

    const projects = data;

 const gallery = Object.keys(projects).map((projectId) => {
    const project = projects[projectId];
    return (
      <Project
        key={projectId}
        images={project.Images.urls}
        title={project.Name}
        description={project.Description}
        details={project.Details}
      />
    );
  })

  return (
    <>
      <div className={styles.container} id="portfolio">
        <h3 className={styles.sectionHeader}>Portfolio</h3>
        <div className={styles.galleryContainer}>
          <ul className={styles.gallery}>
            {gallery}
          </ul>
        </div>
      </div>
    </>
  );
};
