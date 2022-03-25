export function cssText(style) {
  return function () {
    return style.cssText;
  };
}

export function setCssText (newCSS) {
  return function (style) {
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

export function getPropertyPriority(propName) {
  return function (style) {
    return function () {
      return style.getPropertyPriority(propName);
    };
  };
}

export function getPropertyValue(propName) {
  return function (style) {
    return function () {
      return style.getPropertyValue(propName);
    };
  };
}

export function removeProperty(propName) {
  return function (style) {
    return function () {
      style.removeProperty(propName);
    };
  };
}

export function setProperty(propName) {
  return function (propValue) {
    return function (style) {
      return function () {
        style.setProperty(propName, propValue);
      };
    };
  };
}
