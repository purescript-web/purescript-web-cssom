var getProp = function (name) {
  return function (sheet) {
    return sheet[name];
  };
};

export const disabled = getProp("disabled");
export const _href = getProp("href");
export const _ownerNode = getProp("ownerNode");
export const _parentStyleSheet = getProp("parentStyleSheet");
export const _title = getProp("title");
export const _type = getProp("type");

export function setDisabled(bool) {
  return function (sheet) {
    return function () {
      sheet.disabled = bool;
    };
  };
}

export function toggleDisabled(sheet) {
  return function () {
    var bool = !sheet.disabled;
    sheet.disabled = bool;
    return bool;
  };
}
