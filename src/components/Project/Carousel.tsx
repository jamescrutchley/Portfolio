import styles from "../../styles/Carousel.module.css";
import { useEffect, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import {filterImages} from '../../helpers/filterImages.js';
import { FunctionComponent } from 'react';

interface CarouselProps {
    images: string;
}

type ImageType = string;


const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
    const [active, setActive] = useState(0);
    const [imagesArray, setImagesArray] = useState<ImageType[]>([]);

    useEffect(() => {
        const urlArray: ImageType[] | undefined = filterImages(images);
        if (urlArray !== undefined) {
            setImagesArray(urlArray);
        }
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
