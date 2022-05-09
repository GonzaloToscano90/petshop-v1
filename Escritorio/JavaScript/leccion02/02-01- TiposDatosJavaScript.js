/* Ejemplos de datos numericos en javasxript */

// Tipo de dato string
var nombre = "Iker"; 
console.log( typeof nombre );


// Tipo de dato numerico
var numero = 1000;
console.log( numero );

var nombre = 10;
console.log( typeof nombre );


// Tipo de dato objet
var objeto = {
    nombre : "Enrique",
    apellido : "Toscano"
}
console.log( typeof objeto );


// Tipo de dato boolean (true, false)
var bandra = true;
console.log( typeof true );


// Tipo de dato function
function miFuncion() {}
    console.log( typeof miFuncion );


// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log( typeof simbolo );

// Tipo clase es una funcion
 class persona {
     constructor(nombre, apellido){
     this.nombre = nombre;
     this.apellido = apellido;
 }
}
console.log( persona );


// Tipo undefined
var x;
console.log( x );


// null = ausencia de valor
var y = null;
console.log( typeof y );


// Tipo de dato Array
const autos = ["Bmw", "Audi", "bolbo"];
console.log(autos);
console.log( typeof autos );

const motos = [ "Xtz" , "Honda" , "Yamaha"];
console.log(motos);


var z = "";
console.log(z);
console.log( typeof z );

// Concatenacion de cadenas en javascript

var nombre =  "Martina";
var apellido = "Garcia";

var nombreCompleto = nombre + " "+ apellido;
console.log( nombreCompleto );

var nombreCompleto2 = "Kiara" + "" + "Garcia";
console.log ( nombreCompleto2 );

var x = nombre + 219;
console.log( x );

x = nombre +(2 + 4);
console.log( x );

 x = 2+ 4 + nombre;
 console.log( x );
