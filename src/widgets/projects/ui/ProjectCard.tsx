import type { PersonalProject } from "../model/types"
import { ProjectCardBody } from "./ProjectCardBody"
import { ProjectCardLinks } from "./ProjectCardLinks"
import { ProjectThumbnail } from "./ProjectThumbnail"
import styles from "./ProjectCard.module.css"

export function ProjectCard({ project }: { project: PersonalProject }) {
	return (
		<article className={styles.card}>
			<ProjectThumbnail imageUrl={project.imageUrl} />
			<div className={styles.cardRight}>
				<ProjectCardBody project={project} />
				<ProjectCardLinks url={project.url} demoUrls={project.demoUrls} />
			</div>
		</article>
	)
}
