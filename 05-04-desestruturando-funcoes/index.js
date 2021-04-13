function createUser(name, age, email) {
    return {
        name,
        age,
        contact: {
            email
        }
    }
}

const user = createUser('Joao', 75, 'joao@teste.com')

const { name } = createUser('Joao', 75, 'joao@teste.com')


// Função com passagem de parâmetros desestruturados
function createUser2({ name, age, email }) {
    return {
        name,
        age,
        contact: {
            email
        }
    }
}

const user2 = createUser2({
    name: 'Joao', 
    age: 47, 
    email: 'joao@teste.com'
})