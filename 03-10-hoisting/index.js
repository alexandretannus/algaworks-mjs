/*
    Hoisting (içamento)
    Funções declaradas com a palavra function são içadas para o início do código na execução. 
    Não funciona com arrow functions
*/
//const sum = (a = 1, b = 3) => a + b

const result = sum(1,2)

function sum (a = 1, b = 3) { 
    return a + b
}

console.log(result);