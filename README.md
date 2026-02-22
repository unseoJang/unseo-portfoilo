# Portfolio Next

장운서(Unseo Jang)의 개인 포트폴리오 웹사이트입니다.  
Next.js App Router 기반으로 구성하며, FSD(Feature-Sliced Design) 아키텍처를 적용해 관심사를 레이어별로 분리했습니다.

## 목표

- 진입 시 브랜딩 인상 극대화 (로딩 스크린 → 메인 전환)
- 채용 관점에서 프로젝트 성과와 문제 해결 능력을 빠르게 전달
- 모바일 / 태블릿 / 데스크톱 완전 반응형
- 이력서 다운로드 및 빠른 연락 동선 확보

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| 언어 | TypeScript |
| 스타일링 | CSS Modules |
| 서버 상태 | TanStack Query |
| 클라이언트 상태 | Zustand |
| API 모킹 | MSW (Mock Service Worker) |
| 폰트 | Geist (영문), Noto Sans KR (한글) |
| 패키지 매니저 | pnpm |

## 프로젝트 구조 (FSD)

```
src/
├── app/                        # 라우팅, 레이아웃, 글로벌 스타일
│   ├── globals.css             # CSS 리셋 + CSS 변수 + smooth scroll
│   ├── layout.tsx              # MSWProvider + QueryProvider 래핑
│   ├── loading.module.css
│   ├── page.tsx
│   ├── page.module.css
│   └── LoadingGate.tsx         # 로딩 오버레이 (children 항상 마운트)
│
├── shared/                     # 비즈니스 로직 없는 재사용 자원
│   ├── api/
│   │   └── endpoints.ts        # API 엔드포인트 상수
│   ├── providers/
│   │   ├── MSWProvider.tsx     # MSW 서비스 워커 초기화
│   │   └── QueryProvider.tsx   # TanStack QueryClient 제공
│   └── ui/
│       ├── panel.module.css    # 공통 섹션 패널 스타일
│       ├── typography.module.css # 공통 타이포그래피 스타일
│       └── icons/
│           ├── LinkedInIcon.tsx
│           ├── GitHubIcon.tsx
│           └── index.ts
│
├── entities/                   # 도메인 객체 단위 UI
│   └── profile/
│       ├── ui/
│       │   ├── AboutColumn.tsx
│       │   ├── AboutColumn.module.css
│       │   ├── CompanyHistoryCard.tsx
│       │   ├── CompanyHistoryCard.module.css
│       │   └── index.ts
│       └── index.ts
│
├── features/                   # 사용자 인터랙션 기능
│   └── navigation/
│       ├── ui/
│       │   ├── LeftDock.tsx            # 고정 사이드바 (부드러운 앵커 스크롤)
│       │   ├── LeftDock.module.css
│       │   ├── ThemeToggle.tsx         # 다크/라이트 테마 토글
│       │   ├── ThemeToggle.module.css
│       │   ├── QuickLinks.tsx          # 우측 하단 고정 링크
│       │   ├── QuickLinks.module.css
│       │   └── index.ts
│       └── index.ts
│
├── mocks/                      # MSW 핸들러
│   ├── browser.ts
│   └── handlers.ts             # GET /api/experience 모킹 (600ms 딜레이)
│
└── widgets/                    # 페이지 조합 단위
    ├── about/
    │   ├── ui/
    │   │   ├── AboutSection.tsx        # About 메인 패널
    │   │   ├── AboutSection.module.css
    │   │   ├── HeroIntro.tsx           # 타이틀, 설명, 성과 배지
    │   │   ├── HeroIntro.module.css
    │   │   ├── ProjectsSection.tsx     # Selected Projects (placeholder)
    │   │   ├── ProjectsSection.module.css
    │   │   ├── ContactSection.tsx      # 이력서 / 메일 CTA
    │   │   ├── ContactSection.module.css
    │   │   └── index.ts
    │   └── index.ts
    │
    ├── experience/
    │   ├── model/
    │   │   ├── api.ts                  # fetchExperience (TanStack Query queryFn)
    │   │   ├── data.ts                 # 닥프렌즈/인사이트플러스 경험 데이터
    │   │   ├── queryKeys.ts            # 쿼리 키 상수 관리
    │   │   ├── store.ts                # Zustand (프로젝트 아코디언 UI 상태)
    │   │   └── types.ts                # Experience, Project 타입
    │   ├── ui/
    │   │   ├── ExperienceSection.tsx   # 메인 섹션 (useQuery 조합)
    │   │   ├── ExperienceSection.module.css
    │   │   ├── ExperienceItem.tsx      # 회사별 경험 카드
    │   │   ├── ExperienceItem.module.css
    │   │   ├── ProjectCard.tsx         # 프로젝트 상세 카드 (로고/설명/하이라이트)
    │   │   ├── ProjectCard.module.css
    │   │   ├── ExperienceSkeleton.tsx  # shimmer 로딩 스켈레톤
    │   │   ├── ExperienceSkeleton.module.css
    │   │   └── index.ts
    │   └── index.ts
    │
    ├── retrospective/
    │   ├── ui/
    │   │   ├── RetrospectiveSection.tsx
    │   │   ├── RetrospectiveSection.module.css
    │   │   └── index.ts
    │   └── index.ts
    │
    ├── projects/
    │   ├── model/
    │   │   ├── data.ts                 # 7개 개인 프로젝트 데이터 (최신순)
    │   │   ├── types.ts                # PersonalProject 타입
    │   │   └── useProjectsPager.ts     # 페이지네이션 커스텀 훅 (3개/페이지)
    │   ├── ui/
    │   │   ├── ProjectsSection.tsx     # 섹션 래퍼 (h2 + 설명 + Carousel)
    │   │   ├── ProjectsSection.module.css
    │   │   ├── ProjectsCarousel.tsx    # 캐러셀 (‹ › 버튼 + dot 인디케이터)
    │   │   ├── ProjectsCarousel.module.css
    │   │   ├── ProjectCard.tsx         # 카드 조합 (Thumbnail + Body + Links)
    │   │   ├── ProjectCard.module.css
    │   │   ├── ProjectThumbnail.tsx    # 썸네일 + 돋보기 인터랙션
    │   │   ├── ProjectThumbnail.module.css
    │   │   ├── ProjectCardBody.tsx     # 카드 본문 (기간/제목/설명/기술 스택)
    │   │   ├── ProjectCardBody.module.css
    │   │   ├── ProjectCardLinks.tsx    # 데모/바로가기 링크 버튼
    │   │   ├── ProjectCardLinks.module.css
    │   │   └── index.ts
    │   └── index.ts
    │
    └── landing/
        ├── ui/
        │   ├── LandingMain.tsx         # 전체 페이지 조합 루트
        │   └── LandingMain.module.css
        └── index.ts
```

## 구현된 기능

### UI / 레이아웃
- **로딩 스크린**: 진입 시 필수 표시 → 페이드아웃 전환, 메인 콘텐츠 항상 마운트 (`LoadingGate`)
- **부드러운 스크롤**: `scroll-behavior: smooth` + 사이드바 `scrollIntoView` 직접 호출
- **왼쪽 사이드바**: 고정 네비게이션 (About / Experience / Projects / Retrospective / Contact), 직함 + 연차 표시
- **우측 하단 Quick Links**: LinkedIn, Blog, GitHub, 이력서 (SVG 아이콘)
- **About 섹션**: 프로필 사진, 자기소개, 회사 이력 hover 상세, 블로그 링크
- **Experience 섹션**: 회사별 경험 카드, 프로젝트 아코디언 토글
- **Projects 섹션**: 개인 프로젝트 썸네일 카드 캐러셀 (3개/페이지)

### Experience 데이터 / 상태 관리
- **Next.js API Route**: `GET /api/experience` — MSW 대신 실서버 라우트로 데이터 제공
- **MSW**: 개발 환경 전용 모킹 (600ms 인위적 딜레이)
- **TanStack Query**: `useQuery`로 데이터 페칭, 캐싱, 로딩/에러 상태 관리
- **Zustand**: 프로젝트 목록 아코디언 열림/닫힘 UI 상태
- **shimmer 스켈레톤**: 로딩 중 placeholder 애니메이션
- **ProjectCard**: 로고(favicon), 설명, 하이라이트, 기술 스택 태그 표시
- **닫힌 사이트 처리**: 인사이트플러스 프로젝트 — 링크/로고 없이 `cursor: default` 카드

### Projects 섹션
- **캐러셀 슬라이드**: 3개 단위 페이지 전환 (‹ › SVG 버튼 + dot 인디케이터)
- **썸네일 지원**: YouTube 썸네일 URL, GIF, 정적 이미지 모두 지원
- **돋보기 인터랙션**: 마우스 위치 기반 2.5× 확대 렌즈 (DOM ref 직접 조작, GIF 재시작 없음)
- **우아한 폴백**: 이미지 없거나 오류 시 SVG 코드(`< / >`) 아이콘 스켈레톤
- **7개 프로젝트**: 2016~2026 작업물 최신순 정렬
- **다중 데모 링크**: `demoUrls[]` 배열로 YouTube 영상 여러 개 지원

### 아키텍처
- FSD 5-레이어 구조 (`shared` → `entities` → `features` → `widgets` → `app`)
- 각 위젯 `model/` 레이어 분리 (api, data, queryKeys, store, types)
- 공통 스타일 추출: `shared/ui/panel.module.css`, `shared/ui/typography.module.css`
- API 엔드포인트 상수화: `shared/api/endpoints.ts`
- 쿼리 키 상수화: `widgets/experience/model/queryKeys.ts`
- 모든 레이어 `index.ts` barrel export

### 폰트 / 타이포그래피
- 전체 한글 텍스트 `Noto Sans KR` 적용
- 영문 `Geist` 폰트 병행 적용

## 로드맵

### MVP
- [x] 외부 링크 모음 (LinkedIn, Blog, GitHub, 이력서) — QuickLinks 고정 UI
- [x] 반응형 레이아웃 기반 구성 — 1080px / 840px / 520px 브레이크포인트
- [x] 앵커 네비게이션 — 왼쪽 사이드바 부드러운 섹션 이동
- [x] Experience 섹션 — 실무 경험 데이터 카드 (닥프렌즈/인사이트플러스)
- [x] 프로젝트 토글 아코디언 — 주요 프로젝트 접기/펼치기
- [x] Retrospective 섹션 — 회고 섹션 (작성 예정)
- [x] Projects 섹션 — 썸네일 카드 캐러셀 (7개 프로젝트, 돋보기, GIF 지원)
- [ ] 기술 스택 필터
- [ ] 모바일 반응형 완성도 고도화

### 브랜딩 강화
- [x] 로딩 인트로 스크린 — 페이드아웃 시 흰 화면 없이 메인 즉시 표시
- [x] 성과 지표 배지 — Lighthouse 90+, TTI 35% 개선 등
- [x] 회사 이력 hover 상세 펼침 — CompanyHistoryCard CSS transition
- [x] shimmer 스켈레톤 — 데이터 로딩 중 애니메이션 placeholder
- [ ] 성과 지표 카운트업 애니메이션
- [ ] 프로젝트 데모 미리보기 (hover)
- [ ] 테크 블로그 피드 자동 노출

### 신뢰도 / 채용용
- [x] 경력 연차 표시 — 사이드바 및 인트로에 "프론트엔드 엔지니어 4년차" 명시
- [x] 닥프렌즈 프로젝트 상세 — 로고, 설명, 주요 성과, 기술 스택 카드
- [x] 이력서 다운로드 / 메일 연락 CTA
- [ ] 추천 / 후기 섹션
- [ ] Retrospective 내용 작성

## 시작하기

```bash
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000`을 열어 확인할 수 있습니다.

## 스크립트

```bash
pnpm dev      # 개발 서버
pnpm build    # 프로덕션 빌드
pnpm start    # 프로덕션 실행
pnpm lint     # 린트 검사
```

## 커스터마이징 포인트

| 항목 | 파일 |
|------|------|
| 프로필 사진 | `public/profile-photo.png` 교체 |
| 자기소개 / 회사 이력 | `src/entities/profile/ui/` |
| Experience 데이터 | `src/widgets/experience/model/data.ts` |
| Projects 데이터 | `src/widgets/projects/model/data.ts` |
| 사이드바 링크 | `src/features/navigation/ui/LeftDock.tsx` |
| Quick Links URL | `src/features/navigation/ui/QuickLinks.tsx` |
| 아이콘 추가 | `src/shared/ui/icons/` + `index.ts` export 추가 |
| API 엔드포인트 | `src/shared/api/endpoints.ts` |
| MSW 핸들러 | `src/mocks/handlers.ts` |
| 이메일 주소 | `src/widgets/about/ui/ContactSection.tsx` |
