function handleClick() {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            //resolve('Sucesso')
            reject('Falha')
        }, 5000)
    })
}


const result = handleClick()
                    // método then - acionado com resolve da promise
                    .then((res) => {       
                        // true
                        console.log('Sucesso' === res);
                        console.log('Finalizado com sucesso');

                        return res
                    })
                    // método catch - acionado com reject da promise
                    .catch (err => {
                        console.log(err);
                        return err
                    })

// Resultado false     
setTimeout(() => {
    // console.log(`Teste triplo =: ${'Sucesso' === result}`);
    console.log(`Teste triplo =: ${'Falha' === result}`);
}, 5001)               

// Resultado false          
setTimeout(() => {
    console.log(`Teste duplo =: ${'Sucesso' == result}`);
}, 5001)                  

// Resultado undefined caso não haja return no then
setTimeout(() => {
    console.log(result);
}, 5001)        