// > DEFAULT IMPORT / EXPORT
// import qualquerNome from './utils.js' 
// // nessa linha ele importa e já executa o arquivo

// console.log(qualquerNome)

// import { message, text } from "./utils.js";
// console.log(message, text)



// > NAMED IMPORT / EXPORT
// import { double, today } from './utils.js'
// console.log(today, double(3))l



// > MISTO (NAMED + DEFAULT IMPORT / EXPORT)
// import funcaoPadrao, { date, greeting } from './utils.js'

// //console.log(date, greeting('Jonathan')) //Pode ser executa assim
// funcaoPadrao('Jonathan') //Também pode ser executa assim



// > IMPORT AS
// import { sum as soma } from './utils.js' 
// //"as" significa que vai trocar o nome de sum, para soma
// console.log(soma(1, 3))



// > IMPORT *AS
import * as calculator from './utils.js' //import tudo e chamar de calculator

console.log(calculator.sum(40, 4))
console.log(calculator.subtract(40, 4))
console.log(calculator.multiply(40, 4))
console.log(calculator.divide(40, 4))