// let btnAgregCarrito = document.querySelector('.agregar-carrito');
let btnVaciarCarrito = document.getElementById('vaciar-carrito')
let iconoContador = document.getElementById('contador');
let valor = 0;



function contarClick() {
    valor++;
    document.getElementById('contador').textContent = valor;
}
btnVaciarCarrito.onclick = function() {
    iconoContador.textContent = '0';
}
btnVaciarCarrito.addEventListener('click', () => {
    valor = 0;
    resetContador()
})

// Elimina los articulos del icono contador
function resetContador() {
    // forma lenta
    iconoContador.textContent = '0';

}