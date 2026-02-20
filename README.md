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
| 폰트 | Geist (영문), Noto Sans KR (한글) |
| 패키지 매니저 | pnpm |

## 프로젝트 구조 (FSD)

```
src/
├── app/                        # 라우팅, 레이아웃, 글로벌 스타일
│   ├── globals.css
│   ├── layout.tsx              # Noto Sans KR 전역 폰트 적용
│   ├── loading.module.css      # 로딩 스크린 스타일
│   ├── page.tsx
│   ├── page.module.css
│   └── LoadingGate.tsx         # 3초 필수 로딩 오버레이 (Client Component)
│
├── shared/                     # 비즈니스 로직 없는 재사용 자원
│   └── ui/
│       └── icons/
│           ├── LinkedInIcon.tsx
│           ├── GitHubIcon.tsx
│           └── index.ts        # 전체 아이콘 통합 export
│
├── entities/                   # 도메인 객체 단위 UI
│   └── profile/
│       ├── ui/
│       │   ├── AboutColumn.tsx         # 프로필 사진, 자기소개, 블로그
│       │   ├── AboutColumn.module.css
│       │   ├── CompanyHistoryCard.tsx  # 회사 이력 (hover 상세 펼침)
│       │   └── CompanyHistoryCard.module.css
│       └── index.ts
│
├── features/                   # 사용자 탐색 기능
│   └── navigation/
│       ├── ui/
│       │   ├── LeftDock.tsx            # 고정 왼쪽 사이드바 (앵커 네비게이션)
│       │   ├── LeftDock.module.css
│       │   ├── QuickLinks.tsx          # 우측 하단 고정 빠른 링크
│       │   └── QuickLinks.module.css
│       └── index.ts
│
└── widgets/                    # 페이지 조합 단위
    └── landing/
        ├── ui/
        │   ├── LandingMain.tsx         # entities + features 조합 루트
        │   ├── LandingMain.module.css
        │   ├── MainContent.tsx         # 메인 콘텐츠 (Experience, Projects, Contact)
        │   └── MainContent.module.css
        └── index.ts
```

## 구현된 기능

### UI / 레이아웃
- **로딩 스크린**: 진입 시 3초 필수 표시 → 페이드아웃 전환 (`LoadingGate`)
- **왼쪽 사이드바**: 고정(fixed) 네비게이션, 앵커 스크롤 링크, 하단 copyright
- **우측 하단 Quick Links**: LinkedIn, Blog, GitHub, 이력서 링크 (SVG 아이콘 적용)
- **About 섹션**: 프로필 사진, 자기소개, 다녔던 회사(hover 상세), 블로그 링크
- **메인 콘텐츠**: 인트로, 성과 배지, Experience, Selected Projects, Contact
- **단일 스크롤**: `html/body overflow:hidden` → `.page` 단독 스크롤 컨테이너

### 아키텍처
- FSD 4-레이어 구조 (`shared` → `entities` → `features` → `widgets`)
- 아이콘 컴포넌트 `shared/ui/icons` 통합 모듈화
- 각 레이어 `index.ts` barrel export
- CSS Modules 컴포넌트별 완전 분리

### 폰트 / 타이포그래피
- 전체 한글 텍스트 `Noto Sans KR` 적용 (`next/font/google`)
- 영문 `Geist` 폰트 병행 적용

## 로드맵

### MVP
- [ ] 프로젝트 상세 토글 (문제 / 해결 / 성과 확장)
- [ ] 기술 스택 필터
- [ ] 전체 반응형 완성도 고도화

### 브랜딩 강화
- [ ] 성과 지표 배지 애니메이션
- [ ] 프로젝트 데모 미리보기 (hover)
- [ ] 테크 블로그 피드 자동 노출

### 신뢰도 / 채용용
- [ ] 이력 타임라인
- [ ] 추천 / 후기 섹션

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
| Experience / Projects / Contact | `src/widgets/landing/ui/MainContent.tsx` |
| 사이드바 링크 | `src/features/navigation/ui/LeftDock.tsx` |
| Quick Links URL | `src/features/navigation/ui/QuickLinks.tsx` |
| 아이콘 추가 | `src/shared/ui/icons/` + `index.ts` export 추가 |
| 이메일 주소 | `src/widgets/landing/ui/MainContent.tsx` `mailto` 링크 |
