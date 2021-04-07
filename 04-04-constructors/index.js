class Human {
    hungry = true
    name
    sex
    age

    constructor(props) {
        this.name = props.name
        this.age = props.age
        this.sex = props.sex
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