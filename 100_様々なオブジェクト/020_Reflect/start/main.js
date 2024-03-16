class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj = new C(1, 2);
console.log(obj);
const obj2 = Reflect.construct(C, [1,2]);
console.log(obj2);

console.log("a" in obj2);
console.log(Reflect.has(obj, "a"));

const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this);
    return this._hello();
  },
}

tom.hello;
Reflect.get(tom, "hello", bob); // 第三引数は bind と同様の挙動をとる