/**
 * Es la capacidad que tiene JavaScript de convertir un dato en otro tipo de dato
 */

let a = 50
let b = "20"
/**
 * Cuando se suma convierte el tipo numérico a String y procede a realizar una concatenación.
 * JavaScript priorizará la implementación del operador de concatenación sobre el de suma
 */
console.log(a+b)

/**
 * El signo - esta estrictamente relacionado con los operadores aritméticos
 * Por lo cual intentará convertir todos los datos a tipo numérico y realizará la operación
 */
console.log(a-b)

/**
 * NaN: Not a Number
 * Contradictorio a lo que pueda sonar, NaN es de tipo Number.
 * JavaScript antes de realizar la operación, interpretará el operador utilizado
 * y se preparará internamente para recibir un tipo de dato determinado
 * en este caso, un tipo number. Intentará convertir la variable b a un number,
 * pero al no poder hacerlo, regresará el valor NaN.
 */
let c = 50
let d = "Perro"
console.log(c - d)

/**
 * Booleanos: Los valores booleanos se pueden sumar o restar pq tambien significan 1 o 0
 */
let e = false
let f = true
console.log(e - f)
// Los booleanos también puedes ser procesados por el type coercion. Por ejemplo:
console.log("" == false)
console.log("" == true)
console.log("Hola" == false)
console.log("Hola" == true)