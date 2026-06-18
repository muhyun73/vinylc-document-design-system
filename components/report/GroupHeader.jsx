import React from 'react';

/**
 * GroupHeader — 분류 구획 헤더 (§3.E-2).
 * 검정 띠 형태의 인라인 섹션 구분 헤더. 연속문서형 전용.
 */
export function GroupHeader({ children, className = '', ...rest }) {
  return (
    <div className={['group-header', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
