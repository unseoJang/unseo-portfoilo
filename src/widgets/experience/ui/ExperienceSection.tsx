"use client";

import { useQuery } from "@tanstack/react-query";
import panel from "@/shared/ui/panel.module.css";
import typo from "@/shared/ui/typography.module.css";
import { fetchExperience } from "../model/api";
import { experienceKeys } from "../model/queryKeys";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceSkeleton } from "./ExperienceSkeleton";
import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
	const {
		data: experiences,
		isLoading,
		isError,
	} = useQuery({
		queryKey: experienceKeys.list(),
		queryFn: fetchExperience,
	});

	return (
		<section className={panel.heroPanel} id="section-experience">
			<h2 className={typo.sectionTitle}>Experience</h2>
			<p className={styles.subtitle}>
				사용자의 행동 맥락을 중심으로 인터페이스를 설계하고,
				<br />
				어떠한 프레임워크를 사용하든 빠르고 안정적인 웹 제품을 개발합니다.
			</p>

			{isLoading && <ExperienceSkeleton />}
			{isError && (
				<p className={styles.errorMsg}>데이터를 불러오지 못했습니다.</p>
			)}
			{experiences?.map((item) => (
				<ExperienceItem key={item.company + item.period} item={item} />
			))}
		</section>
	);
}
