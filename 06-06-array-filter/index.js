const students = [
    { name: 'Lucas', grade: 8},
    { name: 'Joao', grade: 4},
    { name: 'Maria', grade: 6.5},
    { name: 'Joana', grade: 5.7},
    { name: 'Carlos', grade: 7},
]

console.table(students)

// filtrar alunos com média menor que 6
const notApproved = students.filter(student => {
    return student.grade < 6
})

console.table(notApproved)