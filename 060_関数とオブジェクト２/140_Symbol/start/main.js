const s = Symbol('hello'); // プリミティブ型
const s2 = Symbol('hello');

console.log(s);
console.log(typeof s);
console.log(s === s2); // false

const str = new String('Tom');
console.log(str);

String.prototype[s] = function() {
    return 'hello ' + str;
};

const tom = 'Tom';
console.log(tom[s]());