import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingScreen} role="status" aria-live="polite">
      <div className={styles.glow} aria-hidden />
      <div className={styles.content}>
        <p className={styles.name}>unseo</p>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={`${styles.caption} ${styles.korean}`}>
          포트폴리오를 준비하고 있습니다...
        </p>
      </div>
    </div>
  );
}
