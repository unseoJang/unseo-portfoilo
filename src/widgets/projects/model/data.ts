import type { PersonalProject } from "./types"

export const PROJECTS: PersonalProject[] = [
	{
		name: "개인 포트폴리오 사이트",
		period: "2026.02 — 진행 중",
		description:
			"현재 보고 계신 포트폴리오 사이트. Next.js App Router 기반으로 FSD 아키텍처를 적용해 직접 설계·개발 중입니다. MSW 목 서버, React Query, 다크/라이트 테마, 반응형 레이아웃 등을 포함합니다.",
		highlights: [
			"FSD(Feature-Sliced Design) 아키텍처 적용",
			"MSW + React Query 기반 비동기 데이터 흐름 설계",
			"다크/라이트 테마, 반응형 레이아웃",
		],
		tech: ["Next.js", "TypeScript", "React Query", "MSW", "CSS Modules"],
		url: "https://github.com/unseoJang/unseo-portfoilo",
		imageUrl: "/now-protfolio.png",
	},
	{
		name: "한입 챌린지 — Next.js 스터디",
		period: "2025.12 — 2026.01",
		description:
			"인프런 한입 챌린지에 참여해 Next.js를 혼자 학습한 스터디 프로젝트. 영화 프로덕트 리스트·상세·리뷰 기능을 직접 구현하며 ISR·CSR·SSR·SSG 렌더링 전략과 모달 등 Next.js 핵심 기능을 체험했습니다. Vercel로 프론트·백엔드 모두 직접 배포했습니다.",
		highlights: [
			"ISR·SSR·SSG·CSR 렌더링 전략 직접 구현 및 비교",
			"제품 목록·상세·리뷰 추가 기능 구현",
			"Vercel 배포 (프론트 + 백엔드 API)",
		],
		tech: ["Next.js", "TypeScript", "Vercel"],
		url: "https://github.com/unseoJang/onebite-cinema-app",
		imageUrl: "/한입챌린지-nextjs.gif",
	},
	{
		name: "고기각 (정육각 클론 코딩)",
		period: "2021.11",
		description:
			"wecode 부트캠프에서 팀 프로젝트로 제작한 정육각 모티브 클론 코딩 앱. 메인 페이지·상세 페이지·장바구니·결제 페이지를 구현했으며, 프론트 3명 · 백엔드 3명으로 협업했습니다.",
		tech: ["React", "CSS-in-JS", "React Router"],
		demoUrls: ["https://www.youtube.com/watch?v=cXVSdffi2eQ"],
		imageUrl: "https://img.youtube.com/vi/cXVSdffi2eQ/maxresdefault.jpg",
	},
	{
		name: "22% (8% \ud074\ub860 \ucf54\ub529)",
		period: "2021.08",
		description:
			"wecode 부트캠프에서 팀 프로젝트로 제작한 8% 모텀브 클론 코딩 앱. React를 실체로 적용한 첫 번째 프로젝트로, 프론트 4명 · 백엔드 3명으로 협업했습니다.",
		tech: ["React", "CSS-in-JS", "React Router"],
		demoUrls: ["https://www.youtube.com/watch?v=7YwGM4X828Y"],
		imageUrl: "https://img.youtube.com/vi/7YwGM4X828Y/maxresdefault.jpg",
	},
	{
		name: "맞춤 기출 문제 플랫폼",
		period: "2021.06 — 2021.08",
		description:
			"외주 프로젝트로 구축한 학습 플랫폼 MVP. 콘텐츠 탐색·상세·풀이 흐름을 Next.js 페이지/라우팅 구조로 설계하고, Fabric.js 기반 캔버스 메모 기능으로 풀이 중 메모·표시가 가능한 학습 인터랙션을 제공했습니다.",
		highlights: [
			"Next.js SSR 기반 탐색/상세/풀이 페이지 설계 및 구현",
			"Fabric.js 캔버스 메모 기능 — 입력·편집·삭제 인터랙션 정의",
			"공통 UI를 컴포넌트 단위로 분리해 MVP 기간 내 전체 페이지 구현",
		],
		tech: ["Next.js", "Styled Components", "Fabric.js"],
		imageUrl: "/맞춤기출.gif",
	},
	{
		name: "첫 번째 포트폴리오",
		period: "2018",
		description:
			"취업을 위해 직접 디자인·개발한 첫 번째 포트폴리오이자 대학교 졸업작품. SK 모바일센터 클론, 타자연습, 61N 게임 등 서브 프로젝트를 포함한 멀티 프로젝트 포트폴리오입니다.",
		highlights: [
			"디자인부터 퍼블리싱까지 1인 전담",
			"서브 프로젝트: SK 모바일센터, 타자연습, 61N 게임 페이지",
		],
		tech: ["HTML", "CSS", "JavaScript", "PHP"],
		url: "https://github.com/unseoJang/protfolio",
		imageUrl: "/first-portfolio.gif",
	},
	{
		name: "게임 설명 & 관리자 페이지",
		period: "2016.10",
		description:
			"학교에서 진행한 프로젝트 작업물로 PHP로 직접 구현한 게임 소개 사이트와 관리자 페이지. 게임 정보 등록·수정·삭제 CRUD를 갖춘 관리 인터페이스를 제작했습니다.",
		tech: ["PHP", "HTML", "CSS", "JavaScript", "jQeury"],
		demoUrls: [
			"https://www.youtube.com/watch?v=N0MngeE-zBE",
			"https://www.youtube.com/watch?v=lNPi9ZzLGRo",
			"https://www.youtube.com/watch?v=PBPPV_gGtpg",
		],
		imageUrl: "https://img.youtube.com/vi/N0MngeE-zBE/maxresdefault.jpg",
	},
]
