 function addNumberFactory(num) {
     function addNumber(value) {
         let sum = num + value;
         return sum;
     }
     return addNumber;
 }

 // addNumberFactoryの引数umに値が格納される
 // addNumberの引数valueには値は入らず、numの値を保持している状態
 const add5 = addNumberFactory(5);
 const add10 = addNumberFactory(10);
 //  addNumberの引数valueに値が格納される
 const result = add10(10);
 console.log(result);