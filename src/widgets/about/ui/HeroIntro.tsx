import { Fragment } from "react"
import styles from "./HeroIntro.module.css"

const CAREER = [
	{
		company: "피터패트 · 이비즈빌",
		period: "2018 — 2021",
		role: "Web Developer",
	},
	{
		company: "닥프렌즈 · 인사이트플러스",
		period: "2021 — 2025",
		role: "Frontend Developer",
	},
] as const

export function HeroIntro() {
	return (
		<>
			<p className={styles.eyebrow}>프론트엔드 엔지니어 4년차 · Jang Unseo</p>
			<h1 className={styles.title}>
				장운서
				<span className={styles.accent}>Portfolio</span>
			</h1>
			<p className={styles.description}>
				사용자 문제를 빠르게 정의하고, 반응형 UI와 성능 최적화를 함께 설계하는
				프론트엔드 개발자입니다.
			</p>
			<div className={styles.careerFlow}>
				{CAREER.map((item, i) => (
					<Fragment key={item.company}>
						{i > 0 && (
							<span className={styles.careerArrow} aria-hidden="true">
								›
							</span>
						)}
						<div className={styles.careerItem}>
							<span className={styles.careerCompany}>{item.company}</span>
							<span className={styles.careerMeta}>
								{item.period} · {item.role}
							</span>
						</div>
					</Fragment>
				))}
			</div>
			<a
				className={styles.deepDiveLink}
				href="https://github.com/unseoJang/frontend-deep-dive"
				target="_blank"
				rel="noreferrer noopener"
			>
				📚 Frontend Deep Dive — 혼자 파고든 프론트엔드 학습 저장소 ↗
			</a>
			<div className={styles.metrics}>
				<span>Lighthouse 90+</span>
				<span>TTI 35% 개선</span>
				<span>10+ 프로젝트 배포</span>
			</div>
		</>
	)
}
