/**
 * Funciones flecha => (arrow functions): Es un metodo para simplificar funciones simples
 */

// La flecha hace el trabajo de un return
/* En este caso no se debe poner la palabra function ni ningun nombre 
directamente ya la reconoce como funcion poniendo dos parametros entre parentesis */
const suma = (a, b) => a + b
const resta = (c, d) => c - d 

console.log(suma(5, 7))
console.log(resta(10, 6))

// Cuando se hace con un solo parametro, no es necesario poner los parentesis
const saludo = nombre => `Hola ${nombre}, buenos dias!`
console.log(saludo("Guido"))

/* Cuando se necesita escribir algun tipo de logica se abren las llaves como de costumbre {}
y se puede escribir un return adentro de las llaves como de costumbre */
const saludar = persona => {
    if (typeof persona === "string") {
        console.log(`Hola ${persona}, buenos dias!`)
        return persona //ejemplo de poner un return
    } else {
        console.error("Tipo de dato invalido!")
    }
}
saludar("Adolfo")
saludar(587)