/**
 * Operadores logicos: and y or
 * AND se escribe &&
 * OR se escribe ||
 */
// Recordar que con el operador 'and' se tienen que cumplir todas las condiciones escritas
let a = 10
let b = 20
let c = 30
let compara = b > a && b > c
// Tambien se pueden agrupar entre parentesis:
compara = (b > a) && (b > c)
console.log(compara)

//En cambio con el operador 'or' se tiene que cumplir solo una de las condiciones escritas
compara = (b < a) || (b < c)
console.log(compara)