import styles from '../../styles/Header.module.css';

const HeaderUpper = ({toggle}) => {
    return (
        <div className={styles.logo}>
          <button className="darkTheme" onClick={() => toggle()}></button>
          <span className={styles.glow}></span>
        </div>
    )
}

export default HeaderUpper;