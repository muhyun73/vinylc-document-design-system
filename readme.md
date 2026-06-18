# 바이널씨(VinylC) 보고서 디자인 시스템 (버전1)

> **Single Source of Truth (SSOT)** for all VinylC report visuals & components.
> 개별 보고서 HTML은 이 시스템을 구현한 인스턴스일 뿐 SSOT가 아니다. 컴포넌트 정의·토큰 값은 항상 이 시스템을 따른다.

이 디자인 시스템은 바이널씨(VinylC)가 산출하는 **보고서(report)** 의 시각 규칙·컴포넌트를 정의한다. 마케팅 사이트나 앱이 아닌, **PDF·HTML·docx·pptx 로 내보내는 문서/발표 산출물** 전용 시스템이다.

## 출처 (Sources)
이 시스템은 사용자가 제공한 SSOT 명세 문서 *"VinylC 보고서 디자인 시스템 (컴포넌트 SSOT) — `vinylc-report` 스킬 개정 Phase 3"* 를 그대로 구현했다. 입력 SSOT:
- `phase1_component_inventory.md` (컴포넌트 인벤토리)
- `phase2_mece_classification.md` (3축 매핑)

제공 자산: `PretendardVariable.ttf`, `symbol-black.svg` / `symbol-white.svg`, `wordmark-black.png` / `wordmark-white.png`. (코드베이스/Figma 링크는 제공되지 않음 — 명세 문서가 유일한 SSOT)

---

## 0. 표시유형 체계 (최상위 분기)

모든 컴포넌트는 **3개 표시유형(display type)** 축 위에서 해석된다. **표시유형 ↔ 최상위 컨테이너는 1:1**.

| 표시유형 | 최상위 컨테이너 | 캔버스 | 가변폭 | 산출물 |
|---|---|---|---|---|
| **연속문서형** | `.report` | max-width 가변 (기준 960px) | **적용** | PDF · HTML · **docx** |
| **프리젠테이션형** | `.slide` | 1280×720 고정 | 비적용 | PDF · HTML · **pptx** |
| **1페이지형** | `.slide.is-onepager` | 1280×720 고정(overflow hidden) | 비적용 | **PDF 단독** |

핵심 규칙:
- 가변폭은 **연속문서형에만** 적용. 슬라이드/1P는 1280px 고정 (가변폭 예외).
- 산출물 제약: `docx ↔ 연속문서형`, `pptx ↔ 프리젠테이션형`, `1P = PDF 단독`. `PDF·HTML` 공통.
- 통합 컴포넌트는 **의미 구조를 표시유형 간 공유**하되 **토큰 스케일을 표시유형별로 분기**.
- **공통 4자산(컬러 · 심볼 SVG · tag 칩 · 검정카드 시각언어)은 분기 없이 공유.**

---

## CONTENT FUNDAMENTALS — 콘텐츠 작법

- **언어**: 한국어 본문 + 영문 라벨 혼용. 섹션 라벨·overline·tag 는 영문 대문자(`OVERVIEW`, `KPI`), 본문은 한국어.
- **어조**: 보고서체. 간결한 평서/개조식("~한다", "~이다"). 1인칭/2인칭 호칭 없음. 권유·감탄·구어체 배제. 사실과 결정을 진술한다.
- **케이싱**: 라벨/overline/tag/group-header/표 헤더는 `text-transform: uppercase` + letter-spacing wide. 제목·본문은 자연 케이싱.
- **번호 표기**: 섹션은 `01`, `02` 처럼 2자리 zero-pad. 번호 카드도 동일.
- **이모지**: **사용하지 않는다.** 아이콘은 결정형 심볼/워드마크로 한정. 모노크롬 절제가 원칙.
- **밀도**: 슬로건 1줄("Practical UX · 가장 쓸모있는 경험을 디자인합니다") 외에는 장식 카피 없음. 모든 요소가 정보를 전달한다 — 데이터 슬롭 금지.
- **슬로건**: 영문 `Practical UX`, 국문 `가장 쓸모있는 경험을 디자인합니다`. 클로징/푸터에서만 사용.

예시 카피:
- 표지: `AI Native 전환 종합계획` / 부제 `AI디자인연구소 운영 방안`
- 섹션 제목: `1. 배경`, `2. 현황 진단`
- callout: `표시유형 ↔ 컨테이너는 1:1이며, 가변폭은 연속문서형에만 적용한다.`

---

## VISUAL FOUNDATIONS — 시각 기반

- **팔레트**: 완전 **모노크롬**. `#0D0D0D`(deep) ~ `#FFFFFF` 12단계 그레이 스케일. 채도 있는 색·강조색 **없음**. 포인트는 검정 면(callout/dark card/inverse cover)으로만 준다. → 컬러가 모노크롬 팔레트를 벗어나지 않는지 항상 점검.
- **타이포**: 단일 가변폰트 **Pretendard** (300~700). letter-spacing 본문 `-0.02em` 타이트, 라벨류 `+0.05~0.1em` 와이드. 제목 bold 700 / 부제·슬로건 light 300 대비.
- **스케일 분기**: 본문 `--fs-*`·`--lh-body`·`--page-bg`·`--num-card` 는 컨테이너(.report/.slide/1P)가 결정. 컴포넌트는 토큰만 참조하고 직접 px 기입 금지.
- **여백**: 4·6·8·16·24·40·64·96 8단계 풀. 1P 는 sm/md/lg 를 10/14/20 으로 압축 override.
- **배경**: 연속문서형 = `gray-50` 페이지 + **흰 본문 카드**. 슬라이드 = 흰 배경. 표지·클로징 = `black-deep`. 그라데이션·텍스처·이미지 배경 **없음**.
- **모서리**: **radius 0 — 직각**. 둥근 모서리를 쓰지 않는다(`border-radius: 0` 명시). 칩·카드·callout 모두 직각.
- **보더로 위계 표현**: 색이 없으므로 **보더가 위계의 핵심**. A 번호카드 = 좌 4px / D 보더항목 = 좌 2px / B 그리드카드 = 상 3px / 표 헤더 = 하 2px. 두께가 컴포넌트를 구분한다.
- **그림자**: **shadow 없음.** 깊이는 면(검정/흰)·보더·여백으로만 표현. elevation 시스템 부재.
- **애니메이션**: 인쇄/PDF 중심이라 모션 없음. 정적 문서.
- **호버/프레스**: 정적 산출물이라 상태 없음(인쇄 대상). 인터랙티브 UI 키트에서만 opacity/배경 변화 사용.
- **투명도·블러**: 사용하지 않음. 워드마크 푸터만 `opacity 0.35`. 표지 라인 `opacity 0.15`.
- **카드 외형**: 흰/검정 면 + 단색 보더, radius 0, shadow 0. 매우 절제된 스위스 그리드 스타일.
- **레이아웃**: 연속문서형은 중앙 정렬 본문 카드(가변폭). 슬라이드는 80×60 패딩 16:9. 1P는 12컬럼 그리드 압축.

---

## ICONOGRAPHY — 아이콘 체계

- **아이콘 폰트/세트 없음.** 이 시스템은 범용 아이콘 세트(Lucide/Heroicons 등)를 쓰지 않는다.
- **유일한 그래픽 자산은 결정형 브랜드 마크** 두 종뿐:
  - **심볼 SVG** (`assets/symbol-black.svg` / `symbol-white.svg`) — 표지 64px / 헤더 28px. 내부에 PNG를 패턴으로 담고 `invertToWhite` feColorMatrix 로 검정 배경에서 흰색 반전(코너 잔상 방지). **⚠️ 현재 업로드 파일은 내부 `<image>` base64 데이터가 비어 있어 렌더되지 않음 — 재업로드 필요.**
  - **워드마크 PNG** (`assets/wordmark-black.png` 밝은 배경 / `wordmark-white.png` 어두운 배경) — "VINYL C". 클로징/푸터용. 반전 이슈 없이 배경별 파일 분리.
- **이모지·유니코드 아이콘 사용 안 함.** 번호(`01`)·구분선·보더가 시각 신호 역할을 대신한다.
- **figure 내부 SVG 도형은 생성형 자산**이며 컴포넌트가 아니다. 본 시스템은 `.figure` 컨테이너만 정의한다.

---

## 파일 인덱스 (Manifest)

**루트**
- `styles.css` — 글로벌 진입점(@import 목록만). 소비 프로젝트는 이 한 파일만 link.
- `readme.md` — 이 문서.
- `SKILL.md` — Claude Code / Agent Skills 호환 진입점.

**tokens/** — CSS 커스텀 프로퍼티
- `fonts.css` (@font-face Pretendard) · `colors.css` (모노크롬 + 의미) · `typography.css` (family/weight/lh/ls 풀) · `spacing.css` (여백 + 캔버스 치수) · `scales.css` (표시유형별 스케일 분기)

**css/** — 글로벌 룰
- `base.css` (리셋) · `layout.css` (컨테이너 + 그리드) · `components.css` (통합 A~H) · `non-integrated.css` (prose/section/table/figure/divider) · `utilities.css`

**components/report/** — React 프리미티브
- `Tag` · `NumberedCard` · `GridCard` · `LabelRow` · `BorderItem` · `Callout` · `GroupHeader`
- 각 `<Name>.jsx` + `.d.ts` + `.prompt.md`, 디렉터리 카드 `report-components.card.html`

**guidelines/** — Design System 탭 스펙 카드 (Colors / Type / Spacing / Brand)

**ui_kits/** — 표시유형별 샘플 보고서
- `document-report/` (연속문서형) · `slide-deck/` (프리젠테이션형) · `onepager/` (1페이지형)

**assets/** — `symbol-black.svg` · `symbol-white.svg` · `wordmark-black.png` · `wordmark-white.png`
**fonts/** — `PretendardVariable.ttf`

---

## SSOT 점검 체크리스트 (보고서 생성 후)
- [ ] 표시유형이 컨테이너로 정확히 선택됨 (report / slide / slide.is-onepager)
- [ ] 산출물 제약 준수: docx↔연속문서형, pptx↔프리젠테이션형, 1P=PDF 단독
- [ ] 연속문서형 본문 16px / 1.7 / gray-50 적용, px 직접 기입 없음
- [ ] 연속문서형 `card-grid` 가 `auto-fit minmax` 가변폭 / 슬라이드·1P 고정 트랙
- [ ] 컴포넌트가 §1.3 분기 토큰만 참조
- [ ] 표지 심볼이 인라인 SVG 로 주입됨
- [ ] 공통 4자산(컬러·심볼·tag·검정카드)에 표시유형 분기 미적용
- [ ] 컬러가 모노크롬 팔레트를 벗어나지 않음
