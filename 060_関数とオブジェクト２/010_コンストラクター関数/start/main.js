function Person(name, age) {
  this.name = name;
  this.age = age;
};

const p1 = new Person('Bob', 25);
const p2 = new Person('Tom', 30);
const p3 = new Person('John', 40);

console.log(p1.name, p1.age);
console.log(p2.name, p2.age);
console.log(p3.name, p3.age);