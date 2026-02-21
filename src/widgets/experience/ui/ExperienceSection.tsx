import styles from "./ExperienceSection.module.css"

export function ExperienceSection() {
	return (
		<section className={styles.experienceSection}>
			<h2>Experience</h2>
			<article className={styles.experienceItem}>
				<p className={styles.experiencePeriod}>2021 - Present</p>
				<h3>Frontend Engineer</h3>
				<p>
					핵심 서비스 UI 고도화, 렌더링 성능 개선, 디자인 시스템 기반 화면
					개발을 진행했습니다.
				</p>
			</article>
		</section>
	)
}
