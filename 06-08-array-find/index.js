const students = [
    { name: 'Lucas', grade: 8},
    { name: 'Joao', grade: 4},
    { name: 'Maria', grade: 6.5},
    { name: 'Joana', grade: 5.7},
    { name: 'Lucas', grade: 4},
    { name: 'Carlos', grade: 7},
]

// Realizar busca sobre um array. Encontra apenas o primeiro item
const specificStudent = students.find((student) => {
    if (student.name === 'Lucas' ) {
        return true
    }
})
console.log(specificStudent);
