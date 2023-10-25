import styles from "../../styles/Portfolio.module.css";
import Carousel from "./Carousel.tsx";
import { parseText } from "../../helpers/parseText.tsx";
import {
  filterImages,
  produceImageCollection,
} from "../../helpers/filterImages.js";
import { Link } from "react-router-dom";
import { useEffect, FunctionComponent } from "react";

function toKebabCase(inputString: string) {
  return inputString.replace(/\s+/g, "-").toLowerCase();
}

interface ProjectProps {
  title: string;
  description: string;
  tech: string;
  images: string;
  details?: Record<string, unknown>;
  date: string;
}

const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  tech,
  images,
  details,
  date,
}) => {
  const desc = parseText(description);
  const detailUrls = filterImages(tech);
  let detailImages: JSX.Element[] = [];
  if (detailUrls) {
     detailImages = produceImageCollection(detailUrls, 'detailImage');
  }
  const titleString = toKebabCase(title);

  useEffect(() => console.log(title), [title]);

  return (
    <li className={styles.project}>
      <div className={styles.mask}></div>
      <div className={styles.mask}></div>
      <div className={styles.imageContainer}>
        <Carousel images={images} />
      </div>
      <div className={styles.contentContainer}>
        <h4>
          {title} <span className={styles.dateSpan}>{date}</span>
        </h4>
        {<p>{desc}</p>}
        <article className={styles.details}>{detailImages}</article>
        <Link
          to={
            title === "React Design Patterns"
              ? `project/under-construction`
              : `project/${titleString}`
          }
          state={{ data: title, details: details }}
        >
          {" "}
          <button className={styles.seeMore}>See more </button>
        </Link>
      </div>
    </li>
  );
};

export default Project;
