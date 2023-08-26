let obj = {
    // 名前：値
    prop1: 'value1',
    prop2: 'value2',
    // 名前：関数
    prop3: function() {
        console.log('value3');
    },
    // 名前：オブジェクト
    prop4: { prop5: 'value5' }
};

console.log(obj.prop1);
console.log(obj.prop2);
obj.prop3();
console.log(obj.prop4);
console.log(obj.prop4.prop5);