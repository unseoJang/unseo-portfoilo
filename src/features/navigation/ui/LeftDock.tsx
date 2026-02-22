"use client"

import styles from "./LeftDock.module.css"
import { ThemeToggle } from "."

const NAV_ITEMS = [
	{ label: "About", target: "section-about" },
	{ label: "Experience", target: "section-experience" },
	{ label: "Projects", target: "section-projects" },
	{ label: "Activity", target: "section-activity" },
	// { label: "Retrospective", target: "section-retrospective" },
] as const

function handleScrollTo(id: string) {
	return (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
	}
}

export function LeftDock() {
	return (
		<aside className={styles.leftDock} aria-label="왼쪽 사이드바">
			<div className={styles.leftDockTop}>
				<p className={styles.leftDockName}>unseo</p>
				<p className={styles.leftDockRole}>Frontend Engineer · 4yrs</p>
				<nav className={styles.leftDockNav}>
					{NAV_ITEMS.map(({ label, target }) => (
						<a
							key={target}
							href={`#${target}`}
							onClick={handleScrollTo(target)}
						>
							{label}
						</a>
					))}
				</nav>
				<div className={styles.leftDockActions}>
					<ThemeToggle />
				</div>
			</div>
			<p className={styles.leftDockCopyright}>
				copyright © 2026 UNSEO JANG.
				<br />
				All rights reserved.
			</p>
		</aside>
	)
}
