const students = [
    { name: 'Lucas', grade: 8},
    { name: 'Joao', grade: 6},
    { name: 'Maria', grade: 6.5},
    { name: 'Joana', grade: 9},
    { name: 'Carlos', grade: 7},
]

// existem alunos que podem fazer recuperação (nota entre 4 e 6)
const retest = students.some(student => student.grade >=4 && student.grade < 6)
console.log(retest);

// todos os alunos foram aprovados
const allApproved = students.every(student => student.grade >= 6)
console.log(allApproved);