const fruits = ['banana', 'morango', 'manga']

// Forma sem desestruturação
// const firstFruit = fruits[0]
// const secondFruit = fruits[1]

// Com desestruturação
// const [firstFruit, secondFruit] = fruits

// Desestruturação ignorando itens
// const [, secondFruit] = fruits

const person = { name: 'João', age: '33'}
const person1 = { name: 'Maria', age: '21'}
const person2 = { name: 'Ana', age: '45'}

const friends = [ person, person1, person2]
console.table(friends)

// Desestruturução de objetos dentro de arrays
const [, {name}] = friends


const chart = [[1, 2], [3, 7], [0,4]]

// Desestruturação de arrays dentro de arrays
const [,[,num11]] = chart