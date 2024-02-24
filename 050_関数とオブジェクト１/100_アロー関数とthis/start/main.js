window.name = "John";

const person = {
  name: "Tom",
  hello() {
    console.log("Hello " + this.name);
    a();
  },
  hello2: () => {
    console.log(`Hello ${this.name} from hello2`);
  },
};
const a = () => console.log(`Bye ${this.name}`);

person.hello();
person.hello2();

function b() {
  const a = () => console.log(`Bye ${this.name}`);
  a();
}
b();