// Arrow Functions
const sumar2 = function() {
    console.log(3 + 3);
}


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
meses.forEach(mes => {
    if(mes == "marzo") {
        console.log("marzo si existe");

    }
});

let resultado;


// Some ideal para arreglo de objetos
resultado = carrito.some (producto =>producto.nombre === "celular PRO");
//Reduce
resultado = carrito.reduce( (total,producto)=>
    total + producto.precio,0);

// Filter 
resultado = carrito.filter(producto=>
     producto.precio > 400);

resultado = carrito.filter(producto =>
    producto.nombre !== "celular");

console.log(resultado);
