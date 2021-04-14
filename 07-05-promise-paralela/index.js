// Definição de URL de acesso a API externa
const baseURL = 'https://jsonplaceholder.typicode.com'

// Função de obtenção de dados da API
async function getTodos() {
    const firstTodo = 
        await fetch(`${baseURL}/todos/1`).then(res => res.json())
    
    const secondTodo = 
        await fetch(`${baseURL}/todos/2`).then(res => res.json())

    const thirdTodo = 
        await fetch(`${baseURL}/todos/3`).then(res => res.json())
    
    return [firstTodo, secondTodo, thirdTodo]
}

todos = getTodos()

async function getTodosParallel() {
    const promises = Promise.all([
        fetch(`${baseURL}/todos/1`).then(res => res.json()),
        fetch(`${baseURL}/todos/2`).then(res => res.json()),
        fetch(`${baseURL}/todos/3`).then(res => res.json())        
    ])

    return promises
}

todosParallel = getTodosParallel()