var person1 = {
    name: 'Alexandre',
    age: 33,
    sex: 'male'
}

var person2 = {
    name: 'Joao',
    age: 19,
    sex: 'male'
}

var person3 = {
    name: 'Maria',
    age: 42,
    sex: 'female'
}

var list = [person1, person2, person3]

// console.log(list[1]);

for (var person of list) {
    // console.log(person);
    console.log(person.name);
}