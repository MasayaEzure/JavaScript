function hello(name) {
    name = name || 'Tom';
    console.log('Hello ' + name);
}

hello('Bob');
hello('');

let name = 'Bob';
// name が truthy な場合のみ、関数が実行される
name && hello(name);