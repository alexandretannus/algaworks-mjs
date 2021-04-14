
// tipagem objetos
const person: {
    name: string
    age: number
    contacts: string[]
} = {
    age: 33,
    name: 'Alexandre',
    contacts: []
}

// abstração de tipo
// propriedade contacts é opcional
type Person = {
    name: string
    age: number
    contacts?: string[]
}

const person2: Person = {
    name: 'Joao',
    age: 41,
    contacts: []
}