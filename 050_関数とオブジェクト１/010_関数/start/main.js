function fn(a, b = 1) {
    console.log(a, b);
    return a + b;
}

fn(1, null); // デフォルト値適用されず
fn(3);
const c = fn(1, 2);
console.log(c);