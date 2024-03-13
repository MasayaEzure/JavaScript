"use strict";
function fn() {
  return this;
  // a = 0;
  // const implements, interface, package
}
// console.log(a);
console.log(fn.call(2));
