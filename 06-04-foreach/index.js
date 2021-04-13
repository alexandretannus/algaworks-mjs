const fruits = [ 'laranja', 'morango', 'manga']

function eatAllFruits() {    
    // Sem parâmetros
    fruits.forEach(() => {
        console.log('Comi uma fruta');
    })

    // Buscando os elementos do array    
    fruits.forEach((fruit) => {
        console.log(`Comer ${fruit} é saudável!`);
    })
    
    // Buscando os elementos do array e recuperando o índice 
    fruits.forEach((fruit, index) => {
        console.log(`Comer ${fruit} é saudável!`);
        console.log(`Quantidade de frutas que comi: ${index + 1}`);
    })
}

eatAllFruits()