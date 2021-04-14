
async function handleClick() {

    await sleep(3000)

    // retorna promise rejeitada
    //throw('Erro na execução')

    // retorna promise resolvida
    return "Promise executada"
}

function sleep(timeMs) {
    return new Promise(
        resolve => { setTimeout(() => resolve(true), timeMs)}
    )
}