"use strict";

exports.cssText = function (style) {
  return function () {
    return style.cssText;
  };
};

exports.setCssText = function (newCSS) {
  return function (style) {
    return function () {
      style.cssText = newCSS;
    };
  };
};

exports.length = function (style) {
  return function () {
    return style.length;
  };
};

exports.getPropertyPriority = function (propName) {
  return function (style) {
    return function () {
      return style.getPropertyPriority(propName);
    };
  };
};

exports.getPropertyValue = function (propName) {
  return function (style) {
    return function () {
      return style.getPropertyValue(propName);
    };
  };
};

exports.removeProperty = function (propName) {
  return function (style) {
    return function () {
      style.removeProperty(propName);
    };
  };
};

exports.setProperty = function (propName) {
  return function (propValue) {
    return function (style) {
      return function () {
        style.setProperty(propName, propValue);
      };
    };
  };
};
