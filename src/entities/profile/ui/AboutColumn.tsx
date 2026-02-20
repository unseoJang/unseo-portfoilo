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
			<h2>개발 원칙</h2>
			<ul className={styles.principleList}>
				<li>사용자 행동 맥락을 먼저 이해하고 설계한다</li>
				<li>성능은 기능만큼 중요하다 — TTI, LCP를 항상 의식한다</li>
				<li>컴포넌트는 하나의 책임만 가진다</li>
				<li>상태는 최대한 좁은 범위에서 관리한다</li>
				<li>접근성(a11y)을 처음부터 고려한다</li>
				<li>지금 동작하는 코드보다 나중에 읽기 쉬운 코드를 쓴다</li>
			</ul>
		</article>

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
