import panel from "@/shared/ui/panel.module.css";
import typo from "@/shared/ui/typography.module.css";
import styles from "./RetrospectiveSection.module.css";

export function RetrospectiveSection() {
	return (
		<section className={panel.heroPanel} id="section-retrospective">
			<h2 className={typo.sectionTitle}>Retrospective</h2>
			<p className={styles.subtitle}>
				프로젝트를 마치며 느낀 점, 배운 것, 그리고 앞으로의 방향을 기록합니다.
			</p>
		</section>
	);
}
