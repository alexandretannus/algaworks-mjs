var person = {
    name: 'Alexandre',
    age: 13
}

// função pura - não altera o dado original
function getRemainingYearstoMajorty(person) {
    return 18 - person.age
}

// função impura - gera efeitos colaterais
function increasePersonAge(person) {
    person.age = person.age + 1
}

increasePersonAge(person)
var remainingYears = getRemainingYearstoMajorty(person)

console.log(remainingYears);