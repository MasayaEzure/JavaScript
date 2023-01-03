function a() {
    console.log('called!');
}
a();

// 即時関数には()をつける必要がある
let b = (function() {
    console.log('called!');

    // 即時関数内でしか使うことができない
    let privateVal = 0;
    let publicVal = 10;

    // 即時関数内でのみ利用できる関数
    function privateFn() {
        console.log('privateFn is called.');
    }

    function publicFn() {
        console.log('publicFn is called. ' + privateVal++);
    }

    return {
        publicVal,
        publicFn
    };
})();

b.publicFn();
b.publicFn();
b.publicFn();
b.publicFn();

console.log(b.publicVal);