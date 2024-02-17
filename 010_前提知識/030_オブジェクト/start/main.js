let obj = {
    prop1: 'value1',
    prpo2: function() {
        console.log('value2')
    },
    prop3: {
        prop4: 'value4'
    }
}

console.log(obj.prop1);
console.log(obj.prop2);
obj.prop3();
console.log(obj.prop4);
console.log(obj.prop4.prop5);