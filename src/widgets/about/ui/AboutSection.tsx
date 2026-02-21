import { AboutColumn } from "@/entities/profile";
import styles from "./AboutSection.module.css";
import { ContactSection, ExperienceSection, HeroIntro, ProjectsSection } from ".";

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
