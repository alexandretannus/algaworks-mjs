const parts = ['ombro', 'joelho', 'olhos']
const sentence = ['cabeca', parts[0], parts[1], 'pés']
const sentence2 = ['cabeca', ...parts]

// Spread operator em parâmetros de funções
function createUser(name, age, ...contacts) {
    return {
        name,
        age,
        contacts
    }
}

// Spread operator para imutabilidade
const immutableArray = ['select', '*', 'from', 'posts']
// const mutableArray = immutableArray // referência dos dois fica igual
const mutableArray = [...immutableArray] // copia o conteúdo de immutableArray para mutableArray
mutableArray.push('where id = 1')