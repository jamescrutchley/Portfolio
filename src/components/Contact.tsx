import styles from "../styles/Contact.module.css";
import resume from '../assets/Resume-James-Crutchley.pdf';

export const Contact = () => {
  return (
    <>
      <div className={styles.container} id="contact">
        <h3 className={styles.sectionHeader}>Contact</h3>
        <section className={styles.sectionContainer}>
          <div className={styles.email}>
            {/* <span className={styles.sectionLabel}>Email:</span> */}
            <p>Email: jamescrutchley98@gmail.com</p>
          </div>
          <div className={styles.resumeRow}>
            <a href="https://github.com/jamescrutchley">
              <p>Github: @jamescrutchley</p>
            </a>
          </div>
          <div className={styles.resumeRow}>
            <a href="https://www.linkedin.com/in/james-crutchley-b16631190/">
              <p>LinkedIn: @james-crutchley</p>
            </a>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <h3 id="resume" className={styles.sectionHeader}>
            Resume
          </h3>
          <div className={styles.resumeRow}>
            <a href={resume} download>
              <p>Download PDF (80KB)</p>
            </a>
          </div>
          <div className={styles.resumeRow}>
            <a href="https://docs.google.com/document/d/1jbVTESykpT54550JH08YpMQ_cUMxk-0kzSnM1dzTEIo/edit?usp=sharing" target="_blank">
              <p>View on Google Docs</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
