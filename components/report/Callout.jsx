import React from 'react';

/**
 * Callout — 검정 강조 메시지 (§3.E-1).
 * 본문 핵심 메시지를 검정 배경으로 강조. 검정카드 시각언어 공유.
 */
export function Callout({ title, children, className = '', ...rest }) {
  return (
    <div className={['callout', className].filter(Boolean).join(' ')} {...rest}>
      {title && <div className="callout__title">{title}</div>}
      {children && <div className="callout__body">{children}</div>}
    </div>
  );
}
