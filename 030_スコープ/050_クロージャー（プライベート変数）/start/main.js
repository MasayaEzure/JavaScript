function incrementFactory() {

    // プライベート変数
    let num = 0;

    function increment() {
        num += 1;
        console.log(num);
    }

    // 関数を返却
    return increment;
}

const inc = incrementFactory();

inc();
// inc();
// inc();
// inc();
// inc();