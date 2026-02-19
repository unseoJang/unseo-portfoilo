"use client";

import { useEffect, useState } from "react";
import loadingStyles from "./loading.module.css";
import styles from "./page.module.css";
import { LandingMain } from "@/widgets/landing/ui/LandingMain";

export default function Home() {
  const [showInitialLoading, setShowInitialLoading] = useState(true);
  const [isLoadingExiting, setIsLoadingExiting] = useState(false);

  useEffect(() => {
    const loadingDurationMs = 5000;
    const exitDurationMs = 700;

    const startExitTimeoutId = window.setTimeout(() => {
      setIsLoadingExiting(true);
    }, loadingDurationMs);

    const hideTimeoutId = window.setTimeout(() => {
      setShowInitialLoading(false);
      setIsLoadingExiting(false);
    }, loadingDurationMs + exitDurationMs);

    return () => {
      window.clearTimeout(startExitTimeoutId);
      window.clearTimeout(hideTimeoutId);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (showInitialLoading) {
      root.style.overflow = "hidden";
      body.style.overflow = "hidden";
      return;
    }

    root.style.overflow = "";
    body.style.overflow = "";

    return () => {
      root.style.overflow = "";
      body.style.overflow = "";
    };
  }, [showInitialLoading]);

  const shouldRevealHero = !showInitialLoading || isLoadingExiting;

  return (
    <>
      <div className={styles.page}>
        <div className={styles.glow} aria-hidden />
        <div className={styles.glowSecondary} aria-hidden />
        <LandingMain shouldRevealHero={shouldRevealHero} />
      </div>

      {showInitialLoading && (
        <div
          className={`${loadingStyles.loadingScreen} ${
            isLoadingExiting ? loadingStyles.loadingExit : ""
          }`}
          role="status"
          aria-live="polite"
        >
          <div className={loadingStyles.glow} aria-hidden />
          <div className={loadingStyles.content}>
            <p className={loadingStyles.name}>unseo</p>
            <h1 className={loadingStyles.title}>Portfolio</h1>
            <p className={`${loadingStyles.caption} ${loadingStyles.korean}`}>
              포트폴리오를 준비하고 있습니다...
            </p>
          </div>
        </div>
      )}
    </>
  );
}
