/**
 * Metodo ForEach: Es como un bucle
 * Necesita de parametro una funcion
 * Y dicha funcion lleva un parametro que sera como se va a llamar cada elemento que esta iterando
 * Y como tal este metodo no modifica el array
 */

console.log("-----FOREACH-----")
let personas = ["Guido", "Adolfo", "Guibe", "Mami", "Papi"]
// Itera cada campo del array y hace lo que diga la funcion
personas.forEach(persona => console.log(persona))

// Si lo meto en una variable hace lo que dice la funcion
let dato = personas.forEach(persona => console.log(`Hola ${persona}`))

// Pero cuando imprimo en consola la variable dato, no me devuelve nada, dice undefined
console.log(dato)


/**
 * Metodo map: Tambien funciona como un bucle igual a forEach
 * La diferencia es que este metodo si devuelve un nuevo array
 */

/* Aqui lo guardo en una variable, y se convierte en un array creado con lo que devuelva la funcion
en este caso me devuelve el string Hola persona */
let dato2 = personas.map(persona => `Hola ${persona}`)
console.log("-----MAP-----")
console.log(dato2)



/**
 * Metodo filter: Tambien funciona como bucle iterando
 * Este metodo tambien me devuelve un nuevo array 
 * Pero filtrando por la condicion puesta en la funcion
 */

/* Por ejemplo aqui me crea un array con los numeros mayores a 4
No me devuelve true o false como seria en el caso de map */
let numeros = [2, 4, 6, 8, 10]
let nuevos_numeros = numeros.filter(num => num > 4)
console.log("-----FILTER-----")
console.log(nuevos_numeros)