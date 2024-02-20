(function () {
  console.log("called");
})();

const a = (function (num) {
  console.log(num);
  return;
})(10);

const b = (function () {
  console.log("aaa");

  let privateVal = 0;
  let publicVal = 10;

  function privateFunc() {
    console.log(privateVal);
  }
  function publicFunc() {
    console.log(publicVal);
  }

  return {
    privateVal,
    publicVal,
  };
})();

console.log(b.publicVal);
console.log(b.privateVal);
