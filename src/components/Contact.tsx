import styles from "../styles/Contact.module.css";

export const Contact = () => {
  return (
    <>
      <div className={styles.container} id="contact">
        <h3 className={styles.sectionHeader}>Contact</h3>
        <section className={styles.sectionContainer}>
          <div className={styles.email}>
            <span className={styles.sectionLabel}>Email:</span>
            <p>jamescrutchley98@gmail.com</p>
          </div>
        </section>
        <h3 className={styles.sectionHeader}>Resume</h3>
        <div className={styles.row}>
          <p>Download: </p>
          <a href="">(Link)</a>
        </div>
        <div className={styles.row}>
          <p>Google Docs: </p>
          <a href="">(Link)</a>
        </div>
      </div>
    </>
  );
};
