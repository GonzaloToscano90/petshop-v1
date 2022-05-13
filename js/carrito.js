const agregarCarritoBoton = document.querySelectorAll('.agregar-carrito')
    // console.log(agregarCarritoBoton)
agregarCarritoBoton.forEach(agregarCarritobtn => {
    agregarCarritobtn.addEventListener('click', agregarCarritoClick);
})
const vaciarCarritoBtn = document.querySelector('.boton-vaciar-carrito ');
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

//Div del contenido del Carrito
const carritoContenido = document.querySelector('.sec4__carrito')
    // console.log("🚀 ~ file: carrito.js ~ line 136 ~ carritoContenido", typeof carritoContenido)

function agregarCarritoClick(e) {
    e.preventDefault();
    const boton = e.target;
    const articulo = boton.closest('.sec2__articulo') //closest-toma la clase mas cercana al seleccionado
    const tituloArticulo = articulo.querySelector('.sec2articulo--nombre').textContent;
    const articuloImagen = articulo.querySelector('.sec2__articulo--imagen').src;
    const articuloDescripcion = articulo.querySelector('.sec2__articulo--descripcion').textContent;
    const precioArticulo = articulo.querySelector('.sec2__articulo--precio').textContent;

    agregarArticuloCarrito(tituloArticulo, articuloImagen, articuloDescripcion, precioArticulo);

}

function agregarArticuloCarrito(tituloArticulo, articuloImagen, articuloDescripcion, precioArticulo) {

    const nombreArticulo = carritoContenido.getElementsByClassName(
        'articulo--nombre'
    );

    for (let i = 0; i < nombreArticulo.length; i++) {
        if (nombreArticulo[i].innerText === tituloArticulo) {
            // console.log(nombreArticulo[i].innerText)
            let elementQuantity = nombreArticulo[
                i
            ].parentElement.parentElement.parentElement.querySelector(
                '.cantidadArticuloCarrito'
            );
            elementQuantity.value++;

            sumarCarritoTotal();
            return;
        }
    }
    const carritoFilaDiv = document.createElement('div');
    const divCarritoContenido = `    
    
    <div class="carrito__contenedor">
        <div class="carrito__contenido">
            <div class="flex-colum">
                <div>
                    <h2 class='articulo--nombre'>${tituloArticulo}</h2>
                </div>
                <div class="flex-row">
                    <img src=${articuloImagen} style="width: 70px;height: 70px;">
                    <div>${articuloDescripcion}</div>   
                </div>
            </div>
            <div class='precioArticuloDiv'>${precioArticulo}</div>
            <div>
                <input class='cantidadArticuloCarrito' type="number" value="1" style="width: 50px; height: 20px;" />
            </div>
        </div>
        <div>
            <button  onclick="sonidoEliminar.play()" class="borrar-curso" type='button'><img src="img/eliminar.png" alt="cancelar"></button>
        </div>
    </div>    
    `

    carritoFilaDiv.innerHTML = divCarritoContenido
    carritoContenido.append(carritoFilaDiv);

    //boton de eliminar articulo
    carritoFilaDiv.querySelector('.borrar-curso').addEventListener('click', eliminarArticuloCarrito)

    //actualizar precio al aumentar cantidadArticuloCarrito
    carritoFilaDiv.querySelector('.cantidadArticuloCarrito').addEventListener('change', cambiarCantidad)

    sumarCarritoTotal()

};




// Sumar precio total 

function sumarCarritoTotal() {
    let total = 0;
    const compraTotal = document.querySelector('.compraSumaTotal');
    const contadorTotal = document.querySelector('.contador');

    const todosArticulosCarrito = document.querySelectorAll('.carrito__contenido');

    todosArticulosCarrito.forEach((contenidoCarrito) => {
        const precioArticuloCarrito = contenidoCarrito.querySelector(
            '.precioArticuloDiv'
        );
        const precioArticulo = Number(
            precioArticuloCarrito.textContent.replace('$', '')
        );
        const cantidadArtCarrito = contenidoCarrito.querySelector(
            '.cantidadArticuloCarrito'
        );
        const cantidadArticulosCarrito = Number(
            cantidadArtCarrito.value
        );
        total = total + precioArticulo * cantidadArticulosCarrito;
    });
    compraTotal.innerHTML = `Total a pagar: ${total.toFixed(2)} $`; // siempre fuera del forEach
    contadorTotal.innerHTML = `$ ${total} `; // actualiza el contador del icono de navegacion carrito

}


//Eliminar articulo del carrito
function eliminarArticuloCarrito(event) {
    const botonEliminar = event.target;
    botonEliminar.closest('.carrito__contenedor').remove();
    sumarCarritoTotal();
}

//cambiar cantidad de articulos
function cambiarCantidad(e) {
    const input = e.target;
    input.value <= 0 ? (input.value = 1) : null;
    sumarCarritoTotal();
}

function vaciarCarrito() {
    carritoContenido.innerHTML = '';
    sumarCarritoTotal();
}
const sonidoEliminar = new Audio();
sonidoEliminar.src = "./eliminar.mp3";