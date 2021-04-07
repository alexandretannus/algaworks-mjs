class Animal {
    sex
    
    constructor(props) {
        this.sex = props.sex
    }
}

class Human extends Animal {
    hungry = true
    name
    age

    constructor(props) {
        super(props)
        this.name = props.name
        this.age = props.age
    }

    eat(){
        this.hungry = false
    }
}

const person = new Human({
    name: 'Alexandre',
    age: 33,
    sex: 'male'
})

console.log(person);