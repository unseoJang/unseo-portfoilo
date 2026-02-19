"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./LandingMain.module.css";

type LandingMainProps = {
  shouldRevealHero: boolean;
};

const sectionIds = [
  "section-about",
  "section-experience",
  "section-projects",
  "section-contact",
] as const;

export function LandingMain({
  shouldRevealHero,
}: LandingMainProps) {
  const [activeSection, setActiveSection] =
    useState<(typeof sectionIds)[number]>("section-about");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id as (typeof sectionIds)[number]);
        }
      },
      {
        rootMargin: "-18% 0px -52% 0px",
        threshold: [0.2, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <aside className={styles.leftDock} aria-label="왼쪽 사이드바">
        <p className={styles.leftDockName}>unseo</p>
        <p className={styles.leftDockRole}>Frontend Engineer</p>
        <nav className={styles.leftDockNav}>
          <a
            href="#section-about"
            data-active={activeSection === "section-about"}
            onClick={() => setActiveSection("section-about")}
          >
            About
          </a>
          <a
            href="#section-experience"
            data-active={activeSection === "section-experience"}
            onClick={() => setActiveSection("section-experience")}
          >
            Experience
          </a>
          <a
            href="#section-projects"
            data-active={activeSection === "section-projects"}
            onClick={() => setActiveSection("section-projects")}
          >
            Projects
          </a>
          <a
            href="#section-contact"
            data-active={activeSection === "section-contact"}
            onClick={() => setActiveSection("section-contact")}
          >
            Contact
          </a>
        </nav>
      </aside>

      <div
        className={`${styles.heroShell} ${
          shouldRevealHero ? styles.heroShellVisible : ""
        }`}
      >
        <main className={styles.main}>
          <section className={styles.heroPanel}>
            <section className={styles.mainFrame}>
              <aside
                className={`${styles.profileColumn} ${styles.anchorSection}`}
                id="section-about"
              >
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

                <article className={styles.infoCard}>
                  <h2>다녔던 회사</h2>
                  <ul>
                    <li>Company A - Frontend Engineer</li>
                    <li>Company B - Web Developer</li>
                  </ul>
                </article>

                <article className={styles.infoCard}>
                  <h2>블로그</h2>
                  <a
                    href="https://blog.example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    blog.example.com
                  </a>
                </article>
              </aside>

              <section className={styles.contentColumn}>
                <p className={styles.eyebrow}>Frontend Engineer · Jang Unseo</p>
                <h1 className={styles.title}>
                  장운서
                  <span className={styles.accent}>Portfolio</span>
                </h1>
                <p className={styles.description}>
                  사용자 문제를 빠르게 정의하고, 반응형 UI와 성능 최적화를 함께
                  설계하는 프론트엔드 개발자입니다.
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
                    협업 제안이나 포지션 문의는 메일로 편하게 연락 주세요. 이력서도
                    바로 확인할 수 있습니다.
                  </p>
                  <div className={styles.ctas}>
                    <a className={styles.primary} href="/resume.pdf" download>
                      이력서 다운로드
                    </a>
                    <a className={styles.secondary} href="mailto:contact@example.com">
                      메일로 연락하기
                    </a>
                  </div>
                </section>

                <p className={styles.scrollHint}>
                  아래로 스크롤해 프로젝트와 상세 경험을 확인하세요
                </p>
              </section>
            </section>
          </section>
        </main>
        <section className={styles.emptySection} aria-hidden />
      </div>

      <nav className={styles.quickLinks} aria-label="Quick links">
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
        <a
          href="https://blog.example.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Blog
        </a>
        <a
          href="https://github.com/your-id"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
        <a href="/resume.pdf" download>
          Resume
        </a>
      </nav>
    </>
  );
}
