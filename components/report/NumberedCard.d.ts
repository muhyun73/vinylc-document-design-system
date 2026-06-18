import React from 'react';

declare namespace JSX { interface Element {} }

/**
 * 번호형 콘텐츠 카드 — 번호 + 제목 + 본문이 완결된 흐름 단독 카드.
 * 연속문서형/1페이지형에서 성립(스케일 자동 분기). 좌측 4px 보더가 기본.
 *
 * @startingPoint section="Report" subtitle="번호형 콘텐츠 카드" viewport="700x220"
 */
export interface NumberedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 좌측 큰 번호 (예: "01"). */
  num: React.ReactNode;
  /** 카드 제목. */
  title: React.ReactNode;
  /** 본문 텍스트. */
  children?: React.ReactNode;
  /** 부속 강조 노트 (검정 좌보더 박스). */
  note?: React.ReactNode;
  /** 미정 상태 라벨 (점선 칩). */
  pending?: React.ReactNode;
  /** 보더 변형. bordered=전체 1px / thin=좌3px. */
  variant?: 'bordered' | 'thin';
}

export function NumberedCard(props: NumberedCardProps): JSX.Element;
