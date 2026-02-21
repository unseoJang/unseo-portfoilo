import { LeftDock, QuickLinks } from "@/features/navigation"
import { AboutSection } from "@/widgets/about"
import { ExperienceSection } from "@/widgets/experience/ui/ExperienceSection"
import styles from "./LandingMain.module.css"

export function LandingMain() {
	return (
		<>
			<LeftDock />

			<main className={styles.main}>
				<div className={styles.heroShell}>
					<AboutSection />
					<ExperienceSection />
				</div>
			</main>

			<QuickLinks />
		</>
	)
}
