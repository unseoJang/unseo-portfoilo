import styles from "./HeroIntro.module.css";

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
			<div className={styles.metrics}>
				<span>Lighthouse 90+</span>
				<span>TTI 35% 개선</span>
				<span>10+ 프로젝트 배포</span>
			</div>
		</>
	);
}
