import React from 'react';

declare namespace JSX { interface Element {} }

/**
 * 검정 강조 메시지 — 본문 핵심 메시지를 검정 배경(검정카드 시각언어)으로 강조.
 * 연속문서형·프리젠테이션형에서 성립.
 *
 * @startingPoint section="Report" subtitle="검정 강조 메시지 박스" viewport="700x160"
 */
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 강조 제목 (흰색). */
  title?: React.ReactNode;
  /** 본문 (연회색). */
  children?: React.ReactNode;
}

export function Callout(props: CalloutProps): JSX.Element;
