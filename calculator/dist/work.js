"use strict";

var _add = _interopRequireDefault(require("./add"));
var _multiply = _interopRequireDefault(require("./multiply"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
console.log("add : ".concat((0, _add["default"])(1, 2)));
console.log("multiply : ".concat((0, _multiply["default"])(1, 2)));