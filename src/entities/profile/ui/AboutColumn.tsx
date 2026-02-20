import Image from "next/image"
import styles from "./AboutColumn.module.css"
import { CompanyHistoryCard } from "./CompanyHistoryCard"

export function AboutColumn() {
	return (
		<div className={styles.profileColumn}>
			<h2 className={styles.sideSectionTitle}>About</h2>
			<figure className={styles.photoFrame}>
				<Image
					className={styles.profilePhoto}
					src="/profile-photo.png"
					alt="unseo profile portrait"
					width={800}
					height={800}
					priority
				/>
			</figure>

			<article className={styles.infoCard}>
				<h2>자기소개</h2>
				<p>
					사용자의 행동 맥락을 중심으로 인터페이스를 설계하고, React/Next.js로
					빠르고 안정적인 웹 제품을 개발합니다.
				</p>
			</article>

			<CompanyHistoryCard />

			<article className={styles.infoCard}>
				<h2>블로그</h2>
				<a
					href="https://velog.io/@qqbck123/posts"
					target="_blank"
					rel="noreferrer noopener"
				>
					velog.io/@qqbck123/posts
				</a>
			</article>
		</div>
	)
}
