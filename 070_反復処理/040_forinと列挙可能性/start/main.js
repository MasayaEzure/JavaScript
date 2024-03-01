const s = Symbol();
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]: 'value4'
}

// Object.defineProperty(obj, 'prop1', {
// 	enumerable: false
// })

Object.prototype.method = function() {}
Object.defineProperty(Object.prototype, 'method', {
	enumerable: true
});

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'method'));
console.log(Object.getOwnPropertyDescriptor(obj, s));

for (let key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(key, obj[key]);
	}
}