import React from 'react';

declare namespace JSX { interface Element {} }

/**
 * 라벨-콘텐츠 행 — 수평 라벨 + 콘텐츠 1행. 하단 구분선.
 * 조직 항목·속성 나열에 사용. 라벨 폭은 minmax(120~200px).
 */
export interface LabelRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 좌측 라벨 (고정~가변 폭). */
  label: React.ReactNode;
  /** 우측 콘텐츠. */
  children?: React.ReactNode;
}

export function LabelRow(props: LabelRowProps): JSX.Element;
