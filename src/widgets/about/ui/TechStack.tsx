import styles from "./TechStack.module.css"

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

type Skill =
	| { name: string; icon: string; letter?: never }
	| { name: string; letter: string; icon?: never }

const STACKS: { group: string; accent: string; skills: Skill[] }[] = [
	{
		group: "Language / Framework",
		accent: "#3b82f6",
		skills: [
			{ name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
			{ name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
			{ name: "HTML/CSS", icon: `${CDN}/html5/html5-original.svg` },
			{ name: "Vue.js", icon: `${CDN}/vuejs/vuejs-original.svg` },
			{ name: "Nuxt.js", icon: `${CDN}/nuxtjs/nuxtjs-original.svg` },
			{ name: "React", icon: `${CDN}/react/react-original.svg` },
		],
	},
	{
		group: "State / Library",
		accent: "#10b981",
		skills: [
			{ name: "Pinia", letter: "Pi" },
			{ name: "Vuex", letter: "Vx" },
			{ name: "Redux", icon: `${CDN}/redux/redux-original.svg` },
			{ name: "SCSS", icon: `${CDN}/sass/sass-original.svg` },
			{ name: "socket.io", icon: `${CDN}/socketio/socketio-original.svg` },
		],
	},
	{
		group: "Tooling & CI/CD",
		accent: "#f59e0b",
		skills: [
			{ name: "Git", icon: `${CDN}/git/git-original.svg` },
			{ name: "GitHub", icon: `${CDN}/github/github-original.svg` },
			{
				name: "GitHub Actions",
				icon: `${CDN}/githubactions/githubactions-original.svg`,
			},
			{ name: "Vite", icon: `${CDN}/vitejs/vitejs-original.svg` },
			{ name: "Bootstrap", icon: `${CDN}/bootstrap/bootstrap-original.svg` },
			{
				name: "AWS S3·CloudFront",
				icon: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
			},
			{ name: "Zeplin", letter: "Ze" },
		],
	},
	{
		group: "AI Tools",
		accent: "#a78bfa",
		skills: [
			{ name: "GitHub Copilot", letter: "Co" },
			{ name: "Cursor AI", letter: "Cs" },
			{ name: "ChatGPT", letter: "GP" },
			{ name: "Claude", letter: "Cl" },
		],
	},
	{
		group: "Collaboration",
		accent: "#f472b6",
		skills: [
			{ name: "Figma", icon: `${CDN}/figma/figma-original.svg` },
			{ name: "Notion", icon: `${CDN}/notion/notion-original.svg` },
			{ name: "Slack", icon: `${CDN}/slack/slack-original.svg` },
			{ name: "Trello", icon: `${CDN}/trello/trello-original.svg` },
			{ name: "Discord", icon: `${CDN}/discord/discord-original.svg` },
			{ name: "Telegram", letter: "Tg" },
		],
	},
]

export function TechStack() {
	return (
		<div className={styles.grid}>
			{STACKS.map(({ group, accent, skills }) => (
				<div key={group} className={styles.card}>
					<p className={styles.groupName} style={{ color: accent }}>
						{group}
					</p>
					<div className={styles.iconRow}>
						{skills.map((skill) =>
							skill.icon ? (
								// eslint-disable-next-line @next/next/no-img-element
								<img
									key={skill.name}
									className={styles.icon}
									src={skill.icon}
									alt={skill.name}
									title={skill.name}
									width={26}
									height={26}
								/>
							) : (
								<span
									key={skill.name}
									className={styles.letterIcon}
									style={{ background: accent + "33", color: accent }}
									title={skill.name}
								>
									{skill.letter}
								</span>
							),
						)}
					</div>
					<p className={styles.skillText}>
						{skills.map((s) => s.name).join(" · ")}
					</p>
				</div>
			))}
		</div>
	)
}
