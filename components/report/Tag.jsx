import React from 'react';

/**
 * Tag — 라벨 칩 (§3.F). 공통 4자산, 표시유형 비분기.
 * tag / badge / risk__label 을 단일 통합한 컴포넌트.
 */
export function Tag({ variant = 'solid', size = 'md', className = '', children, ...rest }) {
  const cls = [
    'tag',
    variant === 'outline' && 'tag--outline',
    variant === 'light' && 'tag--light',
    size === 'sm' && 'tag--sm',
    className,
  ].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>{children}</span>
  );
}
