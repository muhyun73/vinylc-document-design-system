import React from 'react';

/**
 * LabelRow — 라벨-콘텐츠 행 (§3.C).
 * 수평 라벨 + 콘텐츠 1행. 조직·항목 나열에 사용.
 */
export function LabelRow({ label, children, className = '', ...rest }) {
  return (
    <div className={['label-row', className].filter(Boolean).join(' ')} {...rest}>
      <div className="label-row__label">{label}</div>
      <div className="label-row__content">{children}</div>
    </div>
  );
}
