// console.log("Parte 1")
// console.log("Ejercicio 1")
// let productos = 
// [
//     { id: 1, nombre: "Lola", precio: 1200, stock: 50 },
//     { id: 2, nombre: "Delfi", precio: 3000, stock: 12 },
//     { id: 3, nombre: "Agos", precio: 5000, stock: 60 },
//     { id: 4, nombre: "Joha", precio: 4000, stock: 10 },
//     { id: 5, nombre: "Ian", precio: 1, stock: 1 }
// ];

// productos.push({ id: 6, nombre: "NuevoProducto", precio: 1500, stock: 5 });

// productos.pop();

// console.log("Productos: "+productos)

// console.log("Ejercico 2")
// // let productosEnStock = productos.filter(s => s.stock>10)
// // console.log(productosEnStock)

// let prodcutosFiltrados=productos.filter(function(producto)
// {
//     return producto.stock>10 //asi es como se tendria que hacer
// })

// console.log(prodcutosFiltrados)

// console.log("Ejercicio 3")
// const nombreProducto="Pepe"
// const productoEncontrado=productos.find(producto => producto.nombre === nombreProducto);
// if(productoEncontrado)
// {
//     console.log(productoEncontrado)
// }
// else
// {
//     console.log("Producto no encontrado")
// }

// console.log("Ejercicio 4")
// const precioTotal = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
// console.log(precioTotal);

// const promedioPrecios = function() 
// {
//     const promedio = precioTotal / productos.length;
//     console.log(promedio);
// };

// promedioPrecios(); 

// console.log("Ejercicio 5")

// const stock0 = productos.some(s=>s.stock===0)
// console.log(stock0)
// const precioMas100=productos.every(p=>p.precio>100)
// console.log(precioMas100)

// console.log("Ejercicio 6")
// let clientes=[
//             {id:1, nombre:"Milky", edad:25,compras:["hola", "holaa"]},
//             {id:2, nombre:"Luly", edad:20,compras:["hola", "holaa"]},
//             {id:3, nombre:"Martina", edad:50,compras:["hola", "holaa"]}
//             ];

// clientes.forEach(cliente=>console.log(cliente.nombre + cliente.compras.length))

// console.log("Parte 2")
// console.log("Ejercicio 7")
// function procesarClientes(clientes,callback)
// {
//     callback(clientes)
// }

// procesarClientes(clientes, function(clientes)
// {
//     console.log("Nombre clientes: " + clientes.map(c=> c.nombre))
// })

// procesarClientes(clientes, function(clientes)
// {
//     console.log("Cantidad compras: " + clientes.map(c=>c.compras.length))
// })

// console.log("Ejercicio 8")
// let numeros=[5,3,7,8,2,1]
// numeros.sort((a,b)=>a-b)
// console.log("Ascendente: ", numeros)
// numeros.sort((a,b)=>b-a)
// console.log("Descendiente: ",numeros)

// console.log("Ejercicio 9")
// let tienda=
// {
//     productos: {...productos},
//     vender:function(idProducto,cantidad)
//     {
//         let productoEncontrado=productos.find(producto=>producto.id===idProducto)
//         if(productoEncontrado.stock>=cantidad)
//         {
//             productoEncontrado.stock-=cantidad
//             console.log("Venta realizada")
//         }
//         else
//         {
//             console.log("Stock insuficiente")
//         }
//     }
// }

// tienda.vender(1,3)

// console.log("Ejercicio 10")
// let carrito=[]

// carrito.push({producto:"tv", cantidad:1,precioUnitario:1000000})
// carrito.push({producto:"teclado", cantidad:3,precioUnitario:30000})
// carrito.push({producto:"mouse", cantidad:2,precioUnitario:15000})

// let total=carrito.reduce((acumulador, item)=>
// {
//     return acumulador + (item.cantidad * item.precioUnitario)
// }, 0)

// console.log("Precio total: " +total)

// let carritoMuestra= carrito.map(item =>
//     {
//         let subtotal=item.cantidad*item.precioUnitario
//         return "- Producto: "+item.producto +" - Cantidad: "+item.cantidad+" - Subtotal: "+subtotal
//     })
// console.log(carritoMuestra)

// console.log("Ejercicio 11")
// let libros=
// [
//     {id:1, titulo:"Titulo librito",autor:"Autorito",genero:"Terror",disponible:true},
//     {id:2, titulo:"Titulo",autor:"Autor",genero:"Romance",disponible:true},
//     {id:3, titulo:"Librito",autor:"Autori",genero:"Suspenso",disponible:false},
//     {id:4, titulo:"Titu",autor:"Au",genero:"Terror",disponible:true}
// ]
// let generoBuscado="Terror"
// let librosGeneros=libros.filter(libros => libros.genero===generoBuscado)
// console.log(librosGeneros)

// let librosMayus=libros.map(libro => libro.titulo.toUpperCase())
// console.log(librosMayus)

// function prestarLibro(id)
// {
//     let libro=libros.find(libro => libro.id===id)
//     if(!libro)
//     {
//         return "Libro no encontrado"
//     }
//     if(libro.disponible)
//     {
//         libro.disponible=false
//         return "Libro prestado"+libro.titulo
//     }
//     return "Libro no disponible"
// }

// console.log(prestarLibro(3))

// console.log("Ejercicio 12")

// let agenda=
// {
//     contactos:
//     [
//         {id:1, nombre:"Agos",telefono:1234},
//         {id:2, nombre:"Joha",telefono:12345}        
//     ],
//     agregarContacto:function(contacto)
//     {
//         console.log("Agrego contacto")
//         this.contactos.push(contacto)
//         console.log(this.contactos)
//     },
//     eliminarContacto:function(id)
//     {
//         console.log("Elimino contacto")
//         this.contactos=this.contactos.filter(c=>c.id!==id)
//         console.log(this.contactos)
//     },
//     buscarContactos:function(nombre)
//     {
//         console.log("Busco contacto")
//         return this.contactos.find(c=>c.nombre===nombre)
//         console.log(this.contactos)
//     },
//     listarContactos:function()
//     {
//         console.log("Muestro todos mis contactos")
//         console.log(this.contactos)
//     }
// }

// agenda.listarContactos()
// let contactoNuevo={id:3,nombre:"Lola",telefono:222}
// agenda.agregarContacto(contactoNuevo)
// agenda.eliminarContacto(3)
// agenda.buscarContactos("Joha")
// agenda.listarContactos()

// console.log("Ejercicio 13")
// let alumnos=
// [
//     {
//         id:1,
//         nombre:"Agos",
//         notas:
//         [
//             10,9,10,8
//         ]
//     },
//     {
//         id:2,
//         nombre:"Joha",
//         notas:
//         [
//             9,10,9,10
//         ]
//     },
//     {
//         id:3,
//         nombre:"Lola",
//         notas:
//         [
//             4
//         ]
//     }
// ]

// let alumnoPromedio= alumnos.map(alumno => 
//     {
//         let promedio = alumno.notas.reduce((acumulador, nota) => acumulador + nota, 0)/alumno.notas.length
//         return {id: alumno.id,nombre:alumno.nombre,promedio:promedio}
//     })
//     console.log(alumnoPromedio)

// let alumnosAprobados=alumnoPromedio.filter(alumnoPromedio => alumnoPromedio.promedio>=6)
// console.log(alumnosAprobados)

console.log("Parte 3")
console.log("Ejercicio 14")

let productos=
[
    {
        id:1,
        nombre:"Libro",
        precio:40000,
        stock:5
    },
    {
        id:2,
        nombre:"Mesa",
        precio:100000,
        stock:10
    },
    {
        id:3,
        nombre:"Monitor",
        precio:500000,
        stock:2
    }
]

/*
function comprar(id, cantidad, callbackExito, callbackError)
{
    let producto=productos.find(producto => producto.id===id)
    if(!producto)
    {
        callbackError("Producto no encontrado")
        return
    }
    if(producto.stock<cantidad)
    {
        callbackError("No hay stock suficiente")
        return
    }
    producto.stock=producto.stock-cantidad
    callbackExito(producto,cantidad)
}

function detalleCompra(producto,cantidad)
{
    console.log("- Producto: " + producto.nombre + " - Cantidad: "+ cantidad + " - Precio: " + (producto.precio*cantidad))
}

comprar(1, 3, detalleCompra, msj => console.log(msj))
comprar(3, 5, detalleCompra, msj => console.log(msj))
comprar(10, 1, detalleCompra, msj => console.log(msj))

console.log("Ejercicio 15")
function aplicarDescuento(id, porcentaje, callbackExito, callbackError)
{
    let producto=productos.find(producto => producto.id === id)
    if(!producto)
    {
        callbackError("Producto no encontrado")
        return
    }
    if(porcentaje <= 0 || porcentaje > 100)
    {
        callbackError("Porcentaje invalido")
        return
    }

    producto.precio -= (porcentaje*producto.precio)/100
    callbackExito(producto)
}

function descuento(producto)
{
    console.log("- Producto: " + producto.nombre + " - Nuevo precio: " + producto.precio)

    //Dentro del callback de exito
    console.log("Intentando comprar con el descuento...")
    comprar(producto.id, 2, detalleCompra,mensaje => console.log("Error: " + mensaje))
}

aplicarDescuento(1, 13, descuento, mensaje => console.log(mensaje))
// Caso: producto no existe
aplicarDescuento(99, 20, descuento, mensaje => console.log("Error:", mensaje));

// Caso: porcentaje inválido (≤ 0)
aplicarDescuento(2, 0, descuento, mensaje => console.log("Error:", mensaje));

// Caso: porcentaje inválido (> 100)
aplicarDescuento(2, 150, descuento, mensaje => console.log("Error:", mensaje));
*/

console.log("Ejercicio 16")

function filtrarPorStock(minStock, callbackExito, callbackError)
{
    let filtrados = productos.filter(p => p.stock >= minStock);
    if(filtrados.length>0)
    {
        callbackExito(filtrados)
        return
    }
    callbackError("No hay productos con ese stock")
}

function filtradoProductos(lista)
{
    console.log("Productos con stock suficiente:");
    ///El forEach se usa asi: llamo a mi lista, .forEach y hago una funcion arrow p => y entre {} escribo mi console.log, y listo
    lista.forEach(p => 
    {
        console.log("- Producto: " + p.nombre + " - Precio: " + p.precio + " - Stock: " + p.stock);
    })
}

filtrarPorStock(1,filtradoProductos, mensaje => console.log(mensaje))
filtrarPorStock(4,filtradoProductos, mensaje => console.log(mensaje))
filtrarPorStock(11,filtradoProductos, mensaje => console.log(mensaje))
