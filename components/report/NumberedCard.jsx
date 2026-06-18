import React from 'react';

/**
 * NumberedCard — 번호형 콘텐츠 카드 (§3.A).
 * 번호 + 제목 + 본문이 완결된 흐름(flow) 단독 배치 카드. 좌측 4px 보더.
 */
export function NumberedCard({
  num,
  title,
  children,
  note,
  pending,
  variant,
  className = '',
  ...rest
}) {
  const cls = [
    'numbered-card',
    variant === 'bordered' && 'numbered-card--bordered',
    variant === 'thin' && 'numbered-card--thin',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className="numbered-card__num">{num}</div>
      <div>
        <h3 className="numbered-card__title">{title}</h3>
        {children && <p className="numbered-card__body">{children}</p>}
        {pending && <span className="numbered-card__pending">{pending}</span>}
        {note && <div className="numbered-card__note">{note}</div>}
      </div>
    </div>
  );
}
