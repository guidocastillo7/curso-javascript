/**
 * Metodo ForEach: Es como un bucle
 * Necesita de parametro una funcion
 * Y dicha funcion lleva un parametro que sera como se va a llamar cada elemento que esta iterando
 * Y como tal este metodo no modifica el array
 */

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

// Aqui lo guardo en una variable, y esa variable se convierte en el nuevo array creado con map
let dato2 = personas.map(persona => `Hola ${persona}`)
console.log(dato2)