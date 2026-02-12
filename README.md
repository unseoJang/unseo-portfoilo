# Portfolio Next

개인 포트폴리오 웹사이트 프로젝트입니다.  
첫 진입 화면은 시각적으로 강한 히어로 섹션을 중심으로 구성하고, 채용 관점에서 핵심 정보(프로젝트 문제/해결/성과)를 빠르게 전달하는 것을 목표로 합니다.

## 목표

- 첫 화면에서 인상적인 브랜딩 전달
- 프로젝트 성과와 문제 해결 능력 명확히 표현
- 모바일/태블릿/데스크톱 반응형 최적화
- 이력서 다운로드 및 빠른 연락 동선 확보

## 기술 스택

- `Next.js` (App Router)
- `React`
- `TypeScript`
- `CSS Modules`

## 현재 구현 범위

- 화려한 히어로 섹션 (그라디언트/글로우/CTA)
- 히어로 CTA
  - 이력서 다운로드 버튼
  - 메일 보내기(`mailto`) 버튼
- 반응형 레이아웃 기반 스타일

## 기능 로드맵

### 필수 기능 (MVP)

- [ ] 프로젝트 상세 토글 (문제/해결/성과 확장)
- [ ] 기술 스택 필터 (React, Next.js 등)
- [ ] 외부 링크 모음 (GitHub / Blog / LinkedIn)
- [ ] 전체 반응형 완성도 고도화

### 선택 기능 (브랜딩 강화)

- [ ] 다크 모드 토글
- [ ] 성과 지표 강조 배지 (Lighthouse, TTI 등)
- [ ] 프로젝트 데모 미리보기 (hover)
- [ ] 소개 영상/스크린캡 삽입
- [ ] 테크 블로그 피드 자동 노출

### 선택 기능 (신뢰도/채용용)

- [ ] 이력 타임라인
- [ ] 추천/후기 섹션
- [ ] 테스트/품질 섹션 (테스트 도구, CI 여부)

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인할 수 있습니다.

## 스크립트

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 실행
npm run lint     # 린트 검사
```

## 프로젝트 구조

```text
src/
  app/
    globals.css
    layout.tsx
    page.module.css
    page.tsx
public/
```

## 커스터마이징 포인트

- 이메일 주소: `src/app/page.tsx` 내 `mailto` 링크
- 이력서 파일: `public/resume.pdf` 추가 후 다운로드 링크 연결
- 히어로 문구/성과 수치: `src/app/page.tsx`
- 히어로 비주얼 스타일: `src/app/page.module.css`
