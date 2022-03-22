// Web.CSSOM
"use strict";

export function getStyleSheets(doc) {
  return function() {
    return doc.styleSheets;
  };
}
