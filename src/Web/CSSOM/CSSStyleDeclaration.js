"use strict";

export function cssText(style) {
  return function () {
    return style.cssText;
  };
}

export function setCssText(style) {
  return function (newCSS) {
    return function () {
      style.cssText = newCSS;
    };
  };
}

export function length(style) {
  return function () {
    return style.length;
  };
}

export function getPropertyPriority(style) {
  return function (propName) {
    return function () {
      return style.getPropertyPriority(propName);
    };
  };
}

export function getPropertyValue(style) {
  return function (propName) {
    return function () {
      return style.getPropertyValue(propName);
    };
  };
}

export function removeProperty(style) {
  return function (propName) {
    return function () {
      style.removeProperty(propName);
    };
  };
}

export function setProperty(style) {
  return function (propName) {
    return function (propValue) {
      return function () {
        style.setProperty(propName, propValue);
      };
    };
  };
}
