function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() { // 優先度：1
        console.log('OwnProperty: hello ' + this.name);
    }
}

Person.prototype.hello = function() { // 優先度：2
    console.log('Person: hello ' + this.name);
}

Object.prototype.hello = function() { // 優先度：3
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
bob.hello();

console.log(bob.hasOwnProperty('name')); // true
console.log(bob.hasOwnProperty('gender')); // false