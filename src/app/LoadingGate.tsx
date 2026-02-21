"use client";

import { useEffect, useState } from "react";
import loadingStyles from "./loading.module.css";

type LoadingGateProps = {
  children: React.ReactNode;
};

export function LoadingGate({ children }: LoadingGateProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const minimumShowMs = 3000;
    const exitDurationMs = 700;

    const exitStart = window.setTimeout(() => {
      setIsExiting(true);
    }, minimumShowMs);

    const hide = window.setTimeout(() => {
      setIsHidden(true);
    }, minimumShowMs + exitDurationMs);

    return () => {
      window.clearTimeout(exitStart);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <>
      {children}
      {!isHidden && (
        <div
          className={`${loadingStyles.loadingScreen} ${
            isExiting ? loadingStyles.loadingExit : ""
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
