"use strict";

exports.style = function(el) {
  return function() {
    return el.style;
  };
};
