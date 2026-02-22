import styles from "./ExperienceSkeleton.module.css";

export function ExperienceSkeleton() {
	return (
		<div className={styles.skeleton}>
			<div className={`${styles.skeletonLine} ${styles.skeletonTitle}`} />
			<div className={`${styles.skeletonLine} ${styles.skeletonSub}`} />
			<div className={styles.skeletonCard} />
			<div className={styles.skeletonCard} />
		</div>
	);
}
