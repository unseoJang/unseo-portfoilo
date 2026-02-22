import { GitHubIcon, LinkedInIcon } from "@/shared/ui/icons"
import styles from "./QuickLinks.module.css"

export function QuickLinks() {
	return (
		<nav className={styles.quickLinks} aria-label="Quick links">
			<a
				href="https://www.linkedin.com/in/%EC%9A%B4%EC%84%9C-%EC%9E%A5-36070110a/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<LinkedInIcon className={styles.icon} />
				LinkedIn
			</a>
			<a
				href="https://velog.io/@qqbck123/posts"
				target="_blank"
				rel="noreferrer noopener"
			>
				<span className={styles.icon} aria-hidden>
					✍️
				</span>
				Blog
			</a>
			<a
				href="https://github.com/unseoJang"
				target="_blank"
				rel="noreferrer noopener"
			>
				<GitHubIcon className={styles.icon} />
				GitHub
			</a>
			<a
				href="https://docs.google.com/document/d/1P7HRs4dxbaQPpmKism3ej0ivM5POrLqzdWFvU3NS6u0/edit?usp=sharing"
				target="_blank"
				rel="noreferrer noopener"
			>
				<span className={styles.icon} aria-hidden>
					📄
				</span>
				Resume
			</a>
		</nav>
	)
}
