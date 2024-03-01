const map = new Map();
const key1 = {};
const key2 = function () {};
let key3 = 0;

map.set(key1, "value1");
map.set(key2, "value2");
map.set(key3, "value3");
map.delete(key1);

console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));

for (const [k, v] of map) {
  console.log(`${k} : ${v}`);
}

const s = new Set();
s.add(key1);
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key1);
console.log(s.has(key1));

// const arr = Array.from(s);
const arr = [...s];
console.log(arr);

for (let k of s) {
  console.log(k);
}
