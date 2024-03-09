new Promise(function (resolve, reject) {
  console.log("promise");
//   reject("bye");
  setTimeout(function () {
    resolve("hello");
  }, 1000);
})
  .then(function (data) {
    console.log(data);
    // throw new Error();
    return data;
  })
  .then(function (data) {
    console.log(data);
    return data;
  })
  .catch(function (data) {
    console.log(data);
  })
  .finally(function (data) {
    console.log("finally");
  });

console.log("global end");
