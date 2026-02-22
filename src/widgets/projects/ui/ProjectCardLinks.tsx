import styles from "./ProjectCardLinks.module.css"

interface ProjectCardLinksProps {
	url?: string
	demoUrls?: string[]
}

export function ProjectCardLinks({ url, demoUrls }: ProjectCardLinksProps) {
	const hasLinks = url || (demoUrls && demoUrls.length > 0)
	if (!hasLinks) return null

	return (
		<div className={styles.links}>
			{demoUrls?.map((href, i) => (
				<a
					key={href}
					className={styles.linkDemo}
					href={href}
					target="_blank"
					rel="noreferrer noopener"
				>
					▶ 데모 {demoUrls.length > 1 ? i + 1 : ""}
				</a>
			))}
			{url && (
				<a
					className={styles.linkSource}
					href={url}
					target="_blank"
					rel="noreferrer noopener"
				>
					↗ 바로가기
				</a>
			)}
		</div>
	)
}
