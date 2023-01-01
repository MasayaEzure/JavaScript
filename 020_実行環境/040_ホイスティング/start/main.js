//  無名関数（関数式）
const a = function() {
    console.log(number) // Error
    let number = 1;

    b(); // b is called.

    function b() {
        console.log('b is called.');
    }
    console.log('a is called.');
}

a(); // a is called.

console.log(num); // Error
let num = 0;
console.log(num); // 0