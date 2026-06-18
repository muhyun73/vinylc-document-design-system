import React from 'react';

declare namespace JSX { interface Element {} }

/**
 * 라벨 칩 — 카테고리·KPI·상태를 표기하는 인라인 칩.
 * 공통 4자산(분기 없음). 어느 표시유형에서도 동일 시각.
 *
 * @startingPoint section="Report" subtitle="라벨 칩 (solid / outline / light)" viewport="700x120"
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 시각 스타일. 기본 solid(검정 배경/흰 텍스트). */
  variant?: 'solid' | 'outline' | 'light';
  /** 크기. sm 은 1P 압축용. */
  size?: 'md' | 'sm';
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
