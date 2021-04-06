const age = 18

// Constantes não podem ser redeclaradas
// const age = 23

// Constantes não podem ter valor reatribuído
//age = 25
console.log(age);

const person = {
    name: 'Alexandre',
    age: 33
}

// Atributos podem ser alterados
person.age = 32
console.log(person);

// Escopo do const
if (age > 18) {
    const pastYears = age - 18
    console.log(pastYears);
}

// não funciona - constantes possuem escopo de bloco
// console.log(pastYears);