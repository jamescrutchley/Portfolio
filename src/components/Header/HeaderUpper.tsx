import styles from '../../styles/Header.module.css';
import { FunctionComponent } from 'react';

interface Toggle {
    toggle: () => void
}

const HeaderUpper: FunctionComponent<Toggle> = ({toggle}) => {
    return (
        <div className={styles.logo}>
          <button className="darkTheme" onClick={() => toggle()}></button>
          <span className={styles.glow}></span>
        </div>
    )
}

export default HeaderUpper;