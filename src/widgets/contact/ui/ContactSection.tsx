import styles from "./ContactSection.module.css";

export function ContactSection() {
	return (
		<section
			className={styles.contactSection}
			id="section-contact"
		>
			<h2>Contact</h2>
			<p>
				협업 제안이나 포지션 문의는 메일로 편하게 연락 주세요. 이력서도 바로
				확인할 수 있습니다.
			</p>
			<div className={styles.ctas}>
				<a
					className={styles.primary}
					href="https://docs.google.com/document/d/1P7HRs4dxbaQPpmKism3ej0ivM5POrLqzdWFvU3NS6u0/edit?tab=t.0"
					download
				>
					이력서 확인하기
				</a>
				<a
					className={styles.secondary}
					href="mailto:contact@example.com"
					target="_blank"
					rel="noreferrer noopener"
				>
					메일로 연락하기
				</a>
			</div>
		</section>
	);
}
