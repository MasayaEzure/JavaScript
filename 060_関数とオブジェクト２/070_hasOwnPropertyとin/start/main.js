function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);

console.log(bob.hasOwnProperty('name'));
console.log(bob.hasOwnProperty('hello'));

console.log('name' in bob);
console.log('hello' in bob);