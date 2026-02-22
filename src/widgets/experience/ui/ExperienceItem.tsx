import { useExperienceStore } from "../model/store"
import type { Experience } from "../model/types"
import { ProjectCard } from "./ProjectCard"
import styles from "./ExperienceItem.module.css"

export function ExperienceItem({ item }: { item: Experience }) {
	const id = item.company + item.period
	const { expandedId, toggle } = useExperienceStore()
	const isExpanded = expandedId === id
	const hasProjects = item.projects && item.projects.length > 0

	return (
		<article className={styles.experienceItem}>
			<div className={styles.experienceHeader}>
				<div className={styles.experienceTop}>
					<h3>
						{item.companyUrl ? (
							<a
								className={styles.companyLink}
								href={item.companyUrl}
								target="_blank"
								rel="noreferrer noopener"
							>
								{item.company}
							</a>
						) : (
							item.company
						)}
					</h3>
					<p className={styles.experiencePeriod}>{item.period}</p>
				</div>
				<p className={styles.experienceRole}>{item.role}</p>
			</div>

			<ul className={styles.taskList}>
				{item.tasks.map((task) => (
					<li key={task}>{task}</li>
				))}
			</ul>

			{hasProjects && (
				<>
					<button
						className={`${styles.projectToggle} ${isExpanded ? styles.projectToggleOpen : ""}`}
						onClick={() => toggle(id)}
						aria-expanded={isExpanded}
					>
						주요 프로젝트 {item.projects!.length}건
						<span className={styles.toggleIcon} aria-hidden>
							▾
						</span>
					</button>

					{isExpanded && (
						<div className={styles.projectGrid}>
							{item.projects!.map((project) => (
								<ProjectCard key={project.name} project={project} />
							))}
						</div>
					)}
				</>
			)}
		</article>
	)
}
