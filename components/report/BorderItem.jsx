import React from 'react';

/**
 * BorderItem — 좌측보더 항목 (§3.D).
 * 제목 + 설명의 인라인 항목. 좌측 2px 보더 (A의 4px와 구분).
 */
export function BorderItem({ title, children, className = '', ...rest }) {
  return (
    <div className={['border-item', className].filter(Boolean).join(' ')} {...rest}>
      <div className="border-item__title">{title}</div>
      {children && <div className="border-item__desc">{children}</div>}
    </div>
  );
}
