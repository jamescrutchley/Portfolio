import styles from '../styles/Bubble.module.css';

export const Bubble = (props: {count: number}) => {
    const numBubbles = props.count;
    const bubbles = Array.from({ length: numBubbles }, (_, index) => (
        <div key={index} className={styles.bubble}></div>
    ));

    return <div>{bubbles}</div>;
}