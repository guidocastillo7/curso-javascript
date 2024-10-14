/**
 * Uso de Math y Date
 * Math para operaciones con numeros
 * Date para operaciones con fechas
 */


/* Math */
/* Metodo random: Me da un numero aleatorio entre 0 y 1
Si lo multiplico por algun numero, me da numero aleatorio entre 0 y ese numero multiplicado */
let aleatorio = Math.random()
let aleatorio2 = Math.random() * 10
console.log(aleatorio)
console.log(aleatorio2)

// Ver el valor de PI
let pi = Math.PI
console.log(pi)

// Tomar el numero mayor de una serie de numeros
let mayor = Math.max(12, 45, 53, 22)
console.log(mayor)

// Tomar el numero menor de una serie de numeros
let menor = Math.min(21, 4, 54, 33)
console.log(menor)


/* Date: Para usarlo se debe crear como tal una instancia de Date */
let fecha = new Date()

// Ver la fecha completa con dia, hora y zona horaria
console.log(fecha)

// Metodo para Ver el año actual
console.log(fecha.getFullYear())

// Metodo para ver el minuto actual de la hora
console.log(fecha.getMinutes())

/* Hay muchos metodos que tengo que investigar para aprender acerca de Math y Date */