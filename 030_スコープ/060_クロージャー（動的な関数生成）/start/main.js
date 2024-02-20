function addNumberFactory(num) {
  function addNumber(val) {
    return num + val;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
console.log(add5(10));
console.log(add10(10));
