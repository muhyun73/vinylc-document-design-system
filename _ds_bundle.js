/* @ds-bundle: {"format":3,"namespace":"VinylCReportDesignSystem_74722e","components":[{"name":"BorderItem","sourcePath":"components/report/BorderItem.jsx"},{"name":"Callout","sourcePath":"components/report/Callout.jsx"},{"name":"GridCard","sourcePath":"components/report/GridCard.jsx"},{"name":"GroupHeader","sourcePath":"components/report/GroupHeader.jsx"},{"name":"LabelRow","sourcePath":"components/report/LabelRow.jsx"},{"name":"NumberedCard","sourcePath":"components/report/NumberedCard.jsx"},{"name":"Tag","sourcePath":"components/report/Tag.jsx"}],"sourceHashes":{"components/report/BorderItem.jsx":"36e35e5f953b","components/report/Callout.jsx":"dcc6f5e821a8","components/report/GridCard.jsx":"3befaf6a5646","components/report/GroupHeader.jsx":"c40201672368","components/report/LabelRow.jsx":"ebd3f4542344","components/report/NumberedCard.jsx":"d4b36d3f4d00","components/report/Tag.jsx":"7a743fecf50f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VinylCReportDesignSystem_74722e = window.VinylCReportDesignSystem_74722e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/report/BorderItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BorderItem — 좌측보더 항목 (§3.D).
 * 제목 + 설명의 인라인 항목. 좌측 2px 보더 (A의 4px와 구분).
 */
function BorderItem({
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['border-item', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "border-item__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "border-item__desc"
  }, children));
}
Object.assign(__ds_scope, { BorderItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/report/BorderItem.jsx", error: String((e && e.message) || e) }); }

// components/report/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — 검정 강조 메시지 (§3.E-1).
 * 본문 핵심 메시지를 검정 배경으로 강조. 검정카드 시각언어 공유.
 */
function Callout({
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['callout', className].filter(Boolean).join(' ')
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    className: "callout__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "callout__body"
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/report/Callout.jsx", error: String((e && e.message) || e) }); }

// components/report/GridCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GridCard — 그리드 카드 (§3.B).
 * card-grid 컨테이너 안에 놓이는 그리드 셀 카드. 상단 3px 보더.
 */
function GridCard({
  tag,
  title,
  eg,
  children,
  dark,
  bordered,
  className = '',
  ...rest
}) {
  const cls = ['grid-card', dark && 'grid-card--dark', bordered && 'grid-card--bordered', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), tag && /*#__PURE__*/React.createElement("span", {
    className: "tag grid-card__tag"
  }, tag), title && /*#__PURE__*/React.createElement("h3", {
    className: "grid-card__title"
  }, title), eg && /*#__PURE__*/React.createElement("p", {
    className: "grid-card__eg"
  }, eg), children && /*#__PURE__*/React.createElement("p", {
    className: "grid-card__body"
  }, children));
}
Object.assign(__ds_scope, { GridCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/report/GridCard.jsx", error: String((e && e.message) || e) }); }

// components/report/GroupHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GroupHeader — 분류 구획 헤더 (§3.E-2).
 * 검정 띠 형태의 인라인 섹션 구분 헤더. 연속문서형 전용.
 */
function GroupHeader({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['group-header', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { GroupHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/report/GroupHeader.jsx", error: String((e && e.message) || e) }); }

// components/report/LabelRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LabelRow — 라벨-콘텐츠 행 (§3.C).
 * 수평 라벨 + 콘텐츠 1행. 조직·항목 나열에 사용.
 */
function LabelRow({
  label,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['label-row', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "label-row__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "label-row__content"
  }, children));
}
Object.assign(__ds_scope, { LabelRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/report/LabelRow.jsx", error: String((e && e.message) || e) }); }

// components/report/NumberedCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NumberedCard — 번호형 콘텐츠 카드 (§3.A).
 * 번호 + 제목 + 본문이 완결된 흐름(flow) 단독 배치 카드. 좌측 4px 보더.
 */
function NumberedCard({
  num,
  title,
  children,
  note,
  pending,
  variant,
  className = '',
  ...rest
}) {
  const cls = ['numbered-card', variant === 'bordered' && 'numbered-card--bordered', variant === 'thin' && 'numbered-card--thin', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "numbered-card__num"
  }, num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "numbered-card__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "numbered-card__body"
  }, children), pending && /*#__PURE__*/React.createElement("span", {
    className: "numbered-card__pending"
  }, pending), note && /*#__PURE__*/React.createElement("div", {
    className: "numbered-card__note"
  }, note)));
}
Object.assign(__ds_scope, { NumberedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/report/NumberedCard.jsx", error: String((e && e.message) || e) }); }

// components/report/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — 라벨 칩 (§3.F). 공통 4자산, 표시유형 비분기.
 * tag / badge / risk__label 을 단일 통합한 컴포넌트.
 */
function Tag({
  variant = 'solid',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const cls = ['tag', variant === 'outline' && 'tag--outline', variant === 'light' && 'tag--light', size === 'sm' && 'tag--sm', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/report/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BorderItem = __ds_scope.BorderItem;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.GridCard = __ds_scope.GridCard;

__ds_ns.GroupHeader = __ds_scope.GroupHeader;

__ds_ns.LabelRow = __ds_scope.LabelRow;

__ds_ns.NumberedCard = __ds_scope.NumberedCard;

__ds_ns.Tag = __ds_scope.Tag;

})();
