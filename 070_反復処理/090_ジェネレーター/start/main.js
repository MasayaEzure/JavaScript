function* genIterator(max = 10) {
  let i = 0;

  while (i < max) {
    yield i++;
  }

  return;
}

const it = genIterator(10);
let a = it.next();

while (!a.done) {
  // console.log(a.value);
  a = it.next();
}

const obj = {
  [Symbol.iterator]: genIterator,
};

for (const i of obj) {
  console.log(i);
}
