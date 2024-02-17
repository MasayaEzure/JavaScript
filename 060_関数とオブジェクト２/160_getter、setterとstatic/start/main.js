function Person1(name, age) {
    this._name = name;
    this._age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
    get: function() {
        return this._name;
    },
    set: function(val) {
        this._name = val;
    }
});

const p1 = new Person1('Bob', 25);
console.log(p1.name); // Bob
p1.name = 'Tom';
console.log(p1.name); // Tom

// ES6では下記のように実装する
class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() { // getter
        return this._name;
    }

    set name(val) { // setter
        this._name = val;
    }

    static hello() {
        console.log('hello');
    }
}

const p2 = new Person2('Taro', 25);

Person2.hello(); //　staticメソッド（インスタンス化不要で実行可能）