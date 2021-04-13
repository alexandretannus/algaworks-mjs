function greet() {
    
    // Não funciona. Tipo de arguments não possui foreach disponível
    /* arguments.forEach(argument => {
        console.log(`Hello, ${argument}`);
    }); */

    // cria um array a partir de arguments
    // const args = Array.from(arguments)

    // cria um array com uma função map embutida
    const args = Array.from(arguments, (name) => `${name}!!!`)
    
    args.forEach(argument => {
        console.log(`Hello, ${argument}`);
    });    
}

greet('Joao', 'Maria')

