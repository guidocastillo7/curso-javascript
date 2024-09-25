/**
 * Funciones: Se escribe 'function' despues el nombre que le queramos dar,
 * se abren parentesis, en donde se pueden escribir parametros tmb,
 * y despues entre llaves va el codigo de la funcion
 */

function saludar() {
    console.log("Hola, buenos dias.")
}
//La llamada a la funcion se hace igual, poniendo el nombre con los parentesis
saludar()


// Funciones con parametros: Funciona igual poniendo el parametro entre los parentesis
function imprime(edad) {
    console.log(`Tengo ${edad} años.`)
}
imprime(28)

function presentar(nombre, edad) {
    console.log(`Me llamo ${nombre} y tengo ${edad} años.`)
}
presentar("Guido", 28)

function sumar(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        let suma = num1 + num2
        console.log(`El total de la suma es: ${suma}`)
    } else {
        console.log("Escribe dos numeros validos!")
    }
}
sumar(5, 25)
sumar("10", "5")


// Funciones con return: funciona igual escribiendo el return al final de la funcion

function nombreCompleto(nombre, apellido) {
    let result = `${nombre} ${apellido}`

    return result
}
console.log("Aqui el nombre completo: ", nombreCompleto("Guido", "Castillo"))

/* Funciones de primera clase: Se consideran de 'primera clase' 
todos los datos o cosas en programacion que se puedan almacenar en una variable */
let nombreFinal = nombreCompleto("Guido Jose", "Castillo Vera")
console.log(nombreFinal)

/* Si yo almaceno en la variable la funcion con solo su nombre y la imprimo
me muestra todo el codigo de la funcion */
let muestraFuncion = nombreCompleto
console.log(muestraFuncion)

/* Si yo almaceno en la variable la funcion con solo su nombre
le puedo pasar los parametros de dicha funcion directamente a la variable */
let variableFuncion = nombreCompleto
console.log(variableFuncion("Variable", "Funcion"))


/* Funciones anonimas: Son las funciones sin nombre, las podemos almacenar en una variable y ese seria su nomobre
o se pueden escribir entre parentesis y se ejecutan de una vez */
let sumarTres = function(a, b, c) {
    console.log(a+b+c)
}
sumarTres(5, 8, 7);

// Para escribirla y que se ejecute de una vez tiene que ir entre parentesis y se le pasan los parametros al final en parentesis
(function(c,d) {
    console.log(c+d)
}(10, 7))


/* Funciones como constantes: Cuando se crea una variable con el valor de una funcion
siempre se deben crear como 'const' porque el codigo de la funcion nunca tiene que cambiar */
const funcionHola = function(nombre) {
    console.log(`Hola ${nombre}`)
}
funcionHola("Guido")