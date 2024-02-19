const a = () => {
  console.log(c);
  let c = 1;

  d();
  const d = () => {
    console.log('ddd');
  };
  console.log('aaa');
}
a();

let b = 0;
console.log(b);
