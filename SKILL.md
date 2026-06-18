---
name: vinylc-design
description: Use this skill to generate well-branded reports and assets for VinylC (바이널씨), either for production or throwaway prototypes/mocks. Contains the report design system SSOT — display-type tokens, monochrome colors, Pretendard type, brand assets, and React report components for the 연속문서형 / 프리젠테이션형 / 1페이지형 display types.
user-invocable: true
---

# VinylC 보고서 디자인 시스템 (버전1)

This skill is the **Single Source of Truth** for VinylC report visuals. Read `readme.md` first, then explore the files below.

## Quick start
1. **Pick the display type** — the top-level fork. Every component is interpreted on this axis:
   - **연속문서형** → `<div class="report">` … `<div class="report__content">` — 가변폭, exports to PDF · HTML · docx.
   - **프리젠테이션형** → `<section class="slide">` — 1280×720 fixed, exports to PDF · HTML · pptx.
   - **1페이지형** → `<section class="slide is-onepager">` + 12-col grid — 1280×720 fixed, PDF only.
2. **Link `styles.css`** — the single global entry point (it `@import`s all tokens + component CSS).
3. **Compose with the classes / React components** — never hand-write px; reference the scale tokens, which the container resolves automatically.

## Rules (점검 체크리스트)
- 표시유형 ↔ 컨테이너는 **1:1**. 가변폭은 **연속문서형에만**. 슬라이드/1P는 1280px 고정.
- 산출물 제약: `docx ↔ 연속문서형`, `pptx ↔ 프리젠테이션형`, `1P = PDF 단독`.
- 본문 타이포·여백 스케일만 표시유형별 분기. **공통 4자산(컬러·심볼·tag·검정카드)은 분기 없이 공유.**
- 컬러는 **모노크롬 팔레트**를 벗어나지 않는다. 강조는 검정 면으로만.
- 컴포넌트는 `--fs-*` / `--lh-body` / `--num-card` 등 **분기 토큰만 참조**, 직접 px 금지.
- 모서리 radius 0 · 그림자 없음 · 위계는 보더 두께로(A 좌4px / D 좌2px / B 상3px).
- 이모지·범용 아이콘 세트 사용 안 함. 브랜드 마크(심볼·워드마크)만.

## Files
- `readme.md` — full design guide (content fundamentals · visual foundations · iconography · manifest).
- `styles.css` — global entry (`@import` only). Consumers link this one file.
- `tokens/` — colors · typography · spacing · scales (display-scoped) · fonts.
- `css/` — base · layout (containers + grids) · components (A~H) · non-integrated · utilities.
- `components/report/` — React primitives: `Tag` · `NumberedCard` · `GridCard` · `LabelRow` · `BorderItem` · `Callout` · `GroupHeader`.
- `ui_kits/` — sample reports per display type: `document-report/` · `slide-deck/` · `onepager/`.
- `assets/` — `symbol-black.svg` · `symbol-white.svg` (⚠️ embedded PNG data missing — re-upload needed) · `wordmark-black.png` · `wordmark-white.png`.
- `fonts/PretendardVariable.ttf`.

## Working mode
If creating visual artifacts (reports, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view. If working on production code, copy assets and apply the rules here. If invoked with no other guidance, ask what the user wants to build, ask a few questions, and act as an expert report designer who outputs HTML artifacts or production code.
