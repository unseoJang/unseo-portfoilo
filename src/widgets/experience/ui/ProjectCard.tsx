import type { Project } from "../model/types";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
	const Tag = project.url ? "a" : "span";
	const linkProps = project.url
		? { href: project.url, target: "_blank", rel: "noreferrer noopener" }
		: {};

	return (
		<Tag className={styles.projectCard} {...linkProps}>
			<div className={styles.projectCardHeader}>
				{project.logo && (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={project.logo}
						alt={`${project.name} logo`}
						className={styles.projectLogo}
						onError={(e) => {
							e.currentTarget.style.display = "none";
						}}
					/>
				)}
				<div>
					<span className={styles.projectPeriod}>{project.period}</span>
					<strong className={styles.projectName}>{project.name}</strong>
					<span className={styles.projectClient}>{project.client}</span>
				</div>
			</div>

			{project.description && (
				<p className={styles.projectDescription}>{project.description}</p>
			)}

			{project.highlights && project.highlights.length > 0 && (
				<ul className={styles.projectHighlights}>
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
		</Tag>
	);
}
