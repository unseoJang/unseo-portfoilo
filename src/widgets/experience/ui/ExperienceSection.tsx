import panel from "@/shared/ui/panel.module.css";
import { EXPERIENCES } from "../model/data";
import type { Experience, Project } from "../model/types";
import styles from "./ExperienceSection.module.css";

function ProjectCard({ project }: { project: Project }) {
	const Tag = project.url ? "a" : "span";
	const linkProps = project.url
		? { href: project.url, target: "_blank", rel: "noreferrer noopener" }
		: {};

	return (
		<Tag className={styles.projectCard} {...linkProps}>
			<span className={styles.projectPeriod}>{project.period}</span>
			<strong className={styles.projectName}>{project.name}</strong>
			<span className={styles.projectClient}>{project.client}</span>
			<ul className={styles.techList}>
				{project.tech.map((t) => (
					<li key={t}>{t}</li>
				))}
			</ul>
		</Tag>
	);
}

function ExperienceItem({ item }: { item: Experience }) {
	return (
		<article className={styles.experienceItem}>
			<div className={styles.experienceHeader}>
				<p className={styles.experiencePeriod}>{item.period}</p>
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
				<p className={styles.experienceRole}>{item.role}</p>
			</div>

			<ul className={styles.taskList}>
				{item.tasks.map((task) => (
					<li key={task}>{task}</li>
				))}
			</ul>

			{item.projects && item.projects.length > 0 && (
				<>
					<p className={styles.projectListLabel}>주요 프로젝트</p>
					<div className={styles.projectGrid}>
						{item.projects.map((project) => (
							<ProjectCard key={project.name} project={project} />
						))}
					</div>
				</>
			)}
		</article>
	);
}

export function ExperienceSection() {
	return (
		<section className={panel.heroPanel} id="section-experience">
			<h2 className={styles.sectionTitle}>Experience</h2>
			<p className={styles.subtitle}>
				사용자의 행동 맥락을 중심으로 인터페이스를 설계하고, 어떠한 프레임워크를
				사용하든 빠르고 안정적인 웹 제품을 개발합니다.
			</p>
			{EXPERIENCES.map((item) => (
				<ExperienceItem key={item.company + item.period} item={item} />
			))}
		</section>
	);
}
