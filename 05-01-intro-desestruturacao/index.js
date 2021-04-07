const person = {
    name: 'Alexandre',
    age: 33
}

function introduce({name, age}) {
    console.log(`oi! meu nome é ${name} e tenho ${age} anos`);
}

const fruits = ['banana', 'morango', 'manga']

const [firstFruit, secondFruit] = fruits