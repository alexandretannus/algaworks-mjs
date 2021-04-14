// Union
type Cpf = string | number

function findPerson(cpf: Cpf) {
    if (typeof cpf === 'string') {
        return cpf.length;
    }

    return cpf.toPrecision(3)
}

// Intersection
type Animal = {
    sex: 'male' | 'female'
}

type Human = {
    hungry: boolean 
}

type Person = Animal & Human