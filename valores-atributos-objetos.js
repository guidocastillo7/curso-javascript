/**
 * Metodos y funciones de los Objetos
 */

let alumno = {
    nombre: "Guido",
    edad: 29,
    suscriptor: false,
    ciudad: "Cabimas"
}

/* Acceder a un valor del objeto
Escribiendo la clave despues del punto me devuelve el valor */
console.log(alumno.nombre)

// Tambien escribiendo entre corchetes la clave como string
console.log(alumno["suscriptor"])


/* Acceder a todos los valores del objeto en forma de array */
let valores = Object.values(alumno)
console.log(valores)

/* Acceder a todas las claves del objeto en forma de array */
let claves = Object.keys(alumno)
console.log(claves)