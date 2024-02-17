// let：再宣言不可
let a = 0;
// let a = 0;

// var：再宣言可能
var b = 0;
var b = 1;

// 再代入可能
let C = 0;
c = 1;

// 再代入不可
const d = 1;
// d = 2;

// ブロックスコープ
{
    let e = 1;
    var f = 10; // ブロックスコープ外からも参照可能
}

// ホスティング
console.log(h);
let g = 8;
var h = 9; // 初期値の undefined がコンソールに出力される