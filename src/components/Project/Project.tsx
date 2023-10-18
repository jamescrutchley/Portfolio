import styles from '../../styles/Portfolio.module.css';
import Carousel from './Carousel.tsx';
import img from '../../assets/portfolio-images/shopping-cart-1.png';
import { parseText } from '../../helpers/parseText.tsx';
import {filterImages, produceImageCollection} from '../../helpers/filterImages.js';
import {Link} from 'react-router-dom';

function toKebabCase(inputString) {
    return inputString.replace(/\s+/g, '-').toLowerCase();
}

const Project = ({title, description, details, images}) => {
    const desc = parseText(description);
    const detailUrls = filterImages(details);
    const detailImages = produceImageCollection(detailUrls);
    const titleString = toKebabCase(title)

    return (
        <li className={styles.project}>
            <div className={styles.mask}></div>
        <div className={styles.imageContainer}>
                  {/* <img src={image} alt="project image" /> */}
                  <Carousel images={images} />
        </div>
        <div className={styles.contentContainer}>
          <h4>{title}</h4>
          {<p>
            {desc}
          </p>}
          <article className={styles.details}>{detailImages}</article>
          <button className={styles.seeMore}>
            <Link to={`project-page`} state={{ data: titleString }}> See more</Link>
            </button>
        </div>
      </li>
    )
}

export default Project;