/**
 * Scope: es el alcance que tienen ciertos datos, en este caso las variables
 * Este funcionamiento aplica para todos los bloques de codigo
 * if, else, for, etc.. todo lo q este dentro de llaves {}
 */

let nombre = "Guido"
nombre = "Adolfo"

/* Scopre global: En este caso la variable nombre dentro de la funcion va a tomar
la que esta declarada arriba fuera de la funcion */
let saludar = function() {
    console.log(`Hola ${nombre}`)
}
saludar()



/* Scope local: En este caso toma la que le paso por el parametro
ya que es una variable de parametro especifica para la funcion
y no sirve fuera de la funcion */
let saludar = function(nombre) {
    console.log(`Hola ${nombre}`)
}
saludar("Guido")

/* Y en este caso me va a tomar tmb la que esta dentro de la funcion
y esa variable no funciona fuera de la funcion */
let saludar = function() {
    let nombre = "Guido"
    console.log(`Hola ${nombre}`)
}
saludar()

/* En cambio en este caso, si no declaro una nueva variable y solo cambio el valor a nombre,
me va a actualizar el valor de la variable creada arriba (afuera de la funcion) */
let saludar = function() {
    nombre = "Guido"
    console.log(`Hola ${nombre}`)
}
saludar()