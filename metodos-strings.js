/**
 * Metodos de strings (cadenas)
 */

/* Metodo Slice: Sirve para cortar el texto
Si paso un numero de parametro, corta hasta el indice antes de ese numero
Si paso dos numeros de parametros, corta entre esos dos indices de los numeros */

let texto = "Guido Jose Castillo Vera"
let cortar = texto.slice(5, 10)
console.log("----SLICE----")
console.log(cortar)

/* Metodo Split: Sirve para dividir en partes la cadena
Devuelve un array con los elementos por separado
Si no le paso parametro, me crea el array con un solo elemento que seria el texto completo
Si le paso un caracter por parametro, separa la cadena por cada vez que haya ese caracter y lo elimina
Y si le paso de parametro solo "", me separa el texto letra por letra
*/

let separar = texto.split("o")
console.log("----SPLIT----")
console.log(separar)

/* Metodo Search: Sirve pasandole por parametro una expresion regular para hacer una busqueda o una comparacion */


/* Metodos toUpperCase y toLowerCase: Para convertir toda la cadena a minuscula o mayuscula */
let minuscula = texto.toLowerCase()
let mayuscula = texto.toUpperCase()
console.log("----UPPER y LOWER----")
console.log(mayuscula)
console.log(minuscula)



/**
 * Consultar aqui mas metodos de cadenas
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String#M%C3%A9todos
 */