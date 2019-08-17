// Web.CSSOM
"use strict";

exports.getStyleSheets = function(doc) {
  return function() {
    return doc.styleSheets;
  };
};
