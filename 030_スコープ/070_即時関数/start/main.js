function a() {
    console.log('called!');
}
a();

// 即時関数
let b = (function() {
    console.log('called!');

    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called.');
    }

    function publicFn() {
        console.log('publicFn is called. ' + privateVal++);
    }

    return {
        // 変数名とプロパティ名が一致する場合、valueの部分は省略可能
        publicVal,
        publicFn
    };
})();

b.publicFn();
b.publicFn();
b.publicFn();
b.publicFn();

console.log(b.publicVal);