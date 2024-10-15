const usuario = {
    nombre: "Guido",
    edad: 29,
    deuda: 0
}

const pedido = []

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
    return pedido
}