import Image from "next/image"
import panel from "@/shared/ui/panel.module.css"
import typo from "@/shared/ui/typography.module.css"
import styles from "./ActivitySection.module.css"

const ACTIVITIES = [
	{
		period: "2019 — 현재",
		title: "Velog 개발 블로그 운영",
		url: "https://velog.io/@qqbck123/posts",
		highlights: [
			"학습 과정, 프로젝트 회고, 트러블슈팅 등 개발 경험을 글로 기록",
		],
	},
	{
		period: "2026.01 — 2026.02",
		title: "오픈소스 코드기여모임 10기",
		url: "https://velog.io/@qqbck123/%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%EA%B8%B0%EC%97%AC%EB%AA%A8%EC%9E%84-10%EA%B8%B0-%EC%B0%B8%EC%97%AC-%ED%9B%84%EA%B8%B0",
		highlights: [],
	},
	{
		period: "2025.08 — 2025.10",
		title: "항해 99 항해플러스 6기 프론트엔드 학습메이트",
		url: "https://velog.io/@qqbck123/%EB%B0%B0%EC%9B%80%EC%9D%98-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EB%A7%8C%EB%93%A4%EB%8B%A4-%ED%95%AD%ED%95%B46%EA%B8%B0-%ED%95%99%EC%8A%B5%EB%A9%94%EC%9D%B4%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
		highlights: [
			"팀 리더 역할 수행",
			"학습 진행 과정에서 질문/이슈를 정리하고 과제 리뷰를 지원하여 학습 지속을 돕는 역할 수행",
			"개인 경험을 기반으로 피드백을 제공하며 커뮤니케이션/코칭 역량을 강화",
		],
	},
	{
		period: "2025.05 — 2025.07",
		title: "항해 99 항해플러스 5기 프론트엔드 수강",
		url: "https://velog.io/@qqbck123/%ED%95%AD%ED%95%B4%ED%94%8C%EB%9F%AC%EC%8A%A4-5%EA%B8%B0-%EC%88%98%EB%A3%8C-%EB%B0%8F-%EC%A2%85%EB%A3%8C",
		highlights: [
			"React 학습을 통해 프레임워크 동작 원리 이해를 확장",
			"프론트엔드 개발부터 배포까지 전체 흐름을 경험하며 개발 리듬을 정립",
			"Vue/React 환경의 공통 패턴과 차이를 비교 학습하여 프레임워크 전환/혼재 상황 대응력을 강화",
			"마무리 발표 진행 및 성실상 · 블랙뱃지 수상",
		],
		imageUrls: ["/항해플러스_성실상.jpeg", "/항해 플러스 수료 인증서.png"],
		fileLinks: [
			{
				label: "수료 인증서 (PDF)",
				href: "/항해 플러스 프론트엔드 코스 5기 수료 인증서.pdf",
			},
		],
	},
	{
		period: "2022.04.28",
		title: "닥프렌즈 사내 발표 — Nuxt 구버전에서 Vuex + TypeScript 적용하기",
		imageUrl: "/닥프렌즈_발표.JPG",
		highlights: [
			"Nuxt 2 환경에서 Vuex 스토어에 TypeScript를 도입하는 방법 공유",
		],
	},
	{
		period: "2021.07 — 2021.10",
		title: "wecode 24기 프론트엔드 수강",
		url: [
			"https://velog.io/@qqbck123/%EA%B3%A0%EA%B8%B0%EA%B0%81-1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%95%EB%A6%AC",
			"https://velog.io/@qqbck123/22-2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%95%EB%A6%AC%EC%B2%AB%EB%B2%88%EC%A7%B8",
		],
		highlights: [
			"React 기초 학습",
			"개발자의 개발 리듬 확보",
			"프론트엔드 개발을 위한 초기 발판 마련",
			"실제 회사에 들어가 인턴 체험 경험",
		],
	},
] as const

export function ActivitySection() {
	return (
		<section className={panel.heroPanel} id="section-activity">
			<h2 className={typo.sectionTitle}>Activity</h2>
			<p className={styles.subtitle}>
				개인적으로 활동했던 스터디, 대회, 커뮤니티 참여 경험들을 소개합니다.
			</p>
			<ul className={styles.list}>
				{ACTIVITIES.map((activity) => {
					const urls =
						"url" in activity
							? Array.isArray(activity.url)
								? activity.url
								: []
							: []
					const singleUrl =
						"url" in activity && !Array.isArray(activity.url)
							? (activity.url as string)
							: null

					return (
						<li key={activity.title} className={styles.item}>
							<span className={styles.period}>{activity.period}</span>
							<div className={styles.body}>
								<p className={styles.title}>
									{singleUrl ? (
										<a
											className={styles.titleLink}
											href={singleUrl}
											target="_blank"
											rel="noreferrer noopener"
										>
											{activity.title} ↗
										</a>
									) : (
										activity.title
									)}
								</p>
								{activity.highlights.length > 0 && (
									<ul className={styles.highlights}>
										{activity.highlights.map((h) => (
											<li key={h}>{h}</li>
										))}
									</ul>
								)}
								{"imageUrl" in activity && activity.imageUrl && (
									<div className={styles.imageWrap}>
										<Image
											className={styles.image}
											src={activity.imageUrl}
											alt={activity.title}
											fill
											sizes="(max-width: 768px) 100vw, 400px"
											style={{ objectFit: "cover" }}
										/>
									</div>
								)}
								{"imageUrls" in activity &&
									(activity.imageUrls as readonly string[]).length > 0 && (
										<div className={styles.imageGrid}>
											{(activity.imageUrls as readonly string[]).map((src) => (
												<div key={src} className={styles.imageWrap}>
													<Image
														className={styles.image}
														src={src}
														alt={activity.title}
														fill
														sizes="(max-width: 768px) 50vw, 280px"
														style={{ objectFit: "contain" }}
													/>
												</div>
											))}
										</div>
									)}
								{"fileLinks" in activity &&
									(
										activity.fileLinks as readonly {
											label: string
											href: string
										}[]
									).length > 0 && (
										<div className={styles.links}>
											{(
												activity.fileLinks as readonly {
													label: string
													href: string
												}[]
											).map(({ label, href }) => (
												<a
													key={href}
													className={styles.link}
													href={href}
													target="_blank"
													rel="noreferrer noopener"
												>
													↗ {label}
												</a>
											))}
										</div>
									)}
								{urls.length > 0 && (
									<div className={styles.links}>
										{urls.map((href, i) => (
											<a
												key={href}
												className={styles.link}
												href={href}
												target="_blank"
												rel="noreferrer noopener"
											>
												↗ 프로젝트 {i + 1}
											</a>
										))}
									</div>
								)}
							</div>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
