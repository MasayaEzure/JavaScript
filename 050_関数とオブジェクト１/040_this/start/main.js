const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name); // person.name
    }
}

person.hello();