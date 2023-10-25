import styles from "../styles/Mask.module.css";

const Mask = () => {
  return (
    <div className={styles.maskWrapper}>
      <div className={styles.mask}></div>
      <div className={styles.mask}></div>
      <div className={styles.mask}></div>
    </div>
  );
};

export default Mask;