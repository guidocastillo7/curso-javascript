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