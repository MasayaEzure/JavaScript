class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1,2);
const obj2 = Reflect.construct(C, [1, 2]);

console.log("a" in obj1);
console.log(Reflect.has(obj1, "a"));

const bob = {
  name: "Bob",
  _hello() {
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: "Tom",
  _hello() {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this);
    return this._hello();
  }
}

tom.hello
Reflect.get(tom, "hello", bob);  // 第三引数：bindと同様にthisを束縛する