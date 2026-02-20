import styles from "./LeftDock.module.css";

export function LeftDock() {
  return (
    <aside className={styles.leftDock} aria-label="왼쪽 사이드바">
      <div className={styles.leftDockTop}>
        <p className={styles.leftDockName}>unseo</p>
        <p className={styles.leftDockRole}>Frontend Engineer</p>
        <nav className={styles.leftDockNav}>
          <a href="#section-about">About</a>
          <a href="#section-experience">Experience</a>
          <a href="#section-projects">Projects</a>
          <a href="#section-contact">Contact</a>
        </nav>
      </div>
      <p className={styles.leftDockCopyright}>
        copyright © 2026 UNSEO JANG.
        <br />
        All rights reserved.
      </p>
    </aside>
  );
}
