import React from 'react';

declare namespace JSX { interface Element {} }

/**
 * 그리드 카드 — card-grid 컨테이너 안에 놓이는 그리드 셀 카드.
 * 태그/제목/예시/본문 슬롯. 상단 3px 보더가 기본, 검정 dark variant 공유.
 *
 * @startingPoint section="Report" subtitle="그리드 셀 카드 (light / dark)" viewport="700x200"
 */
export interface GridCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 상단 라벨 칩 텍스트. */
  tag?: React.ReactNode;
  /** 카드 제목. */
  title?: React.ReactNode;
  /** 예시 텍스트 (회색). */
  eg?: React.ReactNode;
  /** 본문 설명. */
  children?: React.ReactNode;
  /** 검정 카드 시각언어 (gray-900 배경 / 흰 텍스트). */
  dark?: boolean;
  /** 전체 1px 보더 variant. */
  bordered?: boolean;
}

export function GridCard(props: GridCardProps): JSX.Element;
