function a() {
    console.log('aaa');
}

a.prop = 0;
a.method = function() {
    console.log('method');
}

a();
console.log(a.prop);
a.method();