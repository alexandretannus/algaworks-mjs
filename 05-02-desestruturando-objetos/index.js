const person = {
    name: 'Alexandre',
    age: 33,
    contact: {
        email: 'teste@server.com'
    }
}
/* 
const name = person.name
const age = person.age */

// desestruturação de propriedade única
//const { name } = person

// desestruturação de múltiplas propriedades
//const { name, age } = person

// desestruturação de estrutura aninhada
//const { contact: { email } } = person

// desestruturação de propriedade com criação de alias
const { name: personName } = person