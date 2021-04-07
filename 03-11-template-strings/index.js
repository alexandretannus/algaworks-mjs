const name = 'Alexandre'
const age = 33

const sentence = 'Olá, meu nome é ' + name + ' e tenho ' + age + ' anos'

// template string - interpolação utilizando ${}. permite quebra de linha e identação
const sentence2 = `Oi, eu sou ${name} e tenho ${age} anos`

console.log(sentence);
console.log(sentence2);