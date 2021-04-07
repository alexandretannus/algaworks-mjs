function greet() {
    console.log('bom dia');
    console.log(this);
}

// imprime contexto geral this
greet()

const person = {
    name: 'Alexandre',
    greet: function () {
        console.log(this);
    }
}

// this com o contexto do objeto em que se encontra
person.greet()

// retornando valores em uma função
function getRemainingYearsToMoajority(age) {
    return 18 - age
}

const remainingYears = getRemainingYearsToMoajority(15)

console.log(remainingYears);