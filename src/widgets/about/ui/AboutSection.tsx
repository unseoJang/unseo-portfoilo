import { AboutColumn } from "@/entities/profile";
import styles from "./AboutSection.module.css";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroIntro } from "./HeroIntro";
import { ProjectsSection } from "./ProjectsSection";

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
