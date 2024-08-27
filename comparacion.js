/**
 * Operadores de comparación:
 * Igual que == (Compara solo el valor)
 * Estrictamente igual que === (Compara el valor y el tipo de dato)
 */

let a = 50
let b = 50
let comparar = a == b 
console.log(comparar)

// La diferencia con este comparador es que puedo comparar un number con un string, Ejemplo:
let c = 40
let d = "40"
comparar = c == d
console.log(comparar)

// Con este si puedo comparar si son de igual o diferente tipo, pero no da error como en python.
let e = 10
let f = "10"
comparar = e === f
console.log(comparar)

/**
 * Diferente que != (Comprar solo el valor)
 * Estrictamente diferente que !== (Compara el valor y el tipo de dato)
 */

let g = 10
let h = 1
comparar = g != h
console.log(comparar)

let i = 7
let j = "7"
comparar = i !== j
console.log(comparar)

/**
 * Mayor que >
 * Mayor o igual que >=
 * Menor que <
 * Menor o igual que <=
 */

let k = 20
let l = 30
comparar = k <= l
console.log(comparar)