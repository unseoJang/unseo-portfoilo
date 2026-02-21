"use client";

import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
	function toggle() {
		const root = document.documentElement;
		const isLight = root.getAttribute("data-theme") === "light";
		root.setAttribute("data-theme", isLight ? "dark" : "light");
	}

	return (
		<button
			className={styles.toggle}
			onClick={toggle}
			aria-label="라이트/다크 모드 전환"
			title="테마 전환"
		>
			<span className={styles.iconDark} aria-hidden>🌙</span>
			<span className={styles.iconLight} aria-hidden>☀️</span>
		</button>
	);
}
