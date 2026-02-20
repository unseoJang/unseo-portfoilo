import { AboutColumn } from "@/entities/profile";
import { ContactSection } from "@/widgets/contact";
import { ExperienceSection } from "@/widgets/experience";
import { ProjectsSection } from "@/widgets/projects";
import styles from "./AboutSection.module.css";
import { HeroIntro } from "./HeroIntro";

export function AboutSection() {
	return (
		<section className={styles.heroPanel} id="section-about">
			<div className={styles.mainFrame}>
				<AboutColumn />
				<div className={styles.contentColumn}>
					<HeroIntro />
					<ExperienceSection />
					<ProjectsSection />
					<ContactSection />
				</div>
			</div>
		</section>
	);
}
