import React from 'react';

/**
 * GridCard — 그리드 카드 (§3.B).
 * card-grid 컨테이너 안에 놓이는 그리드 셀 카드. 상단 3px 보더.
 */
export function GridCard({
  tag,
  title,
  eg,
  children,
  dark,
  bordered,
  className = '',
  ...rest
}) {
  const cls = [
    'grid-card',
    dark && 'grid-card--dark',
    bordered && 'grid-card--bordered',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {tag && <span className="tag grid-card__tag">{tag}</span>}
      {title && <h3 className="grid-card__title">{title}</h3>}
      {eg && <p className="grid-card__eg">{eg}</p>}
      {children && <p className="grid-card__body">{children}</p>}
    </div>
  );
}
