const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.pop();
arr.shift();
arr.unshift(0);

const result = arr.splice(0, 3, 1, 2, 3);
console.log(arr);
console.log(result);

const arr2 = [0, ...arr, 6, 7];
console.log(arr2);