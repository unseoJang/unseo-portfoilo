"use client"

import { useState } from "react"
import { useProjectsPager } from "../model/useProjectsPager"
import { ProjectCard } from "./ProjectCard"
import styles from "./ProjectsCarousel.module.css"

export function ProjectsCarousel() {
	const { page, setPage, prev, next, visible, totalPages } = useProjectsPager()
	const [direction, setDirection] = useState<"right" | "left">("right")
	const [animKey, setAnimKey] = useState(0)

	const handlePrev = () => {
		setDirection("left")
		setAnimKey((k) => k + 1)
		prev()
	}

	const handleNext = () => {
		setDirection("right")
		setAnimKey((k) => k + 1)
		next()
	}

	const handleDot = (i: number) => {
		setDirection(i > page ? "right" : "left")
		setAnimKey((k) => k + 1)
		setPage(i)
	}

	return (
		<div className={styles.carousel}>
			<button
				className={styles.navBtn}
				onClick={handlePrev}
				aria-label="이전 프로젝트"
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
				>
					<path
						d="M10 12L6 8l4-4"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			<div className={styles.slideWrapper}>
				<div
					key={animKey}
					className={`${styles.slideCards} ${
						direction === "right" ? styles.fromRight : styles.fromLeft
					}`}
				>
					{visible.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
				<div className={styles.dots}>
					{Array.from({ length: totalPages }).map((_, i) => (
						<button
							key={i}
							className={`${styles.dot} ${i === page ? styles.dotActive : ""}`}
							onClick={() => handleDot(i)}
							aria-label={`${i + 1}페이지로 이동`}
						/>
					))}
				</div>
			</div>

			<button
				className={styles.navBtn}
				onClick={handleNext}
				aria-label="다음 프로젝트"
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
				>
					<path
						d="M6 4l4 4-4 4"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	)
}
