function showAge() {
    var age = 21
}

// undefined - variável definida no escopo da função
//console.log(age);

var age2 = 22

if (age2 > 18) {
    var test = 'maior'
}

// funciona - escopo de bloco
console.log(test);