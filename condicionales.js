/**
 * Condicionales
 */

/**
 * Condicional if: Entre parentesis va la condicion y entre llaves va la accion.
 * if (condicion) {accion a ejecutar}
 * Condicional else: Igualmente la accion va entre llaves
 * else {accion}
 * Condicional else if: Este es como el 'elif' de python, con la condicion entre parentesis y la accion entre llaves
 * else if (condicion) {accion}
 */ 
let persona = "Guido"
let edad = 10
let permiso = true

if (edad >= 18 && edad < 65) {
    console.log(`${persona} puede entrar al sitio.`)
} else if (permiso && edad < 18) {
    console.log(`Puedes pasar ${persona} porque tienes permiso.`)
} else {
    console.log(`No puedes entrar ${persona}.`)
}


/**
 * Condicionales multiples: Sirve para cuando tenemos muchas condiciones escritas con 'else if',
 * no repitamos tantas lineas escribiendolo. 
 * Se usa la palabra reservada 'switch' entre parentesis el dato a evaluar y entre llaves
 * todos los casos o condiciones que queramos verificar con la palabra 'case'
 */

let caracteristica = "Blanco"

switch (caracteristica) {
    case "Alto":
        console.log("Eres alto")
        break 
    case "28 años":
        console.log("Eres mayor de edad")
        break
    case "Gordo":
        console.log("Eres gordo")
        break
    case "Flaco":
        console.log("Eres flaco")
        break
    default:
        console.log("No diste ninguna caracteristica a evaluar.")
}
// case: Seria un 'else if'
// break: Es para frenar ya la busqueda de las demas condiciones si se consigue alguna
// default: Seria un 'else'