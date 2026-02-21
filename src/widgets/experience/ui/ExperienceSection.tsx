"use client";

import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/shared/api/endpoints";
import panel from "@/shared/ui/panel.module.css";
import typo from "@/shared/ui/typography.module.css";
import { experienceKeys } from "../model/queryKeys";
import { useExperienceStore } from "../model/store";
import type { Experience, Project } from "../model/types";
import styles from "./ExperienceSection.module.css";

async function fetchExperience(): Promise<Experience[]> {
	const res = await fetch(API_ENDPOINTS.experience);
	if (!res.ok) throw new Error("Failed to fetch experience");
	return res.json();
}

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
	const id = item.company + item.period;
	const { expandedId, toggle } = useExperienceStore();
	const isExpanded = expandedId === id;
	const hasProjects = item.projects && item.projects.length > 0;

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

			{hasProjects && (
				<>
					<button
						className={`${styles.projectToggle} ${isExpanded ? styles.projectToggleOpen : ""}`}
						onClick={() => toggle(id)}
						aria-expanded={isExpanded}
					>
						주요 프로젝트 {item.projects!.length}건
						<span className={styles.toggleIcon} aria-hidden>▾</span>
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
	);
}

function ExperienceSkeleton() {
	return (
		<div className={styles.skeleton}>
			<div className={`${styles.skeletonLine} ${styles.skeletonTitle}`} />
			<div className={`${styles.skeletonLine} ${styles.skeletonSub}`} />
			<div className={styles.skeletonCard} />
			<div className={styles.skeletonCard} />
		</div>
	);
}

export function ExperienceSection() {
	const { data: experiences, isLoading, isError } = useQuery({
		queryKey: experienceKeys.list(),
		queryFn: fetchExperience,
	});

	return (
		<section className={panel.heroPanel} id="section-experience">
			<h2 className={typo.sectionTitle}>Experience</h2>
			<p className={styles.subtitle}>
				사용자의 행동 맥락을 중심으로 인터페이스를 설계하고, 어떠한 프레임워크를
				사용하든 빠르고 안정적인 웹 제품을 개발합니다.
			</p>

			{isLoading && <ExperienceSkeleton />}
			{isError && (
				<p className={styles.errorMsg}>데이터를 불러오지 못했습니다.</p>
			)}
			{experiences?.map((item) => (
				<ExperienceItem key={item.company + item.period} item={item} />
			))}
		</section>
	);
}
