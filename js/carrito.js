// // Variables CARRITO
// const carrito = document.querySelector('#carrito');
// const listaArticulos = document.querySelector('#lista-articulos');
// const contenedorCarrito = document.querySelector('#lista-carrito tbody');
// const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
// let articulosCarrito = [];

// // CARRITO
// // Listeners
// cargarEventListeners();

// function cargarEventListeners() {
//     // Dispara cuando se presiona "Agregar Carrito"
//     listaArticulos.addEventListener('click', agregarCurso);

//     // Cuando se elimina un curso del carrito
//     carrito.addEventListener('click', eliminarCurso);

//     // Al Vaciar el carrito
//     vaciarCarritoBtn.addEventListener('click', () => {
//         articulosCarrito = []; //reseteamos el arreglo

//         vaciarCarrito(); // eliminamos todo el html
//     });

// }

// // Funciones
// // Función que añade el curso al carrito
// function agregarCurso(e) {
//     e.preventDefault();
//     // Delegation para agregar-carrito
//     if (e.target.classList.contains('agregar-carrito')) {
//         const curso = e.target.parentElement.parentElement;
//         // Enviamos el curso seleccionado para tomar sus datos
//         leerDatosCurso(curso);
//     }
// }

// // Lee los datos del curso
// function leerDatosCurso(curso) {
//     const infoCurso = {
//         imagen: curso.querySelector('img').src,
//         titulo: curso.querySelector('h2').textContent,
//         precio: curso.querySelector('span').textContent,
//         id: curso.querySelector('a').getAttribute('id'),
//         cantidad: 1
//     }
//     console.log(curso)


//     if (articulosCarrito.some(curso => curso.id === infoCurso.id)) {
//         const cursos = articulosCarrito.map(curso => {
//             if (curso.id === infoCurso.id) {
//                 curso.cantidad++;
//                 return curso;
//             } else {
//                 return curso;
//             }
//         })
//         articulosCarrito = [...cursos];
//     } else {
//         articulosCarrito = [...articulosCarrito, infoCurso];
//     }

//     console.log(articulosCarrito)



//     // console.log(articulosCarrito)
//     carritoHTML();
// }

// // Elimina el curso del carrito en el DOM
// function eliminarCurso(e) {
//     e.preventDefault();
//     if (e.target.classList.contains('borrar-curso')) {
//         e.target.parentElement.parentElement.remove();
//         const cursoId = e.target.getAttribute('id')

//         // Eliminar del arreglo del carrito
//         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

//         carritoHTML();
//     }
// }


// // Muestra el curso seleccionado en el Carrito
// function carritoHTML() {

//     vaciarCarrito();

//     articulosCarrito.forEach(curso => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//                <td>  
//                     <img src="${curso.imagen}" width=100>
//                </td>
//                <td>${curso.titulo}</td>
//                <td>${curso.precio}</td>
//                <td>${curso.cantidad} </td>
//                <td>
//                     <a href="#" class="borrar-curso" id="${curso.id}">X</a>
//                </td>
//           `;
//         contenedorCarrito.appendChild(row);
//     });

// }

// // Elimina los cursos del carrito en el DOM
// function vaciarCarrito() {
//     // forma lenta
//     // contenedorCarrito.innerHTML = '';


//     // forma rapida (recomendada)
//     while (contenedorCarrito.firstChild) {
//         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//     }
// }



const agregarCarritoBoton = document.querySelectorAll('.agregar-carrito')
    // console.log(agregarCarritoBoton)
agregarCarritoBoton.forEach(agregarCarritobtn => {
    agregarCarritobtn.addEventListener('click', agregarCarritoClick);
})
const vaciarCarritoBtn = document.querySelector('.boton-vaciar-carrito ');
vaciarCarritoBtn.addEventListener('click', vaciarCarrito)

//Div del contenido del Carrito
const carritoContenido = document.querySelector('.sec4__carrito')

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
            <button  onclick="sonidoEliminar.play()" class="borrar-curso" type='button'>X</button>
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
    sumarContador()
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

// function sumarContador() {
//     let valor = 0;
//     contadorTotal = document.querySelector('.contador');
//     const todosArticulosCarrito = document.querySelectorAll('.carrito__contenido');

// }

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