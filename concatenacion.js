/**
 * Operadores de Concatenación.
 * Cuando queremos juntar dos textos:
 */

let nombre = "Guido"
let apellido = "Castillo"
let nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

/**
 * Template Strings: Se hacen con la comilla que es un acento invertido `alt gr + tecla arriba de enter`.
 * La diferencia es que dentro de estas comillas se pueden añadir variables y operaciones.
 * Con el signo $ seguido de llaves {} se pueden añadir variables o cualquier operación.
 */

let nickname = `Mi nombre es ${nombre} y mi apellido es ${apellido}`
let suma_string = `Sumar 2 + 2 es igual a ${2+2}`
let compara_string = `Es 20 mayor a 4? La respuesta es: ${20>4}`
console.log(nickname)
console.log(suma_string)
console.log(compara_string)