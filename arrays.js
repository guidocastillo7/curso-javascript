/**
 * Trabajando con colecciones de datos:
 * Arrays (Listas)
 */

let personas = ["Guido", "Adolfo", "Mami"]
console.log(personas)

// Agregar un elemento al array
personas.push("Papi")
console.log(personas)
/* Si yo hago el push almacenado en una variable y la imprimo
me devuelve el length del array */
let contar = personas.push("Guibe")
console.log(contar)


// Eliminar un elemento del array
let palabras = ["Hola", "Chao", "Estar", "Correr"]
console.log(palabras)
palabras.pop()
console.log(palabras)
let quitar = palabras.pop() // Si lo hago en una variable y la imprimo, me devuelve el elemento quitado
console.log(quitar)
console.log(palabras)


// Cortar un array
/* Se pasa en los parametros desde y hasta cual indice se quiere cortar
La diferencia es que este metodo no modifica el array original
sino que retorna un array nuevo cortado hasta donde se dijo
entonces para obtener ese array cortado hay que almacenar el metodo en una variable */
let nombres = ["Guido", "Adolfo", "Nicolas", "Guibe", "Mily"]
console.log(nombres)
nombres.slice(0, 2) // OJO aqui seria desde el elemento 0 hasta el elemente ANTES que el 2, osea del 0 al 1
console.log(nombres)
let cortar = nombres.slice(0, 2) 
console.log(cortar) // Se imprime la variable donde se hizo el slice y ahi te devuelve el array cortado