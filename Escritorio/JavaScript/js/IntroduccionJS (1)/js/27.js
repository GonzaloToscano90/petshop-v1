// POO    

/** Objwet Literal */
const producto = {
    nombre: `tablet`,
    precio: 500
}

// Objet Constructor

function producto(nombre,apellido) {
    this.nombre = nombre;
    this.precio = apellido;
}
clearInterval.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}

function producto(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto en especifico
producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;

}
 
const producto2 = new producto(`Monitor Curvado de  49"`, 800);
const producto3 = new producto(`laptop`,300);
const cliente = new Cliente( `Fer`, `Toscano`);

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());