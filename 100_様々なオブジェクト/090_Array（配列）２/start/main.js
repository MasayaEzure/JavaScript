const arry = [1, 2, 3, 4, 5];

arry.forEach(function(v,i, arry) {
    console.log(v, i);
});

const newArr = arry.map(function(v) {
    return v * 2;
});

console.log(newArr);

const filterArr = arry.filter(function(v, i, arry) {
    return i >= 2;
});

console.log(filterArr);