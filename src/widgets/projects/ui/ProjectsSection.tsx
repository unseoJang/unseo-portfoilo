import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
	return (
		<section
			className={styles.projectsSection}
			id="section-projects"
		>
			<h2>Selected Projects</h2>
			<div className={styles.projectGrid}>
				<article className={styles.projectCard}>
					<h3>Project One</h3>
					<p>문제 해결 과정과 성과를 보여주는 대표 프로젝트.</p>
				</article>
				<article className={styles.projectCard}>
					<h3>Project Two</h3>
					<p>사용자 경험 개선과 성능 최적화를 함께 진행한 프로젝트.</p>
				</article>
			</div>
		</section>
	);
}
