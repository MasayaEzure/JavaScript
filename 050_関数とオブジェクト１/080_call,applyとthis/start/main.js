function a(name, age) {
    console.log('hello ' + name + ' ' + age + '歳');
}
const tim = { name: 'Tim' };
const b = a.bind(tim); // 関数は実行しない
b();

a.apply(tim, ['Tim', 25]); //第二引数に指定するのは配列
a.call(tim, 'Tim'); // 第二引数以下は、関数の引数を指定することができる


const arry = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, arry));
console.log(Math.max(...arry));　 // E6ではスプレッド演算子を利用する