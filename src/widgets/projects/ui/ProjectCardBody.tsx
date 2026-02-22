import type { PersonalProject } from "../model/types"
import styles from "./ProjectCardBody.module.css"

interface ProjectCardBodyProps {
	project: PersonalProject
}

export function ProjectCardBody({ project }: ProjectCardBodyProps) {
	return (
		<div className={styles.cardBody}>
			<div className={styles.meta}>
				<span className={styles.period}>{project.period}</span>
			</div>

			<h3 className={styles.name}>{project.name}</h3>
			<p className={styles.description}>{project.description}</p>

			{project.highlights && project.highlights.length > 0 && (
				<ul className={styles.highlights}>
					{project.highlights.map((h) => (
						<li key={h}>{h}</li>
					))}
				</ul>
			)}

			<ul className={styles.techList}>
				{project.tech.map((t) => (
					<li key={t}>{t}</li>
				))}
			</ul>
		</div>
	)
}
