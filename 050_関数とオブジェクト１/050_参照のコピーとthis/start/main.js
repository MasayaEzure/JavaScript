window.name = "John";
const person = {
  name: "Tom",
  hello: function () {
    console.log("Hello " + this.name); // this:呼び出し元のオブジェクト
    a();

    const person = {
      name: "Taro",
      hello: function () {
        console.log("Hello " + this.name);
        a();
      }
    }
    person.hello();
  },
};
person.hello();
// a();

// const ref = person.hello; // this:グローバル(window)オブジェクト
// ref();

function a() {
    console.log("Hello " + this.name);
}