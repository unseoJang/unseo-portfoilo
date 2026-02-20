import { LeftDock, QuickLinks } from "@/features/navigation";
import { AboutSection } from "@/widgets/about";
import { ContactSection } from "@/widgets/contact";
import { ExperienceSection } from "@/widgets/experience";
import { ProjectsSection } from "@/widgets/projects";
import styles from "./LandingMain.module.css";

export function LandingMain() {
	return (
		<>
			<LeftDock />

			<main className={styles.main}>
				<div className={styles.heroShell}>
					<AboutSection />
					<ExperienceSection />
					<ProjectsSection />
					<ContactSection />
					<section
						className={styles.emptySection}
						aria-label="추가 콘텐츠 영역"
					></section>
				</div>
			</main>

			<QuickLinks />
		</>
	);
}
