/* 
    Método setTimeout - executa a função uma vez apenas após um tempo de espera definido
    Parâmetros 
        callback (arrowFunction) 
        tempo de espera (em milissegundos)
*/

setTimeout(() => {
    console.log('executando timeout');
}, 3000)

/* 
    Método setInterval - executa a função em intervalo de tempo especificado
    Parâmetros 
        callback (arrowFunction) 
        tempo de espera (em milissegundos)
*/
/* 
setInterval(() => {
    console.log('execução contínua');
}, 2000) */

// parando execução de setInterval com setTimeout

const interval = setInterval(() => {
    console.log('execução contínua');
}, 2000) 

setTimeout(() => {
    clearInterval(interval)
}, 20000)