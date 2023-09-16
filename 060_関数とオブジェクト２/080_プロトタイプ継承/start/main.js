function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

function Japanese(name, age, gender) {
    Person.call(this, name, age);
    this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
    console.log('hello ' + this.name + ', ' + this.age + '歳' + ' 性別：' + this.gender);
}

Japanese.prototype.bye = function() {
    console.log('bye ' + this.name);
}

const taro = new Japanese('Taro', 25, 'male');
console.log(taro);
taro.hello();
taro.bye();