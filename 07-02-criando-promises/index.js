const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Promise resolvida 
        //resolve('Sucesso')

        // Promise rejeitada
        reject('Falhou')
    }, 5000)
})
