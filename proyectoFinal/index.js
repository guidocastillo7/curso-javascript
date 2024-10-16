/**
 * Logica para atender al cliente, mostrarle el menu, hacerle el pedido y cobrarle
 */

const usuario = {
    nombre: "Guido",
    edad: 29,
    deuda: 0
}

let pedido = []
let pago = 0

// Metodo para ver el menu en pantalla
const showMenu = () => {
    console.log("Codigo - Producto - Precio")
    for(let producto of menu) {
        console.log(`${producto.codigo} - ${producto.nombre} - ${producto.precio}`)
    }
}

// Metodo para pedir un producto y agregarlo al pedido
const pedirProducto = cod => {
    if (!cod) return "Ingrese un codigo de producto" // Si lo escribo asi en la misma linea no es necesario poner las llaves

    const busqueda = menu.find(producto => producto.codigo === cod)
    if (!busqueda) return "El producto no existe"

    pedido.push(busqueda) 
    console.log("El producto se ha agregado al pedido. Su pedido es:")
    return verPedido()
}

// Metodo para ver el pedido
const verPedido = () => pedido

// Metodo para calcular el pago
const calcularPago = () => {
    let total = 0
    for (producto of pedido) {
        total += producto.precio
    }
    pago = total
    return pago
}

// Metodo para finalizar el pedido y mostrar cuanto debe pagar
const finalizarPedido = () => {
    calcularPago()
    usuario.deuda = pago

    pedido = []
    pago = 0
    return `${usuario.nombre}, debes pagar ${usuario.deuda}$.`
}


// Metodo para cobrar el pedido
const pagarPedido = montoPagado => {
    if (typeof montoPagado === "number") {
        if (montoPagado < usuario.deuda) {
            return "Monto insuficiente."
        } else if (montoPagado === usuario.deuda) {
            usuario.deuda = 0
            return "Pago exitoso."
        } else if (montoPagado > usuario.deuda) {
            resto = montoPagado - usuario.deuda
            usuario.deuda = 0
            return `Pago exitoso, aqui tu cambio ${resto}$.`
        } else {
            return "Por favor ingresa un monto para pagar."
        }
    } else {
        return "Por favor ingresa un dato valido."
    }
} 