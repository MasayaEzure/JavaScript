import "./moduleA.js";

console.log(this); // モジュールコンテキスト
const a = 0;

function fn() {
  console.log(this);
  console.log(a);
}

fn();

const obj = {
  fn,
};

obj.fn();

console.log(d);
