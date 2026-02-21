import { AboutColumn } from "@/entities/profile";
import panel from "@/shared/ui/panel.module.css";
import styles from "./AboutSection.module.css";
import { ContactSection, Experience, HeroIntro, Projects } from ".";

export function AboutSection() {
	return (
		<section className={panel.heroPanel} id="section-about">
			<div className={styles.mainFrame}>
				<AboutColumn />
				<div className={styles.contentColumn}>
				<HeroIntro />
				<Experience />
				<Projects />
				<ContactSection />
				</div>
			</div>
		</section>
	);
}
