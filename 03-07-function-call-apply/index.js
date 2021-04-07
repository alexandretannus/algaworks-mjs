function sum (a,b) {
    console.log(this);
    return a + b
}

const person = {
    name: 'Alexandre'
}

// passagem do contexto de execução da função
// função call - parâmetros da função passados separadamente
console.log("Função call")
console.log(sum.call(person, 1, 2))

// função apply - parâmetros da função passados como um vetor
console.log("Função apply")
console.log(sum.apply(person, [1, 7]))