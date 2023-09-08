window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

function fb(ref) {
    ref(); // この時点では関数を実行するため、グローバルオブジェクトを参照する
}

fb(person.hello);