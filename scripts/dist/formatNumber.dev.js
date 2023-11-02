"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNumber = formatNumber;

function formatNumber(price) {
  var formatter = new Intl.NumberFormat('is-IS', {
    style: 'currency',
    currency: 'ISK'
  });
  return formatter.format(price);
}
//# sourceMappingURL=formatNumber.dev.js.map
