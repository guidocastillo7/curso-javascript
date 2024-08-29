/**
 * Bucles for: Entre parentesis se escriben 3 datos:
 * Primero: la variable a declarar
 * Segundo: alguna condicion necesaria que seguiria o frenaria el bucle
 * Tercero: alguna accion a ejecutar 
 */

/** En este caso declaramos la variable i a 0
 * mientras i sea menor que 10 se sigue ejecutando el bucle
 * y en cada vuelta i se incrementa en 1
 */
for (let i = 0; i < 10; i++) {
    console.log(i)
}

/**En este caso es igual, pero la condicion es comparar si i es menor que la longitud de la variable nombre
 * y en cada vuelta tmb incrementamos i en 1
 * imprimimos cada caracter del string de nombre 
 */
let nombre = "guidocas"
for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i])
}

/**
 * Bucles while: Entre parentesis va la condicion de seguir ejecutando el bucle
 * y entre llaves la accion a ejecutar
 */
let numeros = 5
while (numeros > 0 ) {
    numeros--
    console.log(`Nos quedan ${numeros} numeros`)
}