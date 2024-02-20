let a = 1;
function fn1() {
    let b = 2;
    function fn2() {
        let c = 3;
        console.log(b);
    }
    fn2();
}
fn1();
