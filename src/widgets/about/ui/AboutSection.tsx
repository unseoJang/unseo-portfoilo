import { AboutColumn } from "@/entities/profile";
import styles from "./AboutSection.module.css";
import { HeroIntro } from "./HeroIntro";

export function AboutSection() {
	return (
		<section className={styles.heroPanel} id="section-about">
			<div className={styles.mainFrame}>
				<AboutColumn />
				<div className={styles.contentColumn}>
					<HeroIntro />
				</div>
			</div>
		</section>
	);
}
