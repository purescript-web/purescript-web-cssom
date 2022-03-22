export function length(list) {
  return function () {
    return list.length;
  };
}

export function toArray(list) {
  return function () {
    return Array.prototype.slice.call(list);
  };
}

export function _item(index) {
  return function (list) {
    return function () {
      return list.item(index);
    };
  };
}
