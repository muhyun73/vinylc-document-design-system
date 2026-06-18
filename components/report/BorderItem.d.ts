import React from 'react';

declare namespace JSX { interface Element {} }

/**
 * 좌측보더 항목 — 제목 + 설명의 인라인 항목. 좌측 2px 보더.
 * 번호 없는 가벼운 항목 나열. (번호+완결 카드는 NumberedCard 사용)
 */
export interface BorderItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 항목 제목. */
  title: React.ReactNode;
  /** 항목 설명. */
  children?: React.ReactNode;
}

export function BorderItem(props: BorderItemProps): JSX.Element;
