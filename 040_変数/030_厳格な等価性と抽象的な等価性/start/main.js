function printEquality(a, b) {
    // 型比較あり
    console.log(a === b);
    // 型比較なし　
    console.log(a == b);
}

let a = '1';
let b = 1;
// printEquality(a, b);

let c = true;
// printEquality(b, c);

let e = "";
let f = 0;
let g = '0';
printEquality(g, f);