class Human {
    hungry = true
    awake = true

    eat(){
        this.hungry = false
    }
}

// não pode ser utilizada arrow function
// hoisting não funciona para prototype
Human.prototype.sleep = function() {
    this.awake = false
}

const person = new Human()
person.sleep()
