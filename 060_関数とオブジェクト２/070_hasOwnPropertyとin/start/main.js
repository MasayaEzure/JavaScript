function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);

console.log(bob.hasOwnProperty('name')); // true
console.log(bob.hasOwnProperty('hello')); // false

console.log('name' in bob); // true
console.log('hasOwnProperty' in bob); // true
console.log('bye' in bob); // false