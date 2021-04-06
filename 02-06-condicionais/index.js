var person = {
    name: 'Alexandre',
    age: 13
}

function checkAge(person) {
    console.log('A idade da pessoa é ' + person.age);

    if (person.age > 17){
        console.log('A pessoa é maior de idade');
    } else {
        console.log('A pessoa é menor de idade');
    }
}

checkAge(person)