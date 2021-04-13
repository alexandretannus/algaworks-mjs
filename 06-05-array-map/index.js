const fruits = [ 'laranja', 'morango', 'manga']

// retorna um novo array com os elementos em caixa alta. 
const capitalizedFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
})

console.log(capitalizedFruits);
