function sum (a, b) {
    //console.table(arguments);
    return a + b
}

console.log(sum(3, 5));


// possível recuperar argumentos não declarados explicitamente
function sum2 () {
    return arguments[0] + arguments[1]
}

console.log(sum2(6, 5, 12));

// arguments não disponíveis em arrow functions de forma implícita
const sum3 = () => {    
    return arguments[0] + arguments[1]
}
console.log(sum3(8, 9));

// erro por falta de passagem de parâmetros
const sum4 = (a,b) => a + b

console.log(sum4(3));

// definição de valores padrão para parâmetros
const sum5 = (a = 1, b = 3) => a + b


// resultado = 11 -> utiliza valores informados para a e b
console.log(sum5(7, 4));
// resultado = 6 -> utiliza valor padrão de b
console.log(sum5(3));
// resultado = 4 -> utiliza valores padrão de a eb
console.log(sum5());
