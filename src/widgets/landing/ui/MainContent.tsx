import styles from "./MainContent.module.css";

export function MainContent() {
  return (
    <section className={styles.contentColumn}>
      <p className={styles.eyebrow}>Frontend Engineer · Jang Unseo</p>
      <h1 className={styles.title}>
        장운서
        <span className={styles.accent}>Portfolio</span>
      </h1>
      <p className={styles.description}>
        사용자 문제를 빠르게 정의하고, 반응형 UI와 성능 최적화를 함께 설계하는
        프론트엔드 개발자입니다.
      </p>

      <section className={styles.metrics}>
        <span>Lighthouse 90+</span>
        <span>TTI 35% 개선</span>
        <span>10+ 프로젝트 배포</span>
      </section>

      <section
        className={`${styles.experienceSection} ${styles.anchorSection}`}
        id="section-experience"
      >
        <h2>Experience</h2>
        <article className={styles.experienceItem}>
          <p className={styles.experiencePeriod}>2024 - Present</p>
          <h3>Frontend Engineer</h3>
          <p>
            핵심 서비스 UI 고도화, 렌더링 성능 개선, 디자인 시스템 기반 화면
            개발을 진행했습니다.
          </p>
        </article>
        <article className={styles.experienceItem}>
          <p className={styles.experiencePeriod}>2022 - 2024</p>
          <h3>Web Developer</h3>
          <p>
            반응형 웹 구축 및 유지보수, 사용자 플로우 개선, 운영 효율화를 위한
            프론트엔드 기능을 담당했습니다.
          </p>
        </article>
      </section>

      <section
        className={`${styles.projectsSection} ${styles.anchorSection}`}
        id="section-projects"
      >
        <h2>Selected Projects</h2>
        <div className={styles.projectGrid}>
          <article className={styles.projectCard}>
            <h3>Project One</h3>
            <p>문제 해결 과정과 성과를 보여주는 대표 프로젝트.</p>
          </article>
          <article className={styles.projectCard}>
            <h3>Project Two</h3>
            <p>사용자 경험 개선과 성능 최적화를 함께 진행한 프로젝트.</p>
          </article>
        </div>
      </section>

      <section
        className={`${styles.contactSection} ${styles.anchorSection}`}
        id="section-contact"
      >
        <h2>Contact</h2>
        <p>
          협업 제안이나 포지션 문의는 메일로 편하게 연락 주세요. 이력서도 바로
          확인할 수 있습니다.
        </p>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://docs.google.com/document/d/1P7HRs4dxbaQPpmKism3ej0ivM5POrLqzdWFvU3NS6u0/edit?tab=t.0"
            download
          >
            이력서 확인하기
          </a>
          <a
            className={styles.secondary}
            href="mailto:contact@example.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            메일로 연락하기
          </a>
        </div>
      </section>

      <p className={styles.scrollHint}>
        아래로 스크롤해 프로젝트와 상세 경험을 확인하세요
      </p>
    </section>
  );
}
