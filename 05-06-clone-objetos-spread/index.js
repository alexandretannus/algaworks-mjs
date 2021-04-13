const user = {
    name: 'Alexandre',
    email: 'eu@eu.com'
}

const newUserSpread = {...user}

// cria usuário newUser com a mesma referência de user
// modificação de newUser é refletida em user
const newUser = user

newUser.email = 'Alex'
newUser.name = 'alex@aaa.br'

