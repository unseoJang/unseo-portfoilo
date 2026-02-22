import { LeftDock, QuickLinks } from "@/features/navigation"
import { AboutSection } from "@/widgets/about"
import { ExperienceSection } from "@/widgets/experience"
import { ProjectsSection } from "@/widgets/projects"
import { RetrospectiveSection } from "@/widgets/retrospective"
import styles from "./LandingMain.module.css"
import { ActivitySection } from "@/widgets/activity/ui/ActivitySection"

export function LandingMain() {
	return (
		<>
			<LeftDock />

			<main className={styles.main}>
				<div className={styles.heroShell}>
					<AboutSection />
					<ExperienceSection />
					<ProjectsSection />
					<ActivitySection />
					{/* <RetrospectiveSection /> */}
				</div>
			</main>

			<QuickLinks />
		</>
	)
}
