class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("hello " + this.name);
  }
}

const p1 = new Person("taro", 25);
console.log(p1);
p1.hello();
