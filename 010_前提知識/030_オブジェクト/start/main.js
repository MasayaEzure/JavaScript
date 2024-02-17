let obj = {
    prop1: 'value1',
    prpo2: function() {
        console.log('value2')
    },
    prop3: {
        prop4: 'value4'
    }
}

console.log(obj);
console.log(obj.prop1);
obj.prpo2();
console.log(obj.prop3.prop4);