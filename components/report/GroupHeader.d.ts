import React from 'react';

declare namespace JSX { interface Element {} }

/**
 * 분류 구획 헤더 — 검정 띠 형태의 인라인 섹션 구분. 연속문서형 전용.
 */
export interface GroupHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function GroupHeader(props: GroupHeaderProps): JSX.Element;
