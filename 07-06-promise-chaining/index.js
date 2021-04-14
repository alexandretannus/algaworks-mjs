const baseURL = 'https://jsonplaceholder.typicode.com/todos/1'

// forma mais verbosa 
/* fetch(baseURL)
    .then(async res => {
        const data = await res.json() // método json() é uma promise
        console.log(data);
    }) */

// Utilizando promise chaining
fetch(baseURL)
    .then(res => res.json())
    .then(data => console.log(data))