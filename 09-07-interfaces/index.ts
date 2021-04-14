interface Animal {
    isAlive: boolean
}

interface Person extends Animal{
    name: string
    age: number
}

// Interfaces podem repetir o identificador. Evitar a utilização
interface Person {
    sex: 'male' | 'female'
}

const person: Person = {
    age: 21,
    name: 'Joao',
    sex: "male",
    isAlive: true
}