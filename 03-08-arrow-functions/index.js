/* 
    Function declaration
    Declaração de função com palavara reservada function

    Function expression
    Atribuição de uma função para uma variável/constante
*/


const getRemainingYearsToMajority = (age) => 18 - age
console.log(getRemainingYearsToMajority(13));

// contexto do this em arrow functions - contexto onde é executada a função
// não é possível mudar o contexto com apply ou call
const me = {
    name: 'Alexandre',
    age: 30,
    greet : () => {
        console.log(this);
    }    
}

me.greet()
me.greet.call(me)