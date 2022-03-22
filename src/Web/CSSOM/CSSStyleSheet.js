"use strict";

var getProp = function (name) {
  return function (sheet) {
    return sheet[name];
  };
};

export var disabled = getProp("disabled");
export var _href = getProp("href");
export var _ownerNode = getProp("ownerNode");
export var _parentStyleSheet = getProp("parentStyleSheet");
export var _title = getProp("title");
export var _type = getProp("type");

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
