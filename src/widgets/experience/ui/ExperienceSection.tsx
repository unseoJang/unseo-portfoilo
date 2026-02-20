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
			<article className={styles.experienceItem}>
				<p className={styles.experiencePeriod}>2018 - 2021</p>
				<h3>Web Developer</h3>
				<p>
					반응형 웹 구축 및 유지보수, 사용자 플로우 개선, 운영 효율화를 위한
					프론트엔드 기능을 담당했습니다.
				</p>
			</article>
		</section>
	)
}
