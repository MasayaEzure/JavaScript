const wm = new WeakMap();
let obj = {};
wm.set(obj, "val1");

console.log(wm.delete(obj));
console.log(wm.get(obj));