let a = 0;
// let b = a++;
// let b;
// a = (b = a) + 1;

let b = ++a;
// let b;
// a = b = a + 1;

// console.log(`a: ${a}, b: ${b}`);

function fn() {
  let a = 0;
  return a++;
}

console.log(fn());