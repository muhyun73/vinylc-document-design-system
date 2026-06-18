**그리드 카드** — `.card-grid` 안에 놓이는 셀 카드. KPI·핵심 축·역할 카드 등에 쓴다. 상단 3px 보더가 기본이고, `dark`로 검정 카드 시각언어를 공유한다.

```jsx
<div className="card-grid">
  <GridCard tag="KPI" title="전환율" eg="목표 4.2%">
    핵심 퍼널 전환율을 분기별로 추적한다.
  </GridCard>
  <GridCard tag="역할" title="리드" dark>
    방향 설정과 의사결정을 담당한다.
  </GridCard>
</div>
```

- `dark`: 검정 배경 강조 · `bordered`: 전체 1px 보더
- 컨테이너 `.card-grid`는 연속문서형에서 `auto-fit`으로 가변폭화된다.
