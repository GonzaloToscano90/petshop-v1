// Array Methods

const meses = ["Enero","Febrero","Marzo","Abril","Mayo"];

const carrito = [
{ nombre:"monitor 20 pulgadas",precio:500},
{ nombre:"television 50 pulgadas", precio :700},
{ nombre :"tablet", precio :300},
{ nombre :"audifonos",precio :200},
{ nombre :"celular",precio:500},
{ nombre: "bocinas", precio:300},
{ nombre: "laptop", precio: 800},

];

// forEach
meses.forEach(function(mes) {
    if(mes == "marzo") {
        console.log("marzo no existe");

    }
});

//Includes
const resultado= meses.includes("marzo");
console.log(resultado);

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === "celular PRO"
});
//Reduce
resultado = carrito.reduce ((total,producto)=>{
    return total + producto.precio
},0);

// Filter 
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== "celular"
});

console.log(resultado);
