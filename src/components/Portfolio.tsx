import styles from "../styles/Portfolio.module.css";
import data from "../data/portfolio.json";
import Project from "./Project/Project";

interface ProjectData {
    [projectId: string]: {
      Name: string;
      Description: string;
      Tech: string;
      Images: {
        keyword: string;
        urls: string;
      };
      date: string;
      details?: {
        [detailId: string]: {
          img?: string; 
          copy?: string;
          code?: string;
          title?: string;
          website?: string;
          github?: string;
        };
      };
    };
  }
  

export const Portfolio = () => {

    const projects: ProjectData = data;

 const gallery = Object.keys(projects).map((projectId) => {
    const project = projects[projectId];
    return (
      <Project
        key={projectId}
        images={project.Images.urls}
        title={project.Name}
        description={project.Description}
        tech={project.Tech}
        details={project.details}
        date={project.date}
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
