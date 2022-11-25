let obj = {
    // プロパティ
    prop1: 'value1',
    // メソッド： オブジェクトのプロパティに格納された関数
    prpo2: function() {
        console.log('value2')
    },
    // オブジェクト
    prop3: {
        prop4: 'value4'
    }
}

console.log(obj);
console.log(obj.prop1);
obj.prpo2();
console.log(obj.prop3.prop4);