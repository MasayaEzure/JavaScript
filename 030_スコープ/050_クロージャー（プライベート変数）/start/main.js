function incrementFactory() {
    let a = 1; // プライベート変数
    function increment() {
        console.log(a++);
    }
    return increment;
}

const increment = incrementFactory();
increment();
increment();
increment();