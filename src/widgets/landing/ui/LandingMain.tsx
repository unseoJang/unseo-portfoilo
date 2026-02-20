import { AboutColumn } from "@/entities/profile";
import { LeftDock, QuickLinks } from "@/features/navigation";
import styles from "./LandingMain.module.css";
import { MainContent } from "./MainContent";

export function LandingMain() {
	return (
		<>
			<LeftDock />

			<main className={styles.main}>
				<div className={styles.heroShell}>
					<section className={styles.heroPanel}>
						<div className={styles.mainFrame}>
							<AboutColumn />
							<MainContent />
						</div>
					</section>
					<section
						className={styles.emptySection}
						aria-label="추가 콘텐츠 영역"
					></section>
				</div>
			</main>

			<QuickLinks />
		</>
	)
}
