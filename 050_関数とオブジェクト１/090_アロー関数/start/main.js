const a = name => `hello ${name}`;
const b = (name, age) => {
    return `name: ${name} age: ${age}歳`;
};
const c = () => 'hello';

console.log(a('Tom'));
console.log(b('Tom', 25));
console.log(c());