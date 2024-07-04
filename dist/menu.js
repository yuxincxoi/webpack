"use strict";

var root = document.getElementById('root');
var anchorTags = function anchorTags(href, textNode) {
  var result = "<a href=\"#".concat(href, "\">").concat(textNode, "</a>");
  return result;
};
var liTags = function liTags(children) {
  var result = "<li>".concat(children, "</li>");
  return result;
};
var basicData = {
  jaemin: "재민",
  hoyoung: "호영",
  yujin: "유진",
  jiyoon: "지윤"
};
var totalElement = function totalElement(obj) {
  var result = '';
  for (var key in obj) {
    // TypeScript가 key가 BasicData의 키인 것을 알게 함
    var value = obj[key];
    result += liTags(anchorTags(key, value));
  }
  return result;
};
root.innerHTML = "\n  <ul>\n    <li>".concat(totalElement(basicData), "</li>\n  </ul>\n  <main id=\"main-target\"></main>\n");

// * --------------------------------- 
// * HTML을 대신해서 만든 HTML 작성 코드
// * React, CSR

var mainTarget = document.getElementById("main-target");
console.log(window.location.hash);