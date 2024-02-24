function a(name1, name2) {
    console.log(`hello ${name1} ${name2}`);
}
const tim = {name: 'Tim'};
const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Taro']);
a.call(tim, 'Jiro');

const arr = [1,2,3,4,5];
// console.log(Math.max.apply(null, arr));
console.log(Math.max(...arr));