/**
 * Metodo Find: Tambien funciona como un bucle, sirve para encontrar un elemento
 * Me devuelve el primer elemento que cumpla la condicion dada
 */

// En este caso busco el primer numero impar
let numeros = [2, 4, 5, 6, 7, 8, 9, 10]
let encontrar = numeros.find(num => num % 2 === 1)
console.log("----FIND----")
console.log(encontrar)


/**
 * Metodo includes: Tambien funciona como un bucle, sirve para saber si un elemento dado se encuentra o no
 * Este me devuelve solo True o False
 * Y evalua si el elemente es exactamente igual (===)
 */

// En este caso preguntamos si esta incluido un dato en el array
let incluye = numeros.includes("7")
console.log("----INCLUDES----")
console.log(incluye)


/**
 * Metodo Some: Tambien funciona como bucle, sirve para saber si se encuentra al menos un elemento
 * que cumpla una condicion dada
 * Me devuelve True o False
 */

// En este caso evaluamos si existe al menos un string en el array
let algun = numeros.some(num => typeof num === "string")
console.log("----SOME----")
console.log(algun)


/**
 * Metodo Every: Tambien funciona como bucle, sirve para saber si cada uno de los elementos iterados
 * cumplen o no con una condicion dada
 * Me devuelve True o False
 */

// En este caso verificamos si todos los elementos son numeros
let todos = numeros.every(num => typeof num === "number")
console.log("----EVERY----")
console.log(todos)