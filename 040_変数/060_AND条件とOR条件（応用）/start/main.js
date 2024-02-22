function hello(name = 'Tom') {
  // name = name || "Tom";
  console.log(`hello ${name}`);
}

hello("Bob");
hello();

let name = 'Taro';
name && hello(name);