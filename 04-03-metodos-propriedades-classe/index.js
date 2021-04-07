class Human {
    hungry = true

    eat(){
        this.hungry = false
    }
}

const person = new Human()

console.log(person);
console.log(person.hungry);
person.eat();
console.log(person);