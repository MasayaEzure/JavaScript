const a = [1, 2, 3, 4, 5];
const b = [0, ...a];
b.push(6);

console.log(a);
console.log(b);
console.log(a === b);

function sum(...args) {
  let result = 0;
  for (let v of args) {
    result += v;
  }
  return result;
}

console.log(sum(1, 2, 3, 4));

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function* () {
    for (let key in this) {
        yield [key, this[key]];
    }
}

const arr = [...obj];
console.log(arr);