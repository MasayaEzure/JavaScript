function fn() {
    const a = arguments[0],
        b = arguments[1];
    console.log(a, b);
    console.log(arguments); // 実引数
    return a;
}

fn(0, 1);
fn(0, null); //デフォルトではなく、nullが渡る

const c = fn(1, undefined);
console.log(c);