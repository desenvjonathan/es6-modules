// > DEFAULT IMPORT / EXPORT
// export const message = "mensagem do Utils para o Main" 
// export const text = "segunda mensagem"
// essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar

// export default message //APENAS UM DEFAULT POR ARQUIVO

//também posso fazer export direto
// export default "Jonathan está estudando JS"

// export default 25 //também posso utilizar números

// export default function(){
//   return "Alô"
// }

// export {text,message} //uma forma a outra forma está acima, que seria colocando
// o export direto nas const acima



// > NAMED IMPORT / EXPORT
// const today = Date.now()
// // exportando um valor já existente
// const double = number => number * 2
// // export { double } //seria exportar só um

// export { today, double } // exportando diversos



// > MISTO (NAMED + DEFAULT IMPORT / EXPORT)
// const date = new Date()
// const greeting = name => `Hello ${name}`
// export default function (argument) {
// console.log(date, greeting(argument))
// }
// export { date, greeting }



// > IMPORT AS (serve para renomear um ou mais dados que foram exportados)
// export function sum(a, b) {
//   return a + b
// }



// > IMPORT *AS (serve para importar todos os named exports e dar um nome padrão)
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b
//ou
// export { sum, multiply, subtract, divide } //dessa forma, só tirar o export de cima