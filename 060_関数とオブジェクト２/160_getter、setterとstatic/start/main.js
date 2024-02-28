// ES5
function Person1(name, age) {
  this._name = name;
  this._age = age;
}

Person1.hello = function () {
  console.log("hello");
};

Object.defineProperty(Person1.prototype, "name", {
  get: function () {
    console.log("getter");
    return this._name;
  },
  set: function (val) {
    console.log("setter");
    this._name = val;
  },
});

const p1 = new Person1("Bob", 25);
// console.log(p1.name);
p1.name = "Taro";
// console.log(p1.name);

// ES6
class Person2 {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }

  static hello() {
    console.log("hello");
  }
}

const p2 = new Person2("Bob", 25);
console.log(p2);

Person2.hello();
