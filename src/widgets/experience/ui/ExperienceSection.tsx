import panel from "@/shared/ui/panel.module.css"
import styles from "./ExperienceSection.module.css"

export function ExperienceSection() {
	return (
		<section className={panel.heroPanel} id="section-experience">
			<h2>Experience</h2>
			<p className={styles.subtitle}>
				사용자의 행동 맥락을 중심으로 인터페이스를 설계하고, 어떠한 프레임워크를
				사용하든 빠르고 안정적인 웹 제품을 개발합니다.
			</p>
			<article className={styles.experienceItem}>
				<p className={styles.experiencePeriod}>2021 - Present</p>
				<h3>Frontend Engineer</h3>
				<p>
					핵심 서비스 UI 고도화, 렌더링 성능 개선, 디자인 시스템 기반 화면
					개발을 진행했습니다.
				</p>
			</article>
			<article className={styles.experienceItem}>
				<div className={styles.experienceHeader}>
					<p className={styles.experiencePeriod}>2018.05 — 2021.05</p>
					<h3>
						<a className={styles.companyLink} href="http://www.pitapat.net/" target="_blank" rel="noreferrer noopener">
							피터패트 / 이비즈빌
						</a>
					</h3>
					<p className={styles.experienceRole}>대리 · Web Developer</p>
				</div>
				<ul className={styles.taskList}>
					<li>관리 사이트의 웹접근성, 웹표준과 웹 호환성 확인 및 관리</li>
					<li>다수의 사이트 유지보수 및 관리, 백엔드 개발자와의 협업</li>
					<li>여러 업체의 이벤트 페이지 제작 및 대기업 상주·파견 업무 진행</li>
				</ul>

				<p className={styles.projectListLabel}>주요 프로젝트</p>
				<div className={styles.projectGrid}>
					<a className={styles.projectCard} href="https://www.winix.com/kr/order/product.html?p_code=3577299288" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2018.07 — 2018.10</span>
						<strong className={styles.projectName}>위닉스 제품 PD 제작</strong>
						<span className={styles.projectClient}>위닉스 · 코너크리에이티브</span>
						<ul className={styles.techList}><li>HTML/CSS</li><li>JavaScript</li><li>jQuery</li></ul>
					</a>
					<a className={styles.projectCard} href="http://www.lghausys.co.kr/zin/index.jsp" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2018.06 — 2019.04</span>
						<strong className={styles.projectName}>LG Z:IN / Hausys Global 운영</strong>
						<span className={styles.projectClient}>콜레오 · LG Z:IN</span>
						<ul className={styles.techList}><li>HTML/CSS</li><li>jQuery</li><li>Ajax</li></ul>
					</a>
					<a className={styles.projectCard} href="http://www.lghausys.co.kr/zin/index.jsp" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2018.06 — 2019.04</span>
						<strong className={styles.projectName}>LG Z:IN · 하우시스 · Z:IN mall GNB 통합</strong>
						<span className={styles.projectClient}>콜레오 · LG Z:IN</span>
						<ul className={styles.techList}><li>HTML/CSS</li><li>크로스브라우징</li></ul>
					</a>
					<span className={styles.projectCard}>
						<span className={styles.projectPeriod}>2018.10 — 2020.03</span>
						<strong className={styles.projectName}>신한 FAN 이벤트 페이지</strong>
						<span className={styles.projectClient}>신한 · 자이언트블랙</span>
						<ul className={styles.techList}><li>JavaScript</li><li>Ajax</li><li>하이브리드 웹</li></ul>
					</span>
					<a className={styles.projectCard} href="https://www.kabrita.kr/" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2019.04 — 2020.07</span>
						<strong className={styles.projectName}>베비언스 카브리타 이벤트 페이지</strong>
						<span className={styles.projectClient}>어쿠스틱에이</span>
						<ul className={styles.techList}><li>Vue.js</li><li>HTML/CSS</li></ul>
					</a>
					<a className={styles.projectCard} href="https://blog.lgchem.com/" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2019.06 — 2021.05</span>
						<strong className={styles.projectName}>LG 화학 블로그 케미토피아</strong>
						<span className={styles.projectClient}>콜레오 · LG화학</span>
						<ul className={styles.techList}><li>Express</li><li>jQuery</li></ul>
					</a>
					<a className={styles.projectCard} href="http://smcdo.mywebplus.co.kr/" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2020.06 — 2021.03</span>
						<strong className={styles.projectName}>삼성바이오로직스 이벤트 참여 페이지</strong>
						<span className={styles.projectClient}>삼성바이오로직스</span>
						<ul className={styles.techList}><li>turn.js</li><li>Ajax</li><li>JAVA</li></ul>
					</a>
					<a className={styles.projectCard} href="https://www.haevichi.com/" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2020.03 — 2020.08</span>
						<strong className={styles.projectName}>Haevichi 호텔 유지보수</strong>
						<span className={styles.projectClient}>해비치</span>
						<ul className={styles.techList}><li>Git cherry-pick</li><li>Ajax</li><li>JAVA</li></ul>
					</a>
					<a className={styles.projectCard} href="https://www.samsung.com/sec/mobile/why-galaxy/" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2020.10 — 2020.11</span>
						<strong className={styles.projectName}>삼성 갤럭시 why 국가베리 상주</strong>
						<span className={styles.projectClient}>제일펑타이</span>
						<ul className={styles.techList}><li>HTML/CSS</li><li>JavaScript</li></ul>
					</a>
					<a className={styles.projectCard} href="http://www.giantblack.co.kr/" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2020.03 — 2020.06</span>
						<strong className={styles.projectName}>자이언트블랙 포트폴리오</strong>
						<span className={styles.projectClient}>자이언트블랙</span>
						<ul className={styles.techList}><li>Fullpage.js</li><li>반응형</li></ul>
					</a>
					<a className={styles.projectCard} href="https://www.sejongtelecom.net/" target="_blank" rel="noreferrer noopener">
						<span className={styles.projectPeriod}>2021.03 — 2021.05</span>
						<strong className={styles.projectName}>세종텔레콤 사이트 리뉴얼</strong>
						<span className={styles.projectClient}>세종텔레콤 · 자이언트블랙</span>
						<ul className={styles.techList}><li>반응형</li><li>HTML/CSS</li></ul>
					</a>
					<span className={styles.projectCard}>
						<span className={styles.projectPeriod}>2021.01 — 2021.05</span>
						<strong className={styles.projectName}>GS자이 어드민 페이지 상주</strong>
						<span className={styles.projectClient}>GS자이</span>
						<ul className={styles.techList}><li>Bootstrap</li><li>Zeplin</li><li>jQuery</li></ul>
					</span>
				</div>
			</article>
		</section>
	)
}
