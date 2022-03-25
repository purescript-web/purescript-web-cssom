// Web.CSSOM
export function getStyleSheets(doc) {
  return function() {
    return doc.styleSheets;
  };
}
