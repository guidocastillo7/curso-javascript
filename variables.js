/**
 * Declaracion de variables: Se pone la palabra let antes del nombre de la variable
 */

let alumno

// Asignar valor
alumno = "Guido Castillo"

// Declarar y asignar valor al mismo tiempo
let hermano = "Adolfo Castillo"

// Reasignar valor
alumno = "Guibeth Castillo"

console.log(alumno)
console.log(hermano)

// Asignacion por referencia
let profesor = "Guido"
let estudiante = profesor 

console.log(profesor)
console.log(estudiante)

/*Constantes - Constant: Es igual que una variable pero la diferencia es que nunca se le puede cambiar el valor,
siempre sera un valor fijo, si se intenta cambiar el valor te sale un error.
De buena practica el nombre se le escribe en letras mayusculas.
Y no se puede crear una constante sin valor para asignarselo despues como las variables normales,
porque sino te sale un error */
const NOMBRE_EMPRESA  = "EDteam"
const SITIO_WEB = "https://ed.team"

console.log(NOMBRE_EMPRESA)
console.log(SITIO_WEB)