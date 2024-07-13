// PRODUCTOS
const productos = [
    // Gameboy-consolas
    {
        id: "GameBoy-01",
        titulo: "Game Boy",
        imagen: "./img/gameboy/01.jpg",
        categoria: {
            nombre: "gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    {
        id: "GameBoy-02",
        titulo: "Game Boy Pocket",
        imagen: "./img/gameboy/02.jpg",
        categoria: {
            nombre: "gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    {
        id: "GameBoy-03",
        titulo: "Game Boy Color",
        imagen: "./img/gameboy/03.jpg",
        categoria: {
            nombre: "gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    {
        id: "GameBoy-04",
        titulo: "Game Boy Advance",
        imagen: "./img/gameboy/04.jpg",
        categoria: {
            nombre: "gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    {
        id: "GameBoy-05",
        titulo: "Game Boy Advance SP",
        imagen: "./img/gameboy/05.jpg",
        categoria: {
            nombre: "gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    // Pines
    {
        id: "pin-01",
        titulo: "pin 01",
        imagen: "./img/pines/01.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    {
        id: "pin-02",
        titulo: "pin 02",
        imagen: "./img/pines/02.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    {
        id: "pin-03",
        titulo: "pin 03",
        imagen: "./img/pines/03.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    {
        id: "pin-04",
        titulo: "pin 04",
        imagen: "./img/pines/04.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    {
        id: "pin-05",
        titulo: "pin 05",
        imagen: "./img/pines/05.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    {
        id: "pin-06",
        titulo: "pin 06",
        imagen: "./img/pines/06.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    {
        id: "pin-07",
        titulo: "pin 07",
        imagen: "./img/pines/07.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    {
        id: "pin-08",
        titulo: "pin 08",
        imagen: "./img/pines/08.jpg",
        categoria: {
            nombre: "pines",
            id: "pines"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camisetas-01",
        titulo: "camisetas 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camisetas-02",
        titulo: "camisetas 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camisetas-03",
        titulo: "camisetas 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camisetas-04",
        titulo: "camisetas 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camisetas-05",
        titulo: "camisetas 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "camisetas",
            id: "camisetas"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-valor">$${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}"><i class="bi bi-bag-plus-fill"></i> Agregar</button>
                    </div>
        
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);

        }
        

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("clic", agregarAlCarrito);
    });
}

const productosEnCarrito = [];


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}