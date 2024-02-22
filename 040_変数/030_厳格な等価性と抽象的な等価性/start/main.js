const printEquality = (val1, val2) => {
  console.log(val1 === val2);
  console.log(val1 == val2);
};

let a = "1";
let b = 1;
// printEquality(a, b);

let c = true;
// printEquality(b, c);

let e = ""; // 「==」だと、ToNubmerで0に変換される
let f = 0;
let g = '0';
// printEquality(e, f);
printEquality(f, g);
