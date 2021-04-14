// Criação de tipos personalizados
type Cpf = string | number
type Sex = 'male' | 'female' | undefined

const cpf:Cpf = 45
const cpf2: Cpf = '678'
// const cpf3: Cpf = undefined // nao funciona, undefined não é aceito

const personSex: Sex = undefined
const sex2: Sex = 'male'
// const sex3: Sex = null // não funciona. null não é um tipo aceito