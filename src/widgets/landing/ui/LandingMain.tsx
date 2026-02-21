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
					{/* <ExperienceSection /> */}
				</div>
			</main>

			<QuickLinks />
		</>
	)
}
