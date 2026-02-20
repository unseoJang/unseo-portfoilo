import { LeftDock, QuickLinks } from "@/features/navigation"
import { AboutSection } from "@/widgets/about"
import styles from "./LandingMain.module.css"

export function LandingMain() {
	return (
		<>
			<LeftDock />

			<main className={styles.main}>
				<div className={styles.heroShell}>
					<AboutSection />
					<section
						className={styles.emptySection}
						aria-label="추가 콘텐츠 영역"
						id="section-experience"
					></section>
				</div>
			</main>

			<QuickLinks />
		</>
	)
}
