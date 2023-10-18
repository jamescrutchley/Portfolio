import styles from "../../styles/Carousel.module.css";
import { useEffect, useState } from 'react';
import img from '../../assets/portfolio-images/shopping-cart-1.png';
import { useInterval } from 'usehooks-ts';
import {filterImages} from '../../helpers/filterImages.js'

const Carousel = ({ images }) => {
    const [active, setActive] = useState(0);
    const [imagesArray, setImagesArray] = useState([]);

    useEffect(() => {
        const urlArray = filterImages(images);
        setImagesArray(urlArray);
    }, [images]);


    useInterval(
        () => {
            const frame = active < imagesArray.length - 1 ? active + 1 : 0;
            setActive(frame)
        }, 
        6000
    )

    const imageCollection = imagesArray.map((url, index) => {
        return (
        <img id="carouselImg" key={index} src={url} alt="Project Image"
        className={`${styles.img} ${active === index ? styles.active : null}`} />
        )
    })
    
  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselContainerInner}>
          {imageCollection}
        </div>
      </div>
    </>
  );
};

export default Carousel;
