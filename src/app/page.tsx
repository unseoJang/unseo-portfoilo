import styles from "./page.module.css";
import { LoadingGate } from "./LoadingGate";
import { LandingMain } from "@/widgets/landing/ui/LandingMain";

export default function Home() {
  return (
    <LoadingGate>
      <div className={styles.page}>
        <div className={styles.glow} aria-hidden />
        <div className={styles.glowSecondary} aria-hidden />
        <LandingMain />
      </div>
    </LoadingGate>
  );
}
