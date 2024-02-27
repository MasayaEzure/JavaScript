const d = 0;

function fn() {
  const d = 1;
  const fn1 = new Function("a", "b", "return a + b * d");
  return fn1;
}

const f = fn();
const result = f(1, 2);
console.log(result);

// console.log(fn1(1, 2));

const fn2 = function fn(a, b) {
  return a + b;
};

console.log(fn2 instanceof Function);

const obj = new function () {  // オブジェクト
  this.a = 0;
};

const fn3 = new Function('this.a = 0;'); // 関数
const obj2 = new fn3();

console.log(obj, fn3, obj2);