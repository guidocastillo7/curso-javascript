const usuario = {
    nombre: "Guido",
    edad: 29,
    deuda: 0
}

const pedido = []
let pago = 0

const showMenu = () => {
    console.log("Codigo - Producto - Precio")
    for(let producto of menu) {
        console.log(`${producto.codigo} - ${producto.nombre} - ${producto.precio}`)
    }
}


const pedirProducto = cod => {
    if (!cod) return "Ingrese un codigo de producto" // Si lo escribo asi en la misma linea no es necesario poner las llaves

    const busqueda = menu.find(producto => producto.codigo === cod)
    if (!busqueda) return "El producto no existe"

    pedido.push(busqueda) 
    console.log("El producto se ha agregado al pedido. Su pedido es:")
    return verPedido()
}

const verPedido = () => pedido

const calcularPago = () => {
    let total = 0
    for (producto of pedido) {
        total += producto.precio
    }
    pago = total
    return pago
}

const finalizarPedido = () => {
    calcularPago()
    usuario.deuda = pago

    pedido = []
    pago = 0
    return `${usuario.nombre}, debes pagar ${usuario.deuda}$.`
}