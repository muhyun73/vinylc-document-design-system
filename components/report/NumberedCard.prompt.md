**번호형 콘텐츠 카드** — 번호 + 제목 + 본문이 완결된, 흐름에 단독 배치되는 카드. 니즈·기능·요구사항·축 정의 등에 쓴다. `.report`/`.slide.is-onepager` 안에 두면 스케일이 자동 분기된다.

```jsx
<NumberedCard num="01" title="현황 진단" note="핵심: 도구 표준화 부재">
  팀별로 상이한 도구 체계를 사용해 산출물 편차가 크다.
</NumberedCard>

<NumberedCard num="02" title="목표 미정" pending="TBD" variant="thin" />
```

- `note`: 검정 좌보더 강조 박스 · `pending`: 점선 미정 칩
- `variant`: `bordered`(전체 1px) · `thin`(좌 3px)
