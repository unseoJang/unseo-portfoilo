import panel from "@/shared/ui/panel.module.css"
import typo from "@/shared/ui/typography.module.css"
import { ProjectsCarousel } from "./ProjectsCarousel"
import styles from "./ProjectsSection.module.css"

export function ProjectsSection() {
	return (
		<section className={panel.heroPanel} id="section-projects">
			<h2 className={typo.sectionTitle}>Projects</h2>
			<p className={styles.subtitle}>
				개발을 스터디 하거나 공부했던 프로젝트들, 아니면 직접 설계하고 배포한
				프로젝트들을 소개합니다.
			</p>
			<ProjectsCarousel />
		</section>
	)
}
