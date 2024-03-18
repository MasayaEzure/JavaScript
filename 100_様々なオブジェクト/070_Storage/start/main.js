const obj = { a: 0 };
const json = JSON.stringify(obj);

localStorage.setItem("key", json);
const result = localStorage.getItem("key");
const parsedObj = JSON.parse(result);
console.log(parsedObj);
