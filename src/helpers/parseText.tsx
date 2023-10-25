import styles from '../styles/Portfolio.module.css'

export const parseText = (copy: string) => {
    // limit to 30 words.
  let clipped = copy.split(" ").slice(0).join(" ");
  clipped += `\n`;
  const lines = clipped.split("\n");
  return (
    <div className={styles.projectDescription}>
      {lines.map((line, index) => (
        <span       className={`${styles.line} ${index === lines.length - 1 ? styles.lastLine : ''}`}
        key={index}>{line}</span>
      ))}
    </div>
  );
};
