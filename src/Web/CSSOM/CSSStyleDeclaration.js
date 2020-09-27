"use strict";

exports.cssText = function(style) {
  return function() {
    return style.cssText;
  };
};

exports.setCssText = function(style) {
  return function(newCSS) {
    return function() {
      style.cssText = newCSS;
    };
  };
};

exports.length = function(style) {
  return function() {
    return style.length;
  };
};

exports.getPropertyPriority = function(style) {
  return function(propName) {
    return function() {
      return style.getPropertyPriority(propName);
    };
  };
};

exports.getPropertyValue = function(style) {
  return function(propName) {
    return function() {
      return style.getPropertyValue(propName);
    };
  };
};

exports.removeProperty = function(style) {
  return function(propName) {
    return function() {
      style.removeProperty(propName);
    };
  };
};

exports.setProperty = function(style) {
  return function(propName) {
    return function(propValue) {
      return function() {
        style.setProperty(propName, propValue);
      };
    };
  };
};
