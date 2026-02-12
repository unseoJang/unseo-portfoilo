import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.glowSecondary} aria-hidden />
      <main className={styles.hero}>
        <p className={styles.eyebrow}>Frontend Engineer Portfolio</p>
        <h1>
          Build fast,
          <span className={styles.accent}> delightful web products</span>
        </h1>
        <p className={styles.description}>
          I design and ship responsive experiences with React and Next.js,
          focusing on clean UI, measurable performance, and user-centered
          iteration.
        </p>
        <div className={styles.metrics}>
          <span>90+ Lighthouse score</span>
          <span>TTI improved by 35%</span>
          <span>10+ shipped projects</span>
        </div>
        <div className={styles.ctas}>
          <a className={styles.primary} href="/resume.pdf" download>
            Download Resume
          </a>
          <a
            className={styles.secondary}
            href="mailto:contact@example.com"
          >
            Send Email
          </a>
        </div>
        <p className={styles.scrollHint}>Scroll to explore selected projects</p>
      </main>
    </div>
  );
}
