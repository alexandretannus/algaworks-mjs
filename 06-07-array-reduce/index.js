const students = [
    { name: 'Lucas', grade: 8},
    { name: 'Joao', grade: 4},
    { name: 'Maria', grade: 6.5},
    { name: 'Joana', grade: 5.7},
    { name: 'Carlos', grade: 7},
]

console.table(students)

// Somatório das notas utilizando forEach
let totalGrade = 0
students.forEach(student => {
    totalGrade += student.grade
})
console.log(totalGrade);

// Somatório das notas com Array.reduce
const classroomTotalPoints = students.reduce((prev, current) => {
    console.log(prev);
    console.log(current);
    return prev + current.grade
}, 0)
console.log(classroomTotalPoints);